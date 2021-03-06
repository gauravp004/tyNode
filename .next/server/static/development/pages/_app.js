module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_with_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/with-redux-store */ "./redux/with-redux-store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          reduxStore = _this$props.reduxStore;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_0__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
        store: reduxStore
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, pageProps)));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_redux_with_redux_store__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp));

/***/ }),

/***/ "./redux/actions/action-types.js":
/*!***************************************!*\
  !*** ./redux/actions/action-types.js ***!
  \***************************************/
/*! exports provided: GET_CITY_LIST, GET_SEARCH_PARAMS, GET_SEARCH_SUCCESS, UPDATE_SEARCH_BUSES, UPDATE_FILTER_DEP, UPDATE_FILTER_ARR, UPDATE_FILTER_PRICE, UPDATE_FILTER_OPS, UPDATE_FILTER_PICK, UPDATE_FILTER_DROP, UPDATE_FILTER_AMEN, UPDATE_FILTER_COACH, UPDATE_FILTER_DEALS, UPDATE_FILTER_MTKT, UPDATE_FILTER_RESET, GET_SEATCHART_SUCCESS, UPDATE_SEAT_SELECTED, RESET_SEATCHART, GET_CHECKOUT_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CITY_LIST", function() { return GET_CITY_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SEARCH_PARAMS", function() { return GET_SEARCH_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SEARCH_SUCCESS", function() { return GET_SEARCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SEARCH_BUSES", function() { return UPDATE_SEARCH_BUSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER_DEP", function() { return UPDATE_FILTER_DEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER_ARR", function() { return UPDATE_FILTER_ARR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER_PRICE", function() { return UPDATE_FILTER_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER_OPS", function() { return UPDATE_FILTER_OPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER_PICK", function() { return UPDATE_FILTER_PICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER_DROP", function() { return UPDATE_FILTER_DROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER_AMEN", function() { return UPDATE_FILTER_AMEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER_COACH", function() { return UPDATE_FILTER_COACH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER_DEALS", function() { return UPDATE_FILTER_DEALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER_MTKT", function() { return UPDATE_FILTER_MTKT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER_RESET", function() { return UPDATE_FILTER_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SEATCHART_SUCCESS", function() { return GET_SEATCHART_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SEAT_SELECTED", function() { return UPDATE_SEAT_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_SEATCHART", function() { return RESET_SEATCHART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHECKOUT_SUCCESS", function() { return GET_CHECKOUT_SUCCESS; });
// Search
var GET_CITY_LIST = 'GET_CITY_LIST';
var GET_SEARCH_PARAMS = 'GET_SEARCH_PARAMS';
var GET_SEARCH_SUCCESS = 'GET_SEARCH_SUCCESS';
var UPDATE_SEARCH_BUSES = 'UPDATE_SEARCH_BUSES';
var UPDATE_FILTER_DEP = 'UPDATE_FILTER_DEP';
var UPDATE_FILTER_ARR = 'UPDATE_FILTER_ARR';
var UPDATE_FILTER_PRICE = 'UPDATE_FILTER_PRICE';
var UPDATE_FILTER_OPS = 'UPDATE_FILTER_OPS';
var UPDATE_FILTER_PICK = 'UPDATE_FILTER_PICK';
var UPDATE_FILTER_DROP = 'UPDATE_FILTER_DROP';
var UPDATE_FILTER_AMEN = 'UPDATE_FILTER_AMEN';
var UPDATE_FILTER_COACH = 'UPDATE_FILTER_COACH';
var UPDATE_FILTER_DEALS = 'UPDATE_FILTER_DEALS';
var UPDATE_FILTER_MTKT = 'UPDATE_FILTER_MTKT';
var UPDATE_FILTER_RESET = 'UPDATE_FILTER_RESET'; // Seatchart

var GET_SEATCHART_SUCCESS = 'GET_SEATCHART_SUCCESS';
var UPDATE_SEAT_SELECTED = 'UPDATE_SEAT_SELECTED';
var RESET_SEATCHART = 'RESET_SEATCHART'; // Checkout

var GET_CHECKOUT_SUCCESS = 'GET_CHECKOUT_SUCCESS';

/***/ }),

/***/ "./redux/reducers/checkout-reducer.js":
/*!********************************************!*\
  !*** ./redux/reducers/checkout-reducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/action-types */ "./redux/actions/action-types.js");

