import { connect } from 'react-redux'
import { updateSearchBuses } from '../../../redux/actions/search-actions'

import { sortOrder } from '../../../config/mobile/search'
import { primary, white } from '../../../config/common'
import Arrow from '../../utilities/others/fillarrow'

class sort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: '',
            order: false
        }
    }

    sortPrice = () => {
        const buses = this.props.search.data.Buses
        const order = this.state.active === 'Price' ? !this.state.order : false
        this.setState({
            active: 'Price',
            order
        })
        let sortedBus
        if (order) {
            sortedBus = buses.sort((a,b) => {return (a.BusStatus.DiscFares[0] < b.BusStatus.DiscFares[0]) ? 1 : ((b.BusStatus.DiscFares[0] < a.BusStatus.DiscFares[0]) ? -1 : 0)})
        } else {
            sortedBus = buses.sort((a,b) => {return (a.BusStatus.DiscFares[0] > b.BusStatus.DiscFares[0]) ? 1 : ((b.BusStatus.DiscFares[0] > a.BusStatus.DiscFares[0]) ? -1 : 0)})
        }
        this.props.dispatch(updateSearchBuses(sortedBus))
    }

    sortArrival = () => {
        const buses = this.props.search.data.Buses
        const order = this.state.active === 'Arrival' ? !this.state.order : false
        this.setState({
            active: 'Arrival',
            order
        })
        let sortedBus
        if (order) {
            sortedBus = buses.sort((a,b) => {return (a.ArrTime < b.ArrTime) ? 1 : ((b.ArrTime < a.ArrTime) ? -1 : 0)})
        } else {
            sortedBus = buses.sort((a,b) => {return (a.ArrTime > b.ArrTime) ? 1 : ((b.ArrTime > a.ArrTime) ? -1 : 0)})
        }
        this.props.dispatch(updateSearchBuses(sortedBus))
    }

    sortDeparture = () => {
        const buses = this.props.search.data.Buses
        const order = this.state.active === 'Departure' ? !this.state.order : false
        this.setState({
            active: 'Departure',
            order
        })
        let sortedBus
        if (order) {
            sortedBus = buses.sort((a,b) => {return (a.DeptTime < b.DeptTime) ? 1 : ((b.DeptTime < a.DeptTime) ? -1 : 0)})
        } else {
            sortedBus = buses.sort((a,b) => {return (a.DeptTime > b.DeptTime) ? 1 : ((b.DeptTime > a.DeptTime) ? -1 : 0)})
        }
        this.props.dispatch(updateSearchBuses(sortedBus))
    }

    sortDeals = () => {
        console.log('Deals')
        const buses = this.props.search.data.Buses
        const order = this.state.active === 'Deals' ? !this.state.order : true
        this.setState({
            active: 'Deals',
            order
        })
        let sortedBus
        if (order) {
            sortedBus = buses.sort((a,b) => {return (a.DiscountPct < b.DiscountPct) ? 1 : ((b.DiscountPct < a.DiscountPct) ? -1 : 0)})
        } else {
            sortedBus = buses.sort((a,b) => {return (a.DiscountPct > b.DiscountPct) ? 1 : ((b.DiscountPct > a.DiscountPct) ? -1 : 0)})
        }
        this.props.dispatch(updateSearchBuses(sortedBus))
    }

    sortDuration = () => {
        const buses = this.props.search.data.Buses
        const order = this.state.active === 'Duration' ? !this.state.order : false
        this.setState({
            active: 'Duration',
            order
        })
        let sortedBus
        if (order) {
            sortedBus = buses.sort((a,b) => {return (parseInt(a.Duration.split(':').join(''), 10) < parseInt(b.Duration.split(':').join(''), 10)) ? 1 : ((parseInt(b.Duration.split(':').join(''), 10) < parseInt(a.Duration.split(':').join(''), 10)) ? -1 : 0)})
        } else {
            sortedBus = buses.sort((a,b) => {return (parseInt(a.Duration.split(':').join(''), 10) > parseInt(b.Duration.split(':').join(''), 10)) ? 1 : ((parseInt(b.Duration.split(':').join(''), 10) > parseInt(a.Duration.split(':').join(''), 10)) ? -1 : 0)})
        }
        this.props.dispatch(updateSearchBuses(sortedBus))
    }
    
    render = () => (
        <div
            className = "flsbc"
            style = {{
                width: '100%',
                background: primary,
                color: white,
                padding: '15px',
                fontSize: '0.85rem',
                letterSpacing: 'normal'
            }}
        >
            {
                sortOrder.map((el, index) => (
                    <div
                        key = { index }
                        className = "flc"
                        onClick = { this['sort' + el] }
                        style = {{ position: 'relative' }}
                    >
                        { el }
                        {
                            this.state.active === el &&
                            <Arrow
                                color = { white }
                                style = {{ position: 'absolute', right: '-12px', top: ( !this.state.order ? '1px' : '5px' ) }}
                                up = { !this.state.order }
                                down = { this.state.order }
                            />
                        }
                    </div>
                ))
            }
        </div>
    )
    
}

const mapStateToProps = function(store) {
    return (store);
};

export default connect(mapStateToProps)(sort)