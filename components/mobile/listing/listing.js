import { connect } from 'react-redux'
import Link from 'next/link'
import moment from 'moment'

import { white, opacity1, black, primary, blue1, blue6, orange1, blue2 } from '../../../common/color'

class listing extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.search)
    }

    showAmenities = (val) => {
        const amenities = this.props.search.data.AllAmenities
        return(
            val.map((amen, index) => {
                if (index < 5) {
                    return <img
                        key = { index }
                        src = { '/static/img/' + amenities[amen].toLowerCase() + '.svg' }
                        alt = { amenities[amen] }
                        height = "15"
                    />
                }
                return '';
            })
        )
    }

    getLeftListing = (bus) => {
        return (
            <div className = "srch-left" style = {{ width: '75%' }}>
                <div className = "elp" style = { this.styleStrong }>{ bus.CompanyName } { bus.CompanySuffix }</div>
                { bus.DiscountPct > 3 &&
                    <div>
                        <span style = { this.styleDisc }>Exclusive offer</span>
                        <span>&nbsp;Additional { bus.DiscountPct }% off</span>
                    </div>
                }
                <div className = "elp">{ bus.DisplayBusType }</div>
                <div className = "elp" style = {{ display: 'flex' }}>
                    <div>{ moment(bus.DeptTime).format("hh:mm A") }</div>
                    <div className = "flsbc" style = { this.stylePointer }>
                        <span style = { this.stylePointer1 }></span>
                        <span style = { this.stylePointer2 }></span>
                        <span style = { this.stylePointer3 }></span>
                    </div>
                    <div>{ moment(bus.ArrTime).format("hh:mm A, DD MMM") }</div>
                </div>
            </div>
        )
    }

    getRightListing = (bus) => {
        return (
            <div style = {{ textAlign: 'right' }}>
                <div style = { this.styleStrong }>&#8377; { bus.BusStatus.DiscFares[0] }</div>
                { bus.DiscountPct > 3 && 
                    <div className = "strike">&#8377; { bus.BusStatus.BaseFares[1] }</div>
                }
                <div className = "amen">
                    {   
                        bus.MTicket &&
                        <img src = "/static/img/m-ticket.svg" alt = "mticket" height = "15" />
                    }
                    { this.showAmenities(bus.Amenities) }
                </div>
                <div>{ bus.BusStatus.Availability } seats</div>
            </div>
        )
    }

    showBusList = () => {
        const list = this.props.search.buses;
        return list.map((bus, index) => {
            return (
                <Link key = { index } as = { `/search/${this.props.search.from}-to-${this.props.search.to}/seatchart-${ bus.RouteBusId }/${ this.props.search.data.FromCityId }/${ this.props.search.data.ToCityId }?departDate=${ this.props.search.journeyDate }` } href = "/seatchart" passHref>
                    <div className = "flsbc" style = { this.styleSearchCard }>
                        { this.getLeftListing(bus) }
                        { this.getRightListing(bus) }
                    </div>
                </Link>
            )
        })
    }
    
    render() {
        return (
            <div style = {
                this.props.modifyOpen ? 
                { height: 'calc(100vh - 315px)', overflowY: 'auto' } : 
                { height: 'calc(100vh - 103px)', overflowY: 'auto' }
            }>
                { this.showBusList() }
                <div className = "flcc" style = { this.styleFilter }>
                    <img src = "/static/img/filter.svg" height = "23" />
                </div>
            </div>
        )
    }

    // Styles
    styleSearchCard = {
        position: 'relative',
        background: white,
        padding: '10px 15px',
        marginBottom: '5px',
        fontSize: '0.75rem',
        lineHeight: 2,
        letterSpacing: 'normal',
        boxShadow: `0 1px 1px ${ opacity1 }`
    }
    styleStrong = {
        fontSize: '0.85rem',
        color: black,
        fontWeight: 400
    }
    stylePointer = {
        position: 'relative',
        width: '50px',
        margin: '0 10px'
    }
    stylePointer1 = {
        width: '8px',
        height: '8px',
        background: blue1,
        borderRadius: '50%'
    }
    stylePointer2 = {
        width: '25px',
        height: '1px',
        background: primary
    }
    stylePointer3 = {
        width: '8px',
        height: '8px',
        background: blue6
    }
    styleDisc = {
        background: orange1,
        color: white,
        padding: '1px'
    }
    styleFilter = {
        position: 'fixed',
        bottom: '40px',
        right: '15px',
        background: blue2,
        borderRadius: '50%',
        padding: '20px',
        boxShadow: `0 10px 10px ${ opacity1 }`
    }
}

const mapStateToProps = function(store) {
    return (store);
};

export default connect(mapStateToProps)(listing)