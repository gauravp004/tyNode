import * as types from '../actions/action-types';

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
        coach: []
    },
    loader: false
};

const searchReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.GET_CITY_LIST:
            return Object.assign({}, state, {
                cityList: action.data
            });
        case types.GET_SEARCH_PARAMS:
            return Object.assign({}, state, {
                from: action.from,
                to: action.to,
                journeyDate: action.journeyDate
            });
        case types.GET_SEARCH_SUCCESS:
            const staticData = searchParseStaticData(action.search);
            return Object.assign({}, state, {
                data: action.search,
                buses: action.search.Buses,
                staticData
            });
        case types.UPDATE_SEARCH_BUSES:
            return Object.assign({}, state, {
                buses: action.data
            });
        default:
            return state;
    }
}

const searchParseStaticData = (data) => {
    const buses = data.Buses;
    const amenArr = data.AllAmenities;
    const coach = ['Seater / Semi-Sleeper', 'Sleeper', 'AC', 'Non AC', 'Volvo / Mercedes', 'Non Volvo'];
    let minFare, maxFare, minDepHr, maxDepHr, pickups = [], dropoffs = [], operators = [], amenities = [];
    buses.forEach((el, index) => {
      if (index === 0) {
          minFare = el.BusStatus.DiscFares[0];
          maxFare = el.BusStatus.DiscFares[0];
          minDepHr = new Date(el.DeptTime).getHours();
          maxDepHr = new Date(el.DeptTime).getHours();
      }
      if (index > 0) {
          minFare = el.BusStatus.DiscFares[0] < minFare ? el.BusStatus.DiscFares[0] : minFare;
          maxFare = el.BusStatus.DiscFares[0] > maxFare ? el.BusStatus.DiscFares[0] : maxFare;
          minDepHr = new Date(el.DeptTime).getHours() < minDepHr ? new Date(el.DeptTime).getHours() : minDepHr;
          maxDepHr = new Date(el.DeptTime).getHours() > maxDepHr ? new Date(el.DeptTime).getHours() : maxDepHr;
      }
      el.Pickups.forEach(pick => pickups.indexOf(pick.PickupName) === -1 ? pickups.push(pick.PickupName) : '');
      el.Dropoffs.forEach(drop => dropoffs.indexOf(drop.DropoffName) === -1 ? dropoffs.push(drop.DropoffName) : '');
      el.Amenities.forEach(amen => amenities.indexOf(amenArr[amen]) === -1 ? amenities.push(amenArr[amen]) : '');
      if (operators.indexOf(el.CompanyName) === -1) {operators.push(el.CompanyName);}
    });
  
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
    };
}

export default searchReducer;