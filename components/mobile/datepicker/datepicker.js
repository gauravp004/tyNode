import 'react-dates/initialize'
import { DayPickerSingleDateController } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import moment from 'moment'

import Custom from '../header/custom'
import Button from '../../utilities/others/button1'
import Footer from '../footer/bottom'
import { primary, secondary, white, text6, opacity1, text1 } from '../../../config/common'

export default class datepicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selDate : null,
            showDate: this.props.date
        }
    }

    checkOutsideRange = (e) => {
        let today = new Date()
        today.setHours(0,0,0,0)
        return today >= e._d
    }

    onDateChange = (val) => {
        console.log(val)
        const showDate = moment(val).format("ddd MMM DD YYYY")
        this.setState({ showDate })
        this.props.onSelect(val, showDate)
    }

    render() {
        return (
            <div>
                <style jsx global>{`
                    .head-wrapper {
                        position: relative;
                        width: calc(100% - 30px);
                    }
                    .week-wrapper {
                        background: ${ primary };
                        color: ${ white };
                        padding: 15px;
                        margin-top: -1px;
                    }
                    .DayPicker {
                        height: calc(100vh - 103px);
                        overflow: hidden;
                    }
                    .DayPicker_weekHeaders,
                    .DayPickerNavigation__verticalDefault {
                        display: none;
                    }
                    .CalendarDay__default,
                    .CalendarDay__default:hover {
                        border: 0;
                        border-radius: 50%;
                        color: #444;
                    }
                    .DayPicker_transitionContainer__vertical {
                        overflow: auto;
                    }
                    .CalendarMonth {
                        border-bottom: 1px solid #eee;
                    }
                    .CalendarMonth_caption {
                        text-align: left;
                        padding: 15px;
                    }
                    .CalendarMonth_caption strong {
                        font-weight: 400;
                    }
                    .CalendarDay__selected, .CalendarDay__selected:active, .CalendarDay__selected:hover {
                        background: transparent;
                    }
                    .CalendarDay__default:hover {
                        background: ${ primary };
                        color: ${ white };
                    }
                    .CalendarDay__blocked_out_of_range, .CalendarDay__blocked_out_of_range:active, .CalendarDay__blocked_out_of_range:hover {
                        background: transparent;
                        color: ${ text6 };
                        opacity: 0.3;
                    }
                `}</style>
                <Custom>
                    <span onClick = { this.props.onClose }>&#x2715;</span>
                    <div className = "head-wrapper">Journey date</div>
                </Custom>
                <div className = "week-wrapper flsac">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                </div>
                <DayPickerSingleDateController
                    date = { this.state.selDate }
                    onDateChange = { this.onDateChange }
                    numberOfMonths = { 6 }
                    noBorder = { true }
                    firstDayOfWeek = { 1 }
                    hideKeyboardShortcutsPanel = { true }
                    orientation = "vertical"
                    daySize = { Math.round(window.innerWidth / 7) - 3 }
                    isOutsideRange = { this.checkOutsideRange }
                />
                <Footer
                    active = { this.props.from && this.props.to && this.state.showDate }
                    textAlign = "center"
                    fontSize = "0.75rem"
                >
                    <div>{ this.props.from } to { this.props.to } on { this.state.showDate } </div>
                    <Button onClick = { this.props.searchBus } margin = '15px auto 0'>Search bus</Button>
                </Footer>
            </div>
        )
    }
}