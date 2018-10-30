import { connect } from 'react-redux'

import { white, text3, black, text2, text1, opacity1, light1, light3 } from '../../../config/common'

import Custom from '../header/custom'
import Close from '../../utilities/others/close'
import Arrow from '../../utilities/others/fillarrow'
import CheckBox from '../../utilities/inputs/checkbox'
import Button from '../../utilities/others/button1'
import Slider from '../slider/slider2'

class filter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showFilter: false,
            activeFilter: [],
            filterCheck: {
                Deals: false,
                Mticket: false
            },
            filterDeals: false,
            filterMticket: false
        }
    }

    st = this.props.search.staticData

    filterOrder = [
        {
            name: 'Deals',
            label: 'Deals',
            subtitle: 'Discount fare buses only',
            check: true
        },
        {
            name: 'Departure',
            label: 'Departure time',
            subtitle: 'From 6 am to 12 pm',
            height: 150
        },
        {
            name: 'Coach',
            label: 'Bus & coach type',
            subtitle: 'Sleeper, seater AC, non AC, Volvo, non Volvo etc',
            height: 190
        },
        {
            name: 'Price',
            label: 'Price range',
            subtitle: `Available from Rs.${ this.st.minPrice } to Rs.${ this.st.maxPrice }`,
            height: 150
        },
        {
            name: 'Operator',
            label: 'Bus operators',
            subtitle: `Choose from ${ this.st.operators.length } operators`,
            height: 250
        },
        {
            name: 'Mticket',
            label: 'mTicket',
            subtitle: 'Mobile ticket for boarding your bus',
            check: true
        },
        {
            name: 'Amenities',
            label: 'Amenities',
            subtitle: this.st.amenities.join(', ').substring(0, this.st.amenities.length - 2) + " etc",
            height: 250
        },
        {
            name: 'Pickup',
            label: 'Pickup point',
            subtitle: `Choose from ${ this.st.pickups.length } pickup locations`,
            height: 250
        },
        {
            name: 'Dropoff',
            label: 'Dropoff point',
            subtitle: `Choose from ${ this.st.dropoffs.length } dropoff locations`,
            height: 250
        },
    ]
    
    checkDeparture = () => {
        console.log('Departure')
    }
    
    checkCoach = () => {
        console.log('Coach')
    }
    
    checkPrice = () => {
        console.log('Price')
    }
    
    checkOperator = () => {
        console.log('Operator')
    }

    checkAmenities = () => {
        console.log('Amenities')
    }

    checkPickup = () => {
        console.log('Pickup')
    }

    checkDropoff = () => {
        console.log('Dropoff')
    }

    headClick = (el) => {
        if (el.check) {
            let filterCheck = this.state.filterCheck
            filterCheck[ 'filter' + el.name ] = !this.state.filterCheck[ 'filter' + el.name ]
            this.setState({ filterCheck })
        } else {
            console.log( this.refs['content' + el.name].getBoundingClientRect() )
            let activeFilter = [el.name, true]
            this.state.activeFilter[0] === el.name && (activeFilter[1] = !this.state.activeFilter[1])
            this.setState({ activeFilter })
        }
    }
    
    showDeparture = () => {
        return <div>Hello</div>
    }
    
    showCoach = (val) => {
        return (
            <div
                style = {{
                    marginTop: this.state.activeFilter[0] === val && this.state.activeFilter[1] ? '15px' : 0,
                    fontSize: '0.85rem'
                }}
            >
                {
                    this.st.coach.map(
                        (el, index) => <CheckBox
                            key = { index }
                            active = { false }
                            text = { el }
                            right = "10px"
                            padding = "5px 0 5px 20px"
                        />
                    )
                }
            </div>
        )
    }
    
    showPrice = () => {
        return <div>Hello</div>
    }
    
    showOperator = (val) => {
        return (
            <div
                style = {{
                    marginTop: this.state.activeFilter[0] === val && this.state.activeFilter[1] ? '15px' : 0,
                    fontSize: '0.85rem',
                    height: '240px',
                    overflow: 'auto'
                }}
            >
                {
                    this.st.operators.map(
                        (el, index) => <CheckBox
                            key = { index }
                            active = { false }
                            text = { el }
                            right = "10px"
                            padding = "5px 0 5px 20px"
                        />
                    )
                }
            </div>
        )
    }

    showAmenities = () => {
        return <div>Hello</div>
    }

    showPickup = () => {
        return <div>Hello</div>
    }

    showDropoff = () => {
        return <div>Hello</div>
    }

    render = () => (
        <div style = {{
            height: '100%',
            overflow: 'auto'
        }}>
            <style jsx>{`
                .filter-content {
                    padding: 50px 0 90px;
                    background: ${ light3 };
                }
                .filter-wrapper {
                    padding: 15px;
                    font-size: 0.75rem;
                    background: ${ white };
                    border-bottom: 1px solid ${ text3 };
                    // margin-bottom: 5px;
                    // box-shadow: 0 1px 1px ${ opacity1(0.2) }
                }
                .filter-head {
                    line-height: 1.6;
                }
                .filter-head>div:first-child {
                    font-size: 0.9rem;
                    color: ${ black };
                    font-weight: 400;
                }
                .filter-bottom {
                    position: fixed;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    text-align: center;
                    border-top: 1px solid ${ text3 };
                    background: ${ white };
                    height: 90px;
                }
                .filter-bottom>div {
                    width: 50%;
                }
            `}</style>
            <Custom
                style = {{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 2
                }}
            >
                <Close onClick = { this.props.onClose } />
                <div className = "flsbc" style = {{ width: 'calc(100% - 30px)' }}>
                    <span>Bus filter</span>
                    <span onClick = { () => alert('What to reset?') }>Reset</span>
                </div>
            </Custom>
            <div className = "filter-content">
                {
                    this.filterOrder.map((el, index) => (
                        <div key = { index } className = "filter-wrapper" ref = { 'content' + el.name }>
                            <div className = "flsbc" onClick = { () => this.headClick(el) }>
                                <div className = "filter-head">
                                    <div>{ el.label }</div>
                                    <div>{ el.subtitle }</div>
                                </div>
                                {
                                    el.check ?
                                    <div>
                                        <CheckBox active = { this.state.filterCheck['filter' + el.name] } padding = '0' />
                                    </div>
                                    :
                                    <div className = "flc">
                                        <Arrow
                                            color = { text1 }
                                            style = {{
                                                marginTop: this.state.activeFilter[0] === el.name && this.state.activeFilter[1] ? '-5px' : '3px'
                                            }}
                                            up = { this.state.activeFilter[0] === el.name && this.state.activeFilter[1] }
                                            down = { this.state.activeFilter[0] === el.name ? !this.state.activeFilter[1] : true }
                                        />
                                    </div>
                                }
                            </div>
                            {
                                !el.check &&
                                <Slider
                                    height = { el.height + 'px' }
                                    active = { this.state.activeFilter[0] === el.name && this.state.activeFilter[1] }
                                    style = {{ padding: '15px 0' }}
                                >
                                    { this[ 'show' + el.name ](el.name) }
                                </Slider>
                                // <div className = "filter-body">
                                //     Hidden Content
                                // </div>
                            }
                        </div>
                    ))
                }
            </div>
            <div className = "flsbc filter-bottom">
                <div>
                    <strong>{ this.props.search.buses.length }</strong>
                    <br />
                    Results found
                </div>
                <div>
                    <Button
                        width = "80%"
                        fontSize = "0.9rem"
                        onClick = { () => alert("Filter not applied :-(") }
                    >Apply filters</Button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = function(store) {
    return (store)
}

export default connect(mapStateToProps)(filter)