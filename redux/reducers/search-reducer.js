import * as types from '../actions/action-types'

const initialState = {
    from: '',
    to: '',
    journeyDate: '',
    cityList: [],
    data: [], // search API results ---- as is from API
    buses: [], // Bus data ---- to be used for sorting & filtering ---- can be reset based on data mentioned above
    staticData: {
        minPrice: 0,
        maxPrice: 10000,
        minDepHr: 0,
        maxDepHr: 24,
        operators: [],
        amenities: [],
        pickups: [],
        dropoffs: [],
        coach: ['Seater / Semi-Sleeper', 'Sleeper', 'AC', 'Non AC', 'Volvo / Mercedes', 'Non Volvo']
    },
    price: { min: 0, max: 0 },
    departure: { hh: 0, mm: 0 },
    arrival: { hh: 0, mm: 0 },
    operator: [],
    amenities: [],
    pickups: [],
    dropoffs: [],
    Deals: false,
    Mticket: false,
    coach: [],
    loader: false
}

const searchReducer = function(state = initialState, action) {
    let currState = state,
        buses
    switch(action.type) {
        case types.GET_CITY_LIST:
            return Object.assign({}, state, {
                cityList: action.data
            })
        case types.GET_SEARCH_PARAMS:
            return Object.assign({}, state, {
                from: action.from,
                to: action.to,
                journeyDate: action.journeyDate
            })
        case types.GET_SEARCH_SUCCESS:
            const staticData = searchParseStaticData(action.search)
            return Object.assign({}, state, {
                data: action.search,
                buses: action.search.Buses,
                price: { min: staticData.minPrice, max: staticData.maxPrice },
                staticData
            })
        case types.UPDATE_SEARCH_BUSES:
            return Object.assign({}, state, {
                buses: action.data
            })
        // Deals Filter
        case types.UPDATE_FILTER_DEALS:
            currState.Deals = !currState.Deals
            buses = parseFilter(currState)
            return Object.assign({}, state, {
                Deals: currState.Deals,
                buses,
                loader: true
            });
        // Mtkt Filter
        case types.UPDATE_FILTER_MTKT:
            currState.Mticket = !currState.Mticket
            buses = parseFilter(currState)
            return Object.assign({}, state, {
                Mticket: currState.Mticket,
                buses,
                loader: true
            });
        // Departure Filter
        case types.UPDATE_FILTER_DEP:
            currState.departure = action.data
            buses = parseFilter(currState)
            return Object.assign({}, state, { 
                departure: action.data, 
                buses,
                loader: true
            })
        // Arrival filter
        // case types.UPDATE_FILTER_ARR:
        //     currState.arrival = action.data
        //     buses = parseFilter(currState)
        //     return Object.assign({}, state, {
        //         arrival: action.data,
        //         buses,
        //         loader: true
        //     })
        // Coach filter
        case types.UPDATE_FILTER_COACH:
            currState.coach = action.data
            buses = parseFilter(currState)
            return Object.assign({}, state, {
                coach: action.data,
                buses,
                loader: true
            })
        // Price filter
        case types.UPDATE_FILTER_PRICE:
            currState.price = action.data
            buses = parseFilter(currState)
            return Object.assign({}, state, {
                price: action.data, 
                buses, loader: true
            })
        // Operator filter
        case types.UPDATE_FILTER_OPS:
            currState.operator = action.data
            buses = parseFilter(currState)
            return Object.assign({}, state, {
                operator: action.data,
                buses,
                loader: true
            })
        // Amen filter
        case types.UPDATE_FILTER_AMEN:
            currState.amenities = action.data
            buses = parseFilter(currState)
            return Object.assign({}, state, {
                amenities: action.data,
                buses,
                loader: true
            })
        // Pickup filter
        case types.UPDATE_FILTER_PICK:
            currState.pickups = action.data
            buses = parseFilter(currState)
            return Object.assign({}, state, {
                pickups: action.data,
                buses,
                loader: true
            })
        // Drop filter
        case types.UPDATE_FILTER_DROP:
            currState.dropoffs = action.data
            buses = parseFilter(currState)
            return Object.assign({}, state, {
                dropoffs: action.data,
                buses,
                loader: true
            })
        // Reset filter
        case types.UPDATE_FILTER_RESET:
            return Object.assign({}, state, { 
                price: { min: state.staticData.minPrice, max: state.staticData.maxPrice },
                departure: { hh: 0, mm: 0 },
                // arrival: { hh: 0, mm: 0 },
                operator: [],
                amenities: [],
                pickups: [],
                dropoffs: [],
                deals: false,
                mTkt: false,
                coach: [],
                loader: true
            })
        default:
            return state
    }
}

