import Router from 'next/router'
import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { getCityList, getSearchParams } from '../../../redux/actions/search-actions'

import { httprequest_get } from '../../../common/utilities'
import { primary, secondary, white, text1, text6, blue2 } from '../../../config/common'

import Loader from '../loader/loader'
import Slider from '../slider/slider'
import Autocomplete from '../autocomplete/autocomplete'
import Datepicker from '../datepicker/datepicker'

class searchPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showLoader: false,
            fromCity : '',
            fromClass: 'slider bottom',
            toCity : '',
            toClass: 'slider bottom',
            departDate : '',
            showDate : '',
            departClass: 'slider bottom'
        }
    }

    componentDidMount() {
        if (this.props.search.cityList.length === 0) {
            this.getCityList()
        }
    }

    getCityList = () => {
        const that = this
        const cityRequest = httprequest_get("https://api.iamgds.com/api/CityList", true)
        cityRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const cityList = JSON.parse(cityRequest.responseText).data
                cityList && that.setState({ cityList })
                // store.dispatch(getCityList(cityList))
                const {dispatch} = that.props
                dispatch(getCityList(cityList))
            }
        }
    }

    searchBus = (e) => {
        this.setState({ showLoader: true })
        e.preventDefault()
        if (this.state.fromCity && this.state.toCity && this.state.departDate) {
            const url = `/search/${this.state.fromCity}-to-${this.state.toCity}?departDate=${moment(this.state.departDate).format("DD-MM-YYYY")}`
            const {dispatch} = this.props
            dispatch(getSearchParams(this.state.fromCity, this.state.toCity, moment(this.state.departDate).format("YYYY-MM-DD")))
            Router.push("/search", url)
            console.log(this.props)
        } else {
            alert("Please fill all the fields")
        }
        this.setState({ showLoader: false })
    }

    render() {
        return (
            <div>
                { this.state.showLoader && <Loader /> }
                <style jsx>{`
                    .srch-form {
                        background: ${ primary };
                        padding: 15px;
                    }
                    .srch-form>div {
                        position: relative;
                        background: ${ white };
                        margin-bottom: 10px;
                        border-radius: 3px;
                    }
                    .srch-form>div input {
                        width: 100%;
                        background: transparent;
                        border: 0;
                        outline: 0;
                        height: 40px;
                        color: ${ text1 };
                        padding: 5px 5px 5px 65px;
                    }
                    .srch-form>div label {
                        position: absolute;
                        top: 10px;
                        color: ${ text6 };
                        left: 15px;
                        font-size: 16px;
                    }
                    button {
                        width: 100%;
                        height: 40px;
                        border: 0;
                        background: ${ secondary };
                        padding: 8px 10px;
                        font-size: 14pt;
                        font-weight: 400;
                        color: ${ white };
                        outline: 0;
                        border-radius: 3px;
                        box-shadow: rgba(0,0,0,.16) 0 1px 2px 0;
                        text-transform: uppercase;
                    }
                    .next-day {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: absolute;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        color: ${ white };
                        background: ${ blue2 };
                        border-radius: 0 3px 3px 0;
                        width: 96px;
                        text-align: center;
                    }
                `}</style>
                <form onSubmit = { this.searchBus } className = "srch-form">
                    <div onClick = { () => this.setState({ fromClass: 'slider bottom active' }) }>
                        <input type = "text" placeholder = "Starting city" value = { this.state.fromCity } readOnly />
                        <label>From:</label>
                    </div>
                    <div onClick = { () => this.setState({ toClass: 'slider bottom active' }) }>
                        <input type = "text" placeholder = "Destination city" value = { this.state.toCity } readOnly />
                        <label>To:</label>
                    </div>
                    <div onClick = { () => this.setState({ departClass: 'slider bottom active' }) }>
                        <input type = "text" placeholder = "Select journey date" value = { this.state.showDate } readOnly />
                        <label>Date:</label>
                        <span className = "next-day">NEXT DAY</span>
                    </div>
                    <button type = "submit">Search bus</button>
                </form>
                <Slider classes = { this.state.fromClass } >
                    {
                        this.state.fromClass === 'slider bottom active' &&
                        <Autocomplete
                            list = { this.props.search.cityList }
                            onSelect = { (sel) => this.setState({ fromCity: sel, toClass: 'slider bottom active' }) }
                            selValue = { this.state.fromCity }
                            label = 'From city'
                            placeholder = 'Starting city'
                            onClose = { () => this.setState({ fromClass: 'slider bottom' }) }
                        />
                    }
                </Slider>
                <Slider classes = { this.state.toClass } >
                    {
                        this.state.toClass === 'slider bottom active' &&
                        <Autocomplete
                            list = { this.props.search.cityList }
                            onSelect = { (sel) => this.setState({ toCity: sel, departClass: 'slider bottom active' }) }
                            selValue = { this.state.toCity }
                            label = 'To city'
                            placeholder = 'Destination city'
                            onClose = { () => this.setState({ toClass: 'slider bottom' }) }
                        />
                    }
                </Slider>
                <Slider classes = { this.state.departClass } >
                    {
                        this.state.departClass === 'slider bottom active' &&
                        <Datepicker
                            from = { this.state.fromCity }
                            to = { this.state.toCity }
                            date = { this.state.showDate }
                            onSelect = { (departDate, showDate) => this.setState({ departDate, showDate }) }
                            onClose = { () => this.setState({ departClass: 'slider bottom' }) }
                            searchBus = { this.searchBus }
                        />
                    }
                </Slider>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return (store)
}

export default connect(mapStateToProps)(searchPanel)