var initialState = {
  data: [],
  // search API results ---- as is from API
  buses: [],
  // Bus data ---- to be used for sorting & filtering ---- can be reset based on data mentioned above
  loader: false
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_CHECKOUT_SUCCESS"]:
      return Object.assign({}, state, {
        data: action.search,
        buses: action.search.Buses
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-reducer */ "./redux/reducers/search-reducer.js");
/* harmony import */ var _seatchart_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seatchart-reducer */ "./redux/reducers/seatchart-reducer.js");
/* harmony import */ var _checkout_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout-reducer */ "./redux/reducers/checkout-reducer.js");
 // Reducers



 // Combine Reducers

var reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  search: _search_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  seatchart: _seatchart_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  checkout: _checkout_reducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ }),

/***/ "./redux/reducers/search-reducer.js":
/*!******************************************!*\
  !*** ./redux/reducers/search-reducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/action-types */ "./redux/actions/action-types.js");

var initialState = {
  from: '',
  to: '',
  journeyDate: '',
  cityList: [],
  data: [],
  // search API results ---- as is from API
  buses: [],
  // Bus data ---- to be used for sorting & filtering ---- can be reset based on data mentioned above
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
  price: {
    min: 0,
    max: 0
  },
  departure: {
    hh: 0,
    mm: 0
  },
  arrival: {
    hh: 0,
    mm: 0
  },
  operator: [],
  amenities: [],
  pickups: [],
  dropoffs: [],
  Deals: false,
  Mticket: false,
  coach: [],
  loader: false
};

var searchReducer = function searchReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var currState = state,
      buses;

  switch (action.type) {
    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_CITY_LIST"]:
      return Object.assign({}, state, {
        cityList: action.data
      });

    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SEARCH_PARAMS"]:
      return Object.assign({}, state, {
        from: action.from,
        to: action.to,
        journeyDate: action.journeyDate
      });

    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SEARCH_SUCCESS"]:
      var staticData = searchParseStaticData(action.search);
      return Object.assign({}, state, {
        data: action.search,
        buses: action.search.Buses,
        price: {
          min: staticData.minPrice,
          max: staticData.maxPrice
        },
        staticData: staticData
      });

    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SEARCH_BUSES"]:
      return Object.assign({}, state, {
        buses: action.data
      });
    // Deals Filter

    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FILTER_DEALS"]:
      currState.Deals = !currState.Deals;
      buses = parseFilter(currState);
      return Object.assign({}, state, {
        Deals: currState.Deals,
        buses: buses,
        loader: true
      });
    // Mtkt Filter

    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FILTER_MTKT"]:
      currState.Mticket = !currState.Mticket;
      buses = parseFilter(currState);
      return Object.assign({}, state, {
        Mticket: currState.Mticket,
        buses: buses,
        loader: true
      });
    // Departure Filter

    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FILTER_DEP"]:
      currState.departure = action.data;
      buses = parseFilter(currState);
      return Object.assign({}, state, {
        departure: action.data,
        buses: buses,
        loader: true
      });
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

    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FILTER_COACH"]:
      currState.coach = action.data;
      buses = parseFilter(currState);
      return Object.assign({}, state, {
        coach: action.data,
        buses: buses,
        loader: true
      });
    // Price filter

    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FILTER_PRICE"]:
      currState.price = action.data;
      buses = parseFilter(currState);
      return Object.assign({}, state, {
        price: action.data,
        buses: buses,
        loader: true
      });
    // Operator filter

    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FILTER_OPS"]:
      currState.operator = action.data;
      buses = parseFilter(currState);
      return Object.assign({}, state, {
        operator: action.data,
        buses: buses,
        loader: true
      });
    // Amen filter

    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FILTER_AMEN"]:
      currState.amenities = action.data;
      buses = parseFilter(currState);
      return Object.assign({}, state, {
        amenities: action.data,
        buses: buses,
        loader: true
      });
    // Pickup filter

    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FILTER_PICK"]:
      currState.pickups = action.data;
      buses = parseFilter(currState);
      return Object.assign({}, state, {
        pickups: action.data,
        buses: buses,
        loader: true
      });
    // Drop filter

    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FILTER_DROP"]:
      currState.dropoffs = action.data;
      buses = parseFilter(currState);
      return Object.assign({}, state, {
        dropoffs: action.data,
        buses: buses,
        loader: true
      });
    // Reset filter

    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FILTER_RESET"]:
      return Object.assign({}, state, {
        price: {
          min: state.staticData.minPrice,
          max: state.staticData.maxPrice
        },
        departure: {
          hh: 0,
          mm: 0
        },
        // arrival: { hh: 0, mm: 0 },
        operator: [],
        amenities: [],
        pickups: [],
        dropoffs: [],
        deals: false,
        mTkt: false,
        coach: [],
        loader: true
      });

    default:
      return state;
  }
};

