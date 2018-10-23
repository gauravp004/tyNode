import { connect } from 'react-redux'

import { primary, white } from '../../../config/common'

class sort extends React.Component {
    constructor(props) {
        super(props);
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
            <div>Price</div>
            <div>Arrival</div>
            <div>Departure</div>
            <div>Deals</div>
            <div>Duration</div>
        </div>
    )
    
}

const mapStateToProps = function(store) {
    return (store);
};

export default connect(mapStateToProps)(sort)