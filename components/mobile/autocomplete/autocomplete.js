import React from 'react'

import Custom from '../header/custom'
import Radio from '../../utilities/inputs/radio'
import { white, other1 } from '../../../config/common'

const popularList = ['Pune', 'Delhi', 'Nagpur', 'Mumbai', 'Ludhiana',  'Ahmedabad', 'Chandigarh', 'Jalandhar', 'Indore', 'Bengaluru', 'Hyderabad', 'Aurangabad, Maharashtra', 'Jaipur', 'Latur', 'Chennai', 'Nanded', 'Amravati', 'Kolhapur', 'Surat', 'Bangalore', 'Nashik', 'New Delhi', 'Vadodara', 'Kanpur', 'Amritsar', 'Lucknow', 'Raipur, Chhattisgarh', 'Udaipur, Rajasthan', 'Dhule', 'Jodhpur', 'Goa'];

export default class autoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText : '',
            list : popularList
        }
    }

    checkInput = (e) => {
        const searchList = e.target.value ? this.props.list : popularList
        const searchText = e.target.value ? e.target.value : ''
        let list = []

        searchList.forEach(el => {
            if (el.toLowerCase().indexOf(searchText.toLowerCase()) === 0) {
                list.push(el)
            }
        });
        this.setState({ searchText, list })
    }

    showList = () => {
        const loop = this.state.list;
        return loop.map((el, index) => {
            return <Radio
                key = { index }
                active = { el === this.props.selValue }
                text = { el }
                onClick = { () => this.props.onSelect(el) }
            />
        })
    }

    render() {
        return (
            <div>
                <style jsx>{`
                    .srch-txt-wrapper {
                        position: relative;
                        width: calc(100% - 30px);
                        height: 40px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    .srch-txt-wrapper label {
                        font-size: 0.7rem;
                    }
                    .srch-txt-wrapper input {
                        background: transparent;
                        border: 0;
                        border-bottom: 1px solid ${ white };
                        outline: 0;
                        padding: 2px 0;
                        color: ${ white };
                        width: 100%;
                    }
                    .srch-txt-wrapper input::placeholder {
                        color: ${ other1 }
                    }
                    .list-wrapper {
                        padding: 10px 0 10px 30px;
                        height: calc(100vh - 55px);
                        overflow: auto;
                    }
                `}</style>
                <Custom>
                    <span onClick = { this.props.onClose }>&#x2715;</span>
                    <div className = "srch-txt-wrapper">
                        <label>{ this.props.label }</label>
                        <input
                            type = "text"
                            placeholder = { this.props.placeholder }
                            onChange = { this.checkInput }
                            value = { this.state.searchText }
                            autoFocus
                        />
                    </div>
                </Custom>
                <div className = "list-wrapper">
                    { this.showList() }
                </div>
            </div>
        )
    }
}