var searchParseStaticData = function searchParseStaticData(data) {
  var buses = data.Buses;
  var amenArr = data.AllAmenities;
  var coach = ['Seater / Semi-Sleeper', 'Sleeper', 'AC', 'Non AC', 'Volvo / Mercedes', 'Non Volvo'];
  var minFare,
      maxFare,
      minDepHr,
      maxDepHr,
      pickups = [],
      dropoffs = [],
      operators = [],
      amenities = [];
  buses.forEach(function (el, index) {
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

    el.Pickups.forEach(function (pick) {
      return pickups.indexOf(pick.PickupName) === -1 ? pickups.push(pick.PickupName) : '';
    });
    el.Dropoffs.forEach(function (drop) {
      return dropoffs.indexOf(drop.DropoffName) === -1 ? dropoffs.push(drop.DropoffName) : '';
    });
    el.Amenities.forEach(function (amen) {
      return amenities.indexOf(amenArr[amen]) === -1 ? amenities.push(amenArr[amen]) : '';
    });

    if (operators.indexOf(el.CompanyName) === -1) {
      operators.push(el.CompanyName);
    }
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
};

var parseFilter = function parseFilter(st) {
  var loop = st.data.Buses;
  var buses = [];

  for (var i = 0; i < loop.length; i++) {
    var val = dealFilter(loop[i], st.Deals) && mTktFilter(loop[i], st.Mticket) && depFilter(loop[i], st.departure) && // arrFilter(loop[i], st.arrival) &&
    coachType(loop[i], st.coach, st.staticData.coach) && priceFilter(loop[i], st.price, st.staticData.minPrice, st.staticData.maxPrice) && opsFilter(loop[i], st.operator) && amenFilter(loop[i], st.amenities, st.data.AllAmenities) && pickFilter(loop[i], st.pickups) && dropFilter(loop[i], st.dropoffs);

    if (val) {
      buses.push(loop[i]);
    }
  }

  if (st.deals) {
    buses = buses.sort(function (a, b) {
      return a.DiscountPct < b.DiscountPct ? 1 : b.DiscountPct < a.DiscountPct ? -1 : 0;
    });
  }

  return buses;
};

var dealFilter = function dealFilter(el, val) {
  if (val) {
    if (parseInt(el.BusStatus.BaseFares[1], 10) - parseInt(el.BusStatus.DiscFares[0], 10)) {
      return true;
    } else {
      return false;
    }
  }

  return true;
};

var mTktFilter = function mTktFilter(el, val) {
  if (val) {
    return el.MTicket;
  }

  return true;
};

var depFilter = function depFilter(el, val) {
  if (val.hh > 0 || val.mm > 0) {
    var temp = new Date(el.DeptTime);

    if (temp.getHours() > val.hh || temp.getHours() === val.hh && temp.getMinutes() >= val.mm) {
      return true;
    } else {
      return false;
    }
  }

  return true;
}; // const arrFilter = (el, val) => {
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


var coachType = function coachType(el, val, loop) {
  if (val.length > 0) {
    var chkSeater = val.indexOf(loop[0]) >= 0 && val.indexOf(loop[1]) >= 0 || val.indexOf(loop[0]) === -1 && val.indexOf(loop[1]) === -1 ? true : checkSeater(el, val, loop);
    var chkAC = val.indexOf(loop[2]) >= 0 && val.indexOf(loop[3]) >= 0 || val.indexOf(loop[2]) === -1 && val.indexOf(loop[3]) === -1 ? true : checkAC(el, val, loop);
    var chkVolvo = val.indexOf(loop[4]) >= 0 && val.indexOf(loop[5]) >= 0 || val.indexOf(loop[4]) === -1 && val.indexOf(loop[5]) === -1 ? true : checkVolvo(el, val, loop);

    if (chkSeater && chkAC && chkVolvo) {
      return true;
    } else {
      return false;
    }
  }

  return true;
};

var checkSeater = function checkSeater(el, val, loop) {
  var seater = el.BusType.Seating.toLowerCase() === 'seater' || el.BusType.Seating.toLowerCase() === 'semi_sleeper' || el.BusType.Seating.toLowerCase() === 'seater_semi_sleeper';

  if (val.indexOf(loop[0]) >= 0) {
    return seater;
  } else {
    return !seater;
  }
};

var checkAC = function checkAC(el, val, loop) {
  var ac = el.BusType.IsAC.toLowerCase() === 'ac';

  if (val.indexOf(loop[2]) >= 0) {
    return ac;
  } else {
    return !ac;
  }
};

var checkVolvo = function checkVolvo(el, val, loop) {
  var volvo = el.BusType.Make.toLowerCase() === 'volvo' || el.BusType.Make.toLowerCase() === 'mercedes';

  if (val.indexOf(loop[4]) >= 0) {
    return volvo;
  } else {
    return !volvo;
  }
};

var priceFilter = function priceFilter(el, val, min, max) {
  if (val.min > min || val.max < max) {
    var temp = el.BusStatus.DiscFares[0];

    if (temp >= val.min && temp <= val.max) {
      return true;
    } else {
      return false;
    }
  }

  return true;
};

var opsFilter = function opsFilter(el, val) {
  if (val.length > 0) {
    if (val.indexOf(el.CompanyName) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  return true;
};

var amenFilter = function amenFilter(el, val, amenArr) {
  if (val.length > 0) {
    var isAmen = false;

    if (el.Amenities.length > 0) {
      var amenName = [];
      el.Amenities.forEach(function (ell) {
        amenName.push(amenArr[ell]);
      });
      val.forEach(function (vall, index) {
        isAmen = index === 0 && amenName.indexOf(vall) >= 0 ? true : amenName.indexOf(vall) >= 0 ? isAmen && true : false;
      });
    }

    if (isAmen) {
      return true;
    } else {
      return false;
    }
  }

  return true;
};

var pickFilter = function pickFilter(el, val) {
  if (val.length > 0) {
    var isPick = false;
    el.Pickups.forEach(function (ell) {
      if (val.indexOf(ell.PickupName) >= 0) {
        isPick = true;
      }
    });

    if (isPick) {
      return true;
    } else {
      return false;
    }
  }

  return true;
};

var dropFilter = function dropFilter(el, val) {
  if (val.length > 0) {
    var isDrop = false;
    el.Dropoffs.forEach(function (ell) {
      if (val.indexOf(ell.DropoffName) >= 0) {
        isDrop = true;
      }
    });

    if (isDrop) {
      return true;
    } else {
      return false;
    }
  }

  return true;
};

/* harmony default export */ __webpack_exports__["default"] = (searchReducer);

/***/ }),

/***/ "./redux/reducers/seatchart-reducer.js":
/*!*********************************************!*\
  !*** ./redux/reducers/seatchart-reducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/action-types */ "./redux/actions/action-types.js");

var initialState = {
  seatchart: [],
  selSeats: false,
  selPick: false,
  selDrop: false,
  loader: false
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SEATCHART_SUCCESS"]:
      return Object.assign({}, state, {
        seatchart: action.data
      });

    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SEAT_SELECTED"]:
      return Object.assign({}, state, {
        selSeats: action.data
      });

    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_SEATCHART"]:
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./redux/with-redux-store.js":
/*!***********************************!*\
  !*** ./redux/with-redux-store.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var isServer = typeof window === 'undefined';
var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore() {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_store__WEBPACK_IMPORTED_MODULE_2__["initializeStore"])();
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_store__WEBPACK_IMPORTED_MODULE_2__["initializeStore"])();
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(AppWithRedux, _React$Component);

      _createClass(AppWithRedux, null, [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appContext) {
            var reduxStore, appProps;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Get or Create the store with `undefined` as initialState
                    // This allows you to set a custom default initialState
                    reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

                    appContext.ctx.reduxStore = reduxStore;
                    appProps = {};

                    if (!(typeof App.getInitialProps === 'function')) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 6;
                    return App.getInitialProps(appContext);

                  case 6:
                    appProps = _context.sent;

                  case 7:
                    return _context.abrupt("return", _objectSpread({}, appProps, {
                      initialReduxState: reduxStore.getState()
                    }));

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      function AppWithRedux(props) {
        var _this;

        _classCallCheck(this, AppWithRedux);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(AppWithRedux).call(this, props));
        _this.reduxStore = getOrCreateStore();
        return _this;
      }

      _createClass(AppWithRedux, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, _extends({}, this.props, {
            reduxStore: this.reduxStore
          }));
        }
      }]);

      return AppWithRedux;
    }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)
  );
});

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redux/reducers */ "./redux/reducers/index.js");

 // const store = createStore(reducers);
// export default store;

function initializeStore() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_redux_reducers__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map