const searchParseStaticData = (data) => {
    const buses = data.Buses
    const amenArr = data.AllAmenities
    const coach = ['Seater / Semi-Sleeper', 'Sleeper', 'AC', 'Non AC', 'Volvo / Mercedes', 'Non Volvo']
    let minFare, maxFare, minDepHr, maxDepHr, pickups = [], dropoffs = [], operators = [], amenities = []
    buses.forEach((el, index) => {
        if (index === 0) {
            minFare = el.BusStatus.DiscFares[0]
            maxFare = el.BusStatus.DiscFares[0]
            minDepHr = new Date(el.DeptTime).getHours()
            maxDepHr = new Date(el.DeptTime).getHours()
        }
        if (index > 0) {
            minFare = el.BusStatus.DiscFares[0] < minFare ? el.BusStatus.DiscFares[0] : minFare
            maxFare = el.BusStatus.DiscFares[0] > maxFare ? el.BusStatus.DiscFares[0] : maxFare
            minDepHr = new Date(el.DeptTime).getHours() < minDepHr ? new Date(el.DeptTime).getHours() : minDepHr
            maxDepHr = new Date(el.DeptTime).getHours() > maxDepHr ? new Date(el.DeptTime).getHours() : maxDepHr
        }
        el.Pickups.forEach(pick => pickups.indexOf(pick.PickupName) === -1 ? pickups.push(pick.PickupName) : '')
        el.Dropoffs.forEach(drop => dropoffs.indexOf(drop.DropoffName) === -1 ? dropoffs.push(drop.DropoffName) : '')
        el.Amenities.forEach(amen => amenities.indexOf(amenArr[amen]) === -1 ? amenities.push(amenArr[amen]) : '')
        if (operators.indexOf(el.CompanyName) === -1) {operators.push(el.CompanyName)}
    })
  
    return {
        minPrice: minFare,
        maxPrice: maxFare,
        minDepHr: minDepHr,
        maxDepHr: maxDepHr,
        operators: operators,
        amenities: amenities,
        pickups: pickups,
        dropoffs: dropoffs,
        coach: coach
    }
}

const parseFilter = (st) => {
    const loop = st.data.Buses
    let buses = []
    for (let i = 0; i < loop.length; i++) {
        const val = dealFilter(loop[i], st.Deals) && 
        mTktFilter(loop[i], st.Mticket) && 
        depFilter(loop[i], st.departure) &&
        // arrFilter(loop[i], st.arrival) &&
        coachType(loop[i], st.coach, st.staticData.coach) &&
        priceFilter(loop[i], st.price, st.staticData.minPrice, st.staticData.maxPrice) &&
        opsFilter(loop[i], st.operator) &&
        amenFilter(loop[i], st.amenities, st.data.AllAmenities) &&
        pickFilter(loop[i], st.pickups) &&
        dropFilter(loop[i], st.dropoffs)
    
        if (val) {
            buses.push(loop[i])
        }
    }
    if (st.deals) {
        buses = buses.sort((a,b) => {return (a.DiscountPct < b.DiscountPct) ? 1 : ((b.DiscountPct < a.DiscountPct) ? -1 : 0)})
    }
    return buses
}

const dealFilter = (el, val) => {
    if (val) {
        if (parseInt(el.BusStatus.BaseFares[1], 10) - parseInt(el.BusStatus.DiscFares[0], 10)) {
            return true
        } else {
            return false
        }
    }
    return true
}

const mTktFilter = (el, val) => {
    if (val) {
        return el.MTicket
    }
    return true
}
  
