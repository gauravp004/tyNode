import { connect } from 'react-redux'
import moment from 'moment'
import { httprequest_get, getQueryParams } from '../common/utilities'
import { getSeatchart, updateSeatSel, resetSeatchart } from '../redux/actions/seatchart-actions'
// Head tag for search page
import HomeHead from '../components/mobile/headtag/srp'
import Loader from '../components/mobile/loader/loader'
import Header from '../components/mobile/header/seatchart'

import '../common/normalize.css'
import { white, primary, text3, light2, opacity1, text6 } from '../config/common';

let 
    rD,
    cW = 30,
    cH = 30,
    cX = 40,
    cY = 40,
    cSH = 40,
    cSW = 40

class seatchart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showLoader: true,
            seatchart: false,
            lower: true,
            // seat: this.props.seatchart.seatchart[this.props.seat],
            rD: [],
            lowerDeckStyle: {},
            lowerDeckWidth: '',
            lowerDeckHeight: '',
            upperDeckStyle: {},
            upperDeckWidth: '',
            upperDeckHeight: '',
            fareFilter: 0,
            passengerDetails: [],
            baseFare: 0,
            routeOffer: 0,
            taxes: 0,
            totalWithDiscount: 0,
            totalWithoutDiscount: 0,
            // fare: 0,
            // discountedFare: 0,
            exceedError: false,
            isBookedSeatError: false,
            hold: false
        }
    }

    componentDidMount() {
        this.getSeatchartDetails()
        const {dispatch} = this.props
        dispatch(resetSeatchart())
    }

    getSeatchartDetails = () => {
        const that = this
        const pt = window.location.pathname.split('/')

        const seatchartReq = httprequest_get(`https://api.iamgds.com/api/Chart?fromCityId=${ pt[4] }&toCityId=${ pt[5] }&journeyDate=${ getQueryParams().departDate }&busId=${ pt[3].split('-')[1] }&details=true&busInfo=true`, true)

        seatchartReq.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const seatchart = JSON.parse(seatchartReq.responseText).data
                console.log(seatchart)
                const {dispatch} = that.props
                dispatch(getSeatchart(seatchart))
                that.setState({
                    showLoader: false,
                    seatchart
                })
                that.styleSC(seatchart)
                that.parseSC(seatchart)
            }
        }
    }

    showFareFilter = () => {
        const uniq = this.state.seatchart.SeatsStatus.UniqFares
        uniq.indexOf(0) >= 0 && uniq.splice(uniq.indexOf(0), 1)
        if (uniq.length > 1) {
            return (
                <div className = "fare-filter-wrapper">
                    <style jsx>{`
                        .fare-filter-wrapper {
                            display: flex;
                            padding: 0 15px;
                            background: ${ primary };
                            color: ${ white };
                            font-size: 0.7rem;
                            width: 100%;
                            white-space: nowrap;
                            overflow-x: auto;
                            box-shadow: 0 1px 15px 0 ${ opacity1 };
                        }
                        .fare-filter {
                            padding: 10px;
                            border-bottom: 3px solid ${ primary };
                        }
                        .fare-filter.active {
                            border-bottom-color: ${ white };
                        }
                        .flc::-webkit-scrollbar {
                            width: 0!important;
                            height: 0!important;
                        }
                    `}</style>
                    <div
                        onClick = { () => this.fareFilter(0) }
                        className = { this.state.fareFilter === 0 ? 'fare-filter active' : 'fare-filter' }
                    >All</div>
                    <div className = "flc" style = {{ width: 'calc(100% - 120px)', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                        {
                            uniq.length > 1 &&
                            uniq.map ( (el, index) => 
                                el !== 0 && 
                                <div key = { index } onClick = { () => this.fareFilter(el) } className = { this.state.fareFilter === el ? 'fare-filter active' : 'fare-filter' }>&#8377;{ el }</div>
                            )
                        }
                    </div>
                    <div className = "fare-filter" style = {{ marginLeft: 'auto', paddingRight: 0 }}>Policies</div>
                </div>
            )
        }
    }

    showCanvas = () => {
        const seat = this.state.seatchart
        return (
            <div className = "seatchart-wrapper">
                <style jsx>{`
                    .seatchart-wrapper {
                        width: calc(100% - 30px);
                        background: ${ white };
                        margin: 15px auto;
                        box-shadow: 0 0 5px ${ opacity1 };
                        border-radius: 3px;
                    }
                    .layout-btn {
                        background: ${ text3 };
                    }
                    .layout-btn>div {
                        width: calc(50% - 1px);
                        padding: 10px 15px;
                        font-size: 0.8rem;
                        text-align: center;
                        background: ${ white };
                        color: ${ text6 };
                        border-bottom: 2px solid ${ text3 };
                    }
                    .layout-btn>div.active {
                        color: ${ primary };
                        font-weight: 400;
                        border-color: transparent;
                        transition: 0.3s ease;
                    }
                    canvas {
                        display: block;
                        margin: auto;
                    }
                    .wheels {
                        width: ${this.state.lowerDeckWidth}px;
                        text-align: right;
                        margin: auto;
                        padding: 5px 0;
                        border-bottom: 1px dotted ${ text3 };
                        margin-bottom: 10px;
                    }
                `}</style>
                {/* <div className = "seatchart"> */}
                    {
                        seat.ChartLayout.Layout.Upper &&
                        <div className = "flsbc layout-btn">
                            <div
                                className = { this.state.lower && 'active' }
                                onClick = { () => this.setState({ lower: true }) }
                            >Lower({ this.state.seatchart.AvailSeats.Lower } Seats)</div>
                            <div
                                className = { !this.state.lower && 'active' }
                                onClick = { () => this.setState({ lower: false }) }
                            >Upper({ this.state.seatchart.AvailSeats.Upper } Seats)</div>
                        </div>
                    }
                    <div className = "wheels">
                        <img src = "/static/img/operator.svg" alt = "Driver" />
                    </div>
                    <canvas
                        ref = 'cL'
                        style = { !this.state.lower ? { display :"none" } : {} }
                        onClick = { (event) => this.clickSCFn(event, 'Lower') }
                    />
                    {
                        seat.ChartLayout.Layout.Upper &&
                        <canvas
                            ref = 'cU'
                            style = { this.state.lower ? { display :"none" } : {} }
                            onClick = { (event) => this.clickSCFn(event, 'Upper') }
                        />
                    }
                {/* </div> */}
            </div>
        )
    }

    fareFilter = (val) => {
        this.setState({ fareFilter: val })
        this.forceUpdate()
        setTimeout(() => {
            this.initSC(this.state.seatchart)
        })
    }

    removeObjInArr(arr, attr, value) {
        var i = arr.length;
        while (i--) {
            if (arr[i] && arr[i].hasOwnProperty(attr) &&
                (arguments.length > 2 && arr[i][attr] === value)) {
                arr.splice(i, 1);
            }
        }
        return arr;
    }

    getGender = (val) => {
        if (val === 3) {
            return 'F';
        } else if (val === 2) {
            return 'M';
        } else {
            return '';
        }
    }

    onSelectFn = (val) => {
        if (this.state.hold) {
            this.setState({ hold: false })
        }
        const propSt = this.props.seatchart.selSeats
        const stFr = this.state.seatchart.SeatsStatus.Fares

        this.isBookedSeatError = false
        let passengerInfo = {},
            passengerDetails = propSt ? propSt.passengerDetails : [],
            baseFare = propSt ? propSt.baseFare : 0,
            routeOffer = propSt ? propSt.routeOffer : 0,
            // taxes = propSt ? propSt.taxes : 0
            taxes = 0,
            totalWithDiscount = propSt ? propSt.totalWithDiscount : 0,
            totalWithoutDiscount = propSt ? propSt.totalWithoutDiscount : 0
            // fare = this.state.fare
            // discountedFare = this.state.discountedFare
        if (!val[9]) {
            this.setState({exceedError: false})
            passengerInfo['seatNo'] = this.state.seatchart.ChartSeats.Seats[val[0]]
            passengerInfo['fare'] = stFr[val[0]][0]
            passengerInfo['baseFare'] = stFr[val[0]][1]
            passengerInfo['serviceTax'] = stFr[val[0]][2]
            passengerInfo['gender'] = this.getGender(this.state.seatchart.SeatsStatus.Status[val[0]])
            passengerInfo['name'] = ''
            passengerInfo['age'] = ''
            passengerInfo['isMale'] = passengerInfo['gender'] === 'M' ? true : false
            passengerInfo['isFemale'] = passengerInfo['gender'] === 'F' ? true : false
            // passengerInfo['seat'] = 'Lower'
            // if (passengerInfo['gender'] === 'M') {
            //     passengerInfo['isMale'] = true
            // } else if (passengerInfo['gender'] === 'f' || passengerInfo['gender'] === 'F') {
            //     passengerInfo['isFemale'] = true
            // }
            passengerDetails.push(passengerInfo)
            baseFare += stFr[val[0]][1]
            routeOffer += ( stFr[val[0]][1] - stFr[val[0]][4] )
            // taxes += stFr[val[0]][2]
            totalWithDiscount += stFr[val[0]][4]
            // totalWithDiscount += stFr[val[0]][0]
            // totalWithoutDiscount += ( stFr[val[0]][1] + stFr[val[0]][2] )
            totalWithoutDiscount += stFr[val[0]][1]
        } else {
            this.setState({exceedError: false})
            this.removeObjInArr(passengerDetails, 'seatNo', this.state.seatchart.ChartSeats.Seats[val[0]])
            baseFare -= stFr[val[0]][1]
            routeOffer -= ( stFr[val[0]][1] - stFr[val[0]][4] )
            // taxes -= stFr[val[0]][2]
            totalWithDiscount -= stFr[val[0]][4]
            // totalWithDiscount -= stFr[val[0]][0]
            // totalWithoutDiscount -= ( stFr[val[0]][1] + stFr[val[0]][2] )
            totalWithoutDiscount -= stFr[val[0]][1]
        }
        const {dispatch} = this.props
        dispatch(updateSeatSel({ passengerDetails, baseFare, routeOffer, taxes, totalWithDiscount, totalWithoutDiscount }))
        // store.dispatch(updateSeatSel(this.props.seat, { passengerDetails, baseFare, routeOffer, taxes, totalWithDiscount, totalWithoutDiscount }))
    }

    /*--------------------------Canvas Start-------------------------------------*/
    /*
        Parsing the Seatchart Array - 
        1. Including 
            Seat status (General, M, F, Sold), 
            Fares (Discounted base fare as is to be displayed), 
            Color for seats
            Is selected (Boolean)
    */

    parseSC = (resp) => {
        const that = this,
            fR = resp.SeatsStatus.Fares,
            sS = resp.SeatsStatus.Status,
            lR = resp.ChartLayout.Layout.Lower
        lR.forEach(function(i) {
            const fare = fR[i[0]] && fR[i[0]].length > 0 ? fR[i[0]][4] : 0
            i.push(sS[i[0]], fare, that.getColorSC(sS[i[0]]), false)
        })
        if (resp.ChartLayout.Layout.Upper && resp.ChartLayout.Layout.Upper.length > 0) {
            const uR = resp.ChartLayout.Layout.Upper
            uR.forEach(function(i) {
                const fare = fR[i[0]] && fR[i[0]].length > 0 ? fR[i[0]][4] : 0
                i.push(sS[i[0]], fare, that.getColorSC(sS[i[0]]), false)
            })
        }
        rD = resp
        this.setState({rD})

        /* Initiate seatchart drawing */
        this.initSC(rD)
    }

    /* Get colors of seats based on availability */
    getColorSC = (val) => {
        switch (val) {
            case 0:
                return '#DDD'
            case 1:
                return '#1DB24B'
            case 2:
                return '#0295D2'
            case 3:
                return '#EC1287'
            default:
                return '#DDD'
        }
    }

    styleSC = (resp) => {
        let lowerDeckStyle = {},
            lowerDeckWidth = '',
            lowerDeckHeight = '',
            upperDeckStyle = {},
            upperDeckWidth = '',
            upperDeckHeight = '',
            lDH,
            lDW,
            xW = 75 // Extra width for seater
        resp.ChartLayout.Layout.Lower.forEach(function(i) {
            if (i[5] === 2) {
                xW = 100 // Extra width for sleeper
            }
        })
        // Lower deck height
        lDH = resp.ChartLayout.Info.Lower.MaxRows * cSH + xW
        // Lower deck width
        lDW = resp.ChartLayout.Info.Lower.MaxCols > 1 ? resp.ChartLayout.Info.Lower.MaxCols * cSW : 45
        // Upper deck width & height
        if (resp.ChartLayout.Layout.Upper && resp.ChartLayout.Layout.Upper.length > 0) {
            let uDH, uDW
            resp.ChartLayout.Layout.Upper.forEach(function(i) {
                if (i[4] === 2) {
                    xW = 100
                }
            })
            uDH = resp.ChartLayout.Info.Upper.MaxRows * cSH + xW
            uDW = resp.ChartLayout.Info.Upper.MaxCols > 1 ? resp.ChartLayout.Info.Upper.MaxCols * cSW : 45

            if (uDW > lDW) {
                lDW = uDW
            } else {
                uDW = lDW
            }
            upperDeckStyle = { width: uDW + 'px', height: uDH + 'px', background: '#FFF' }
            
            upperDeckWidth = uDW
            upperDeckHeight = uDH
        }
        lowerDeckStyle = { width: lDW + 'px', height: lDH + 'px', background: '#FFF' }
        lowerDeckWidth = lDW
        lowerDeckHeight = lDH
        this.setState({ lowerDeckStyle, lowerDeckWidth, lowerDeckHeight, upperDeckStyle, upperDeckWidth, upperDeckHeight })
    }

    initSC = (resp) => {
        const canvasL = this.refs.cL
        const canvL = canvasL.getContext('2d')
        canvasL.width = this.state.lowerDeckWidth * window.devicePixelRatio
        canvasL.height = (this.state.lowerDeckHeight - 55) * window.devicePixelRatio
        canvasL.style.width = this.state.lowerDeckWidth + 'px'
        canvasL.style.height = (this.state.lowerDeckHeight - 55) + 'px'
        canvL.scale(window.devicePixelRatio, window.devicePixelRatio)
        canvL.clearRect(0, 0, canvasL.width, canvasL.height)
        canvL.lineWidth = 1

        this.drawSC(resp.ChartLayout.Layout.Lower, canvL)

        if (resp.ChartLayout.Layout.Upper && resp.ChartLayout.Layout.Upper.length > 0) {
            const canvasU = this.refs.cU,
                canvU = canvasU.getContext('2d')
            canvasU.width = this.state.upperDeckWidth * window.devicePixelRatio
            canvasU.height = (this.state.upperDeckHeight - 55) * window.devicePixelRatio
            canvasU.style.width = this.state.upperDeckWidth + 'px'
            canvasU.style.height = (this.state.upperDeckHeight - 55) + 'px'
            canvU.scale(window.devicePixelRatio, window.devicePixelRatio)
            canvU.clearRect(0, 0, canvasU.width, canvasU.height)
            canvU.lineWidth = 1

            this.drawSC(resp.ChartLayout.Layout.Upper, canvU)
        }
    }

    drawSC = (resp, canv) => {
        const that = this
        resp.forEach(function(i) {
            const alpha = that.state.fareFilter !== 0 && that.state.fareFilter !== i[7] ? 0.15 : 1
            if (i[6] < 1) {
                that.drawSoldSC(i, canv, alpha)
            } else {
                that.drawNoSoldSC(i, canv, alpha)
            }
        })
    }

    drawSoldSC = (resp, canv, alpha) => {
        canv.fillStyle = canv.strokeStyle = resp[8]
        canv.globalAlpha = alpha
        canv.font = '9px Sans-Serif'
        canv.textAlign = 'center'

        canv.fillRect(resp[2] * cX + 2, resp[1] * cY + 2, resp[3] * cW, resp[4] * cH)
        canv.strokeRect(resp[2] * cX + 2.5, resp[1] * cY + 2.5, resp[3] * cW, resp[4] * cH)
        canv.fillStyle = '#FFF'
        if (resp[3] === 2) {
            canv.fillText('Sold', resp[2] * cX + 32, resp[1] * cY + 17)
        } else if (resp[4] === 2) {
            canv.fillText('Sold', resp[2] * cX + 16, resp[1] * cY + 26)
        } else {
            canv.fillText('Sold', resp[2] * cX + 16, resp[1] * cY + 17)
        }
    }

    drawNoSoldSC = (resp, canv, alpha) => {
        canv.fillStyle = canv.strokeStyle = resp[8]
        canv.globalAlpha = alpha
        canv.font = '9px Sans-Serif'
        canv.textAlign = 'center'
        const fill = resp[9] === false ? 'strokeRect' : 'fillRect'
        const stroke = resp[9] !== false ? 'strokeRect' : 'fillRect'

        canv.clearRect(resp[2] * cX + 2.5, resp[1] * cY + 2.5, resp[3] * cW, resp[4] * cH)
        canv[fill](resp[2] * cX + 2.5, resp[1] * cY + 2.5, resp[3] * cW, resp[4] * cH)
        if (resp[3] === 2) {
            canv[stroke](resp[2] * cX + 57, resp[1] * cY + 8, 5, 20)
        } else if (resp[4] === 2) {
            canv[stroke](resp[2] * cX + 6, resp[1] * cY + 57, 22, 5)
        } else {
            canv[stroke](resp[2] * cX + 6, resp[1] * cY + 27, 22, 5)
        }
        canv.fillStyle = resp[9] === false ? '#202020' : '#FFF'
        if (resp[3] == 2) {
            canv.fillText('₹' + resp[7], resp[2] * cX + 32, resp[1] * cY + 17)
        } else if (resp[4] == 2) {
            canv.fillText('₹' + resp[7], resp[2] * cX + 17, resp[1] * cY + 27)
        } else {
            canv.fillText('₹' + resp[7], resp[2] * cX + 17, resp[1] * cY + 17)
        }
    }

    clickSCFn = (e, deck) => {
        const propSt = this.props.seatchart.selSeats ? this.props.seatchart.selSeats.passengerDetails.length : 0,
            that = this,
            canvas = deck === 'Upper' ? this.refs.cU : this.refs.cL,
            canX = canvas.getBoundingClientRect().left,
            canY = canvas.getBoundingClientRect().top,
            x = e.clientX - canX,
            y = e.clientY - canY,
            canv = canvas.getContext('2d')
        this.state.rD.ChartLayout.Layout[deck].forEach(function(i) {
            if (x >= (i[2] * cX + 2.5) && x <= (i[2] * cX + 2.5) + (i[3] * cW) && y >= (i[1] * cY + 2.5) && y <= (i[1] * cY + 2.5) + i[4] * cH) {
                if (that.state.fareFilter === 0 || that.state.fareFilter === i[7]) {
                    if (propSt < 6 && i[6] > 0) {
                        that.onSelectFn(i)
                        i[9] = !i[9]
                        that.drawNoSoldSC(i, canv)
                        return
                    } else if(i[9]) {
                        that.onSelectFn(i)
                        i[9] = !i[9]
                        that.drawNoSoldSC(i, canv)
                        return
                    } else if(propSt === 6) {
                        that.setState({ exceedError: true })
                        // exceedSeatErr()
                        return
                    } else if (i[6] < 1) {
                        that.setState({ isBookedSeatError: true })
                        // seatChartError('click disabled seats')
                        return
                    }
                }
            }
        })
    }
    
    render() {
        return (
            <div>
                { this.state.showLoader && <Loader /> }
                <HomeHead />
                {
                    !this.state.showLoader && 
                    <Header
                        company = { this.state.seatchart.Bus.CompanyName }
                        date = { moment(this.state.seatchart.Bus.DeptTime).format("ddd, DD MMM") }
                    />
                }
                { !this.state.showLoader && this.showFareFilter() }
                { !this.state.showLoader && this.showCanvas() }
            </div>
        )
    }
    
}

const mapStateToProps = function(store) {
    return (store)
}

export default connect(mapStateToProps)(seatchart)