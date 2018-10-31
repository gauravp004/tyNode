import { connect } from 'react-redux'
import { updateFilterPrice, updateFilterDeparture, updateFilterCoach, updateFilterOperators, updateFilterAmenities, updateFilterPickups, updateFilterDropoffs, updateFilterReset, updateFilterDeals, updateFilterMtkt } from '../../../redux/actions/search-actions'

import { white, text3, black, text1, opacity1, light3, primary, text6 } from '../../../config/common'

import Custom from '../header/custom'
import Close from '../../utilities/others/close'
import Arrow from '../../utilities/others/fillarrow'
import CheckBox from '../../utilities/inputs/checkbox'
import Radio from '../../utilities/inputs/radio'
import Button from '../../utilities/others/button1'
import Slider from '../slider/slider2'
import SearchIcon from '../../utilities/img/searchiconsvg'

class filter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeFilter: [],
            filterCheck: {
                Deals: false,
                Mticket: false
            },
            filterDeals: false,
            filterMticket: false,
            selCoach: [],
            selOperators: [],
            selPickups: [],
            selDropoffs: [],
            selAmenities: [],
            inputs: {
                operators: '',
                pickups: '',
                dropoffs: '',
                amenities: '',
                departure: ['12', '00'],
                price: [this.props.search.staticData.minPrice, this.props.search.staticData.maxPrice]
            },
            isAm: true
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
            height: 120
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
            height: 120
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
    
    checkDeparture = (e, sel) => {
        let inputs = this.state.inputs
        if (sel === 'hh') {
            inputs.departure[0] = e.target.value <= 12 ? e.target.value : inputs.departure[0]
        } else {
            inputs.departure[1] = e.target.value <= 59 ? e.target.value : inputs.departure[1]
        }
        this.setState({ inputs })
        this.props.dispatch(updateFilterDeparture({ hh: inputs.departure[0], mm: inputs.departure[1] }))
    }
    
    checkCoach = (sel) => {
        let selCoach = this.state.selCoach
        if (selCoach.indexOf(sel) >= 0) {
            selCoach.splice(selCoach.indexOf(sel), 1)
        } else {
            selCoach.push(sel)
        }
        this.setState({ selCoach })
        this.props.dispatch(updateFilterCoach(selCoach))
    }
    
    checkPrice = (e, sel) => {
        // const min = this.props.search.staticData.minPrice
        // const max = this.props.search.staticData.maxPrice
        let inputs = this.state.inputs
        if (sel === 'min') {
            inputs.price[0] = e.target.value
        } else {
            inputs.price[1] = e.target.value
        }
        this.setState({ inputs })
        this.props.dispatch(updateFilterPrice({ min: inputs.price[0], max: inputs.price[1] }))
    }
    
    checkOperator = (sel) => {
        let selOperators = this.state.selOperators
        if (selOperators.indexOf(sel) >= 0) {
            selOperators.splice(selOperators.indexOf(sel), 1)
        } else {
            selOperators.push(sel)
        }
        this.setState({ selOperators })
        this.props.dispatch(updateFilterOperators(selOperators))
    }

    checkAmenities = (sel) => {
        let selAmenities = this.state.selAmenities
        if (selAmenities.indexOf(sel) >= 0) {
            selAmenities.splice(selAmenities.indexOf(sel), 1)
        } else {
            selAmenities.push(sel)
        }
        this.setState({ selAmenities })
        this.props.dispatch(updateFilterAmenities(selAmenities))
    }

    checkPickup = (sel) => {
        let selPickups = this.state.selPickups
        if (selPickups.indexOf(sel) >= 0) {
            selPickups.splice(selPickups.indexOf(sel), 1)
        } else {
            selPickups.push(sel)
        }
        this.setState({ selPickups })
        this.props.dispatch(updateFilterPickups(selPickups))
    }

    checkDropoff = (sel) => {
        let selDropoffs = this.state.selDropoffs
        if (selDropoffs.indexOf(sel) >= 0) {
            selDropoffs.splice(selDropoffs.indexOf(sel), 1)
        } else {
            selDropoffs.push(sel)
        }
        this.setState({ selDropoffs })
        this.props.dispatch(updateFilterDropoffs(selDropoffs))
    }

    headClick = (el) => {
        if (el.check) {
            let filterCheck = this.state.filterCheck
            filterCheck[ 'filter' + el.name ] = !this.state.filterCheck[ 'filter' + el.name ]
            this.setState({ filterCheck })
            el.name === 'Deals' && this.props.dispatch(updateFilterDeals())
            el.name === 'Mticket' && this.props.dispatch(updateFilterMtkt())
        } else {
            const top = this.refs['content' + el.name].getBoundingClientRect().top
            // console.log( this.refs['content' + el.name].getBoundingClientRect() )
            // setTimeout(() => {
                this.refs.filterContent.scrollTo(0, top - 50)
            // }, 600);
            let activeFilter = [el.name, true]
            this.state.activeFilter[0] === el.name && (activeFilter[1] = !this.state.activeFilter[1])
            this.setState({ activeFilter })
        }
    }

    inputChange = (e, sel) => {
        let inputs = this.state.inputs
        let list = []
        inputs[sel] = e.target.value
        this.props.search.staticData[sel].forEach(el => {
            if (el.toLowerCase().indexOf(inputs[sel].toLowerCase()) === 0) {
                list.push(el)
            }
        });
        this.setState({ inputs })
        this.st[sel] = list
    }
    
    showCoach = () => {
        return <ShowFilterList
            list = { this.st.coach }
            name = { false }
            onClick = { this.checkCoach }
            active = { this.state.selCoach }
        />
    }
    
    showDeparture = () => {
        return (
            <div className = "dep-wrapper">
                <style jsx>{`
                    .dep-wrapper {
                        padding-left: 20px;
                    }
                    .dep-wrapper>div:first-child {
                        padding-bottom: 20px;
                        font-size: 0.9rem;
                    }
                    .inp-wrapper {
                        position: relative;
                        text-align: center;
                    }
                    input {
                        padding: 15px 0 10px;
                        width: 60px;
                        color: ${ primary };
                        font-size: 1.4rem;
                        font-weight: 400;
                        text-align: center;
                        border: 0;
                        outline: 0;
                        box-shadow: none;
                        border-bottom: 1px solid ${ text1 };
                    }
                    label {
                        position: absolute;
                        top: -2px;
                        left: 0;
                        right: 0;
                        color: ${ text6 };
                        font-size: 0.8rem;
                    }
                    .inp-dots {
                        font-size: 1.7rem;
                        color: ${ primary };
                        font-weight: 400;
                    }
                    .flsbc {
                        font-size: 1.2rem;
                    }
                `}</style>
                <div>Buses starting from</div>
                <div className = "flc">
                    <div className = "inp-wrapper">
                        <label>HH</label>
                        <input
                            type = "number"
                            value = { this.state.inputs.departure[0] }
                            onChange = { (event) => this.checkDeparture(event, 'hh') }
                        />
                    </div>
                    <div className = "inp-dots">:</div>
                    <div className = "inp-wrapper">
                        <label>MM</label>
                        <input
                            type = "number"
                            value = { this.state.inputs.departure[1] }
                            onChange = { (event) => this.checkDeparture(event, 'mm') }
                        />
                    </div>
                    <div className = "flsbc">
                        <Radio
                            text = "AM"
                            color = { this.state.isAm ? primary : text1 }
                            padding = "0 0 0 10px"
                            fontWeight = { this.state.isAm ? "400" : false }
                            checkColor = { !this.state.isAm ? text1 : false }
                            active = { this.state.isAm }
                            onClick = { () => this.setState({ isAm: true }) }
                        />
                        <Radio
                            text = "PM"
                            color = { !this.state.isAm ? primary : text1 }
                            padding = "0 0 0 10px"
                            fontWeight = { !this.state.isAm ? "400" : false }
                            checkColor = { this.state.isAm ? text1 : false }
                            active = { !this.state.isAm }
                            onClick = { () => this.setState({ isAm: false }) }
                        />
                    </div>
                </div>
            </div>
        )
    }
    
    showPrice = () => {
        return (
            <div className = "price-wrapper">
                <style jsx>{`
                    .price-wrapper {
                        padding: 15px 0 0 20px;
                    }
                    .inp-wrapper {
                        position: relative;
                        text-align: center;
                        margin-right: 30px;
                    }
                    input {
                        padding: 15px 0 10px;
                        width: 60px;
                        color: ${ primary };
                        font-size: 1.4rem;
                        font-weight: 400;
                        text-align: center;
                        border: 0;
                        outline: 0;
                        box-shadow: none;
                        border-bottom: 1px solid ${ text1 };
                    }
                    label {
                        position: absolute;
                        top: -5px;
                        left: 0;
                        right: 0;
                        color: ${ text6 };
                        font-size: 0.8rem;
                    }
                    span {
                        padding: 5px 0 0;
                    }
                `}</style>
                <div className = "flc">
                    <div className = "inp-wrapper flcolc">
                        <label>From</label>
                        <input
                            type = "number"
                            value = { this.state.inputs.price[0] }
                            onChange = { (event) => this.checkPrice(event, 'min') }
                        />
                        <span>min &#8377;{ this.props.search.staticData.minPrice }</span>
                    </div>
                    <div className = "inp-wrapper flcolc">
                        <label>To</label>
                        <input
                            type = "number"
                            value = { this.state.inputs.price[1] }
                            onChange = { (event) => this.checkPrice(event, 'max') }
                        />
                        <span>max &#8377;{ this.props.search.staticData.maxPrice }</span>
                    </div>
                </div>
            </div>
        )
    }
    
    showOperator = () => {
        return <ShowFilterList
            list = { this.st.operators }
            name = { 'operators' }
            onClick = { this.checkOperator }
            active = { this.state.selOperators }
            onChange = { this.inputChange }
            input = { this.state.inputs.operator }
        />
    }

    showAmenities = () => {
        return <ShowFilterList
            list = { this.st.amenities }
            name = { 'amenities' }
            onClick = { this.checkAmenities }
            active = { this.state.selAmenities }
            onChange = { this.inputChange }
            input = { this.state.inputs.amenities }
        />
    }

    showPickup = () => {
        return <ShowFilterList
            list = { this.st.pickups }
            name = { 'pickups' }
            onClick = { this.checkPickup }
            active = { this.state.selPickups }
            onChange = { this.inputChange }
            input = { this.state.inputs.pickup }
        />
    }

    showDropoff = () => {
        return <ShowFilterList
            list = { this.st.dropoffs }
            name = { 'dropoffs' }
            onClick = { this.checkDropoff }
            active = { this.state.selDropoffs }
            onChange = { this.inputChange }
            input = { this.state.inputs.dropoff }
        />
    }

    render = () => (
        <div style = {{
            height: '100%'
        }}>
            <style jsx>{`
                .filter-content {
                    padding: 50px 0 90px;
                    background: ${ light3 };
                    height: 100%;
                    overflow: auto;
                }
                .filter-wrapper {
                    padding: 15px 15px 0;
                    font-size: 0.75rem;
                    background: ${ white };
                    border-bottom: 1px solid ${ text3 };
                    // margin-bottom: 5px;
                    // box-shadow: 0 1px 1px ${ opacity1(0.2) }
                }
                .filter-head {
                    line-height: 1.6;
                    margin-bottom: 15px;
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
                    <span onClick = { () => this.props.dispatch(updateFilterReset()) }>Reset</span>
                </div>
            </Custom>
            <div className = "filter-content" ref = "filterContent">
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
                                        <CheckBox active = { this.props.search[el.name] } padding = '0' />
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
                        onClick = { this.props.onClose }
                    >Apply filters</Button>
                </div>
            </div>
        </div>
    )
}

const ShowFilterList = (props) => (
    <div className = "filter-list-wrapper">
        <style jsx>{`
            .filter-list-wrapper {
                fontSize: 0.85rem;
                height: 240px;
                overflow: auto;
            }
            .input-wrapper {
                position: relative;
                margin-bottom: 15px;
            }
            input {
                display: block;
                font-size: 0.9rem;
                width: 100%;
                padding: 5px 10px 10px 15px;
                border: none;
                box-shadow: none;
                border-bottom: solid 2px ${ text3 };
                color: ${ text1 };
            }
            input:focus {
                border-color: ${ primary };
            }
            input::placeholder {
                font-style: italic;
            }
        `}</style>
        {
            props.name &&
            <div className = "input-wrapper">
                <SearchIcon
                    width = "10px"
                    height = "10px"
                    style = {{
                        position: "absolute",
                        left: 0,
                        top: "8px"
                    }}
                />
                <input
                    type = "text"
                    placeholder = { `Search from ${ props.list.length } ${ props.name } locations` }
                    style = {{
                        borderBottom: `1px solid ${ text3 }`
                    }}
                    onChange = { (event) => props.onChange(event, props.name) }
                    value = { props.input }
                    autoFocus
                />
            </div>
        }
        {
            props.list.map(
                (el, index) => <CheckBox
                    key = { index }
                    active = { false }
                    text = { el }
                    right = "10px"
                    padding = "5px 0 5px 20px"
                    onClick = { () => props.onClick(el) }
                    active = { props.active.indexOf(el) >= 0 }
                />
            )
        }
    </div>
)

const mapStateToProps = function(store) {
    return (store)
}

export default connect(mapStateToProps)(filter)