const depFilter = (el, val) => {
    if (val.hh > 0 || val.mm > 0) {
        const temp = new Date(el.DeptTime)
        if (temp.getHours() > val.hh || (temp.getHours() === val.hh && temp.getMinutes() >= val.mm)) {
            return true
        } else {
            return false
        }
    }
    return true
}
  
// const arrFilter = (el, val) => {
//     if (val.hh > 0 || val.mm > 0) {
//         const temp = new Date(el.ArrTime)
//         if (temp.getHours() < val.hh || (temp.getHours() === val.hh && temp.getMinutes() <= val.mm)) {
//             return true
//         } else {
//             return false
//         }
//     }
//     return true
// }
  
const coachType = (el, val, loop) => {
    if (val.length > 0) {
        const chkSeater = ((val.indexOf(loop[0]) >= 0 && val.indexOf(loop[1]) >= 0) || (val.indexOf(loop[0]) === -1 && val.indexOf(loop[1]) === -1)) ? true : checkSeater(el, val, loop)
        const chkAC = ((val.indexOf(loop[2]) >= 0 && val.indexOf(loop[3]) >= 0) || (val.indexOf(loop[2]) === -1 && val.indexOf(loop[3]) === -1)) ? true : checkAC(el, val, loop)
        const chkVolvo = ((val.indexOf(loop[4]) >= 0 && val.indexOf(loop[5]) >= 0) || (val.indexOf(loop[4]) === -1 && val.indexOf(loop[5]) === -1)) ? true : checkVolvo(el, val, loop)
    
        if (chkSeater && chkAC && chkVolvo) {
            return true
        } else {
            return false
        }
    }
    return true
}
  
const checkSeater = (el, val, loop) => {
    const seater = el.BusType.Seating.toLowerCase() === 'seater' || el.BusType.Seating.toLowerCase() === 'semi_sleeper' || el.BusType.Seating.toLowerCase() === 'seater_semi_sleeper'
    if (val.indexOf(loop[0]) >= 0) {
        return seater
    } else {
        return !seater
    }
}
  
const checkAC = (el, val, loop) => {
    const ac = el.BusType.IsAC.toLowerCase() === 'ac'
    if (val.indexOf(loop[2]) >= 0) {
        return ac
    } else {
        return !ac
    }
}
  
const checkVolvo = (el, val, loop) => {
    const volvo = el.BusType.Make.toLowerCase() === 'volvo' || el.BusType.Make.toLowerCase() === 'mercedes'
    if (val.indexOf(loop[4]) >= 0) {
        return volvo
    } else {
        return !volvo
    }
}
  
const priceFilter = (el, val, min, max) => {
    if (val.min > min || val.max < max) {
        const temp = el.BusStatus.DiscFares[0]
        if (temp >= val.min && temp <= val.max) {
            return true
        } else {
            return false
        }
    }
    return true
}
  
const opsFilter = (el, val) => {
    if (val.length > 0) {
        if (val.indexOf(el.CompanyName) >= 0) {
            return true
        } else {
            return false
        }
    }
    return true
}
  
const amenFilter = (el, val, amenArr) => {
    if (val.length > 0) {
        let isAmen = false
        if (el.Amenities.length > 0) {
            let amenName = []
            el.Amenities.forEach((ell) => {
                amenName.push(amenArr[ell])
            })
            val.forEach((vall, index) => {
                isAmen = index === 0 && amenName.indexOf(vall) >= 0 ? true : (amenName.indexOf(vall) >= 0 ? isAmen && true : false)
            })
        }
        if (isAmen) {
            return true
        } else {
            return false
        }
    }
    return true
}
  
const pickFilter = (el, val) => {
    if (val.length > 0) {
        let isPick = false
        el.Pickups.forEach((ell) => {
            if (val.indexOf(ell.PickupName) >= 0) {
                isPick = true
            }
        })
        if (isPick) {
            return true
        } else {
            return false
        }
    }
    return true
}
  
const dropFilter = (el, val) => {
    if (val.length > 0) {
        let isDrop = false
        el.Dropoffs.forEach((ell) => {
            if (val.indexOf(ell.DropoffName) >= 0) {
                isDrop = true
            }
        })
        if (isDrop) {
            return true
        } else {
            return false
        }
    }
    return true
}

export default searchReducer