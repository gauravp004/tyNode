import { connect } from 'react-redux'

import Wrapper from '../wrapper'

import moment from 'moment'
import { httprequest_get, getQueryParams } from '../../../common/utilities'
import { getSearchParams, getSearchResult } from '../../../redux/actions/search-actions'
// Head tag for search page
import HomeHead from '../headtag/srp'
import Loader from '../../utilities/loader/loader'
import Header from '../header/srp'
import Listing from './listing'
import FilterIco from '../../utilities/others/filter1'
import Slider from '../slider/slider'
import FilterScreen from './filter'

class search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showLoader: true,
            showSearch: false,
            from: encodeURIComponent(this.props.search.from),
            to: encodeURIComponent(this.props.search.to),
            journeyDate: this.props.search.journeyDate,
            showFilter: false
        }
    }

    componentDidMount() {
        const st = this.state
        const pt = window.location.pathname
        if (st.from && st.to && st.journeyDate) {
            this.getSearchList()
        } else {
            const tempDt = getQueryParams().departDate ? getQueryParams().departDate.split('-') : false
            const journeyDate = tempDt[2] + '-' + tempDt[1] + '-' + tempDt[0]
            const searchParams = pt.split('/search/').length > 1 ? pt.split('/search/')[1].split('-to-') : false
            
            if (searchParams && tempDt) {
                this.setState({
                    from: searchParams[0],
                    to: searchParams[1],
                    journeyDate
                })
                const {dispatch} = this.props
                dispatch(getSearchParams(searchParams[0], searchParams[1], journeyDate))
                setTimeout(() => {
                    this.getSearchList()
                }, 100)
            } else {
                alert("Some error occured. Please try again")
                window.history.back()
            }
        }
    }

    getSearchList = () => {
        const that = this
        const srch = this.props.search
        const searchReq = httprequest_get(`https://api.iamgds.com/api/Search?fromCity=${ srch.from }&toCity=${ srch.to }&journeyDate=${srch.journeyDate}`, true)

        searchReq.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const searchRes = JSON.parse(searchReq.responseText).data
                // console.log(searchRes)
                const {dispatch} = that.props
                dispatch(getSearchResult(searchRes))
                that.setState({
                    showLoader: false
                })
            }
        }
    }
    
    render() {
        return (
            <Wrapper>
                { this.state.showLoader && <Loader /> }
                <HomeHead />
                <Header 
                    from = { this.state.from }
                    to = { this.state.to }
                    journeyDate = { moment(this.state.journeyDate).format("ddd, DD MMM") }
                    showSearch = { this.state.showSearch }
                    onClick = { () => this.setState({ showSearch: !this.state.showSearch }) }
                    showSort = { this.props.search.buses.length > 0 }
                />
                {
                    this.props.search.buses.length > 0 &&
                    <Listing />
                }
                {
                    this.props.search.data && this.props.search.data.Buses && this.props.search.data.Buses.length > 0 &&
                    <FilterIco onClick = { () => this.setState({ showFilter: true }) } />
                }
                {
                    this.props.search.data && this.props.search.data.Buses && this.props.search.data.Buses.length > 0 &&
                    <Slider active = { this.state.showFilter } direction = "bottom">
                        <FilterScreen
                            onClose = { () => this.setState({ showFilter: false }) }
                        />
                    </Slider>
                }
            </Wrapper>
        )
    }
    
}

const mapStateToProps = function(store) {
    return (store)
}

export default connect(mapStateToProps)(search)