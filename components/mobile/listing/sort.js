import { connect } from 'react-redux'

import { primary, white, opacity1 } from '../../../common/color'

class sort extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render = () => (
        <div className = "sortBar flsbc">
            <style jsx>{`
                .sortBar {
                    width: 100%;
                    background: ${ primary };
                    color: ${ white };
                    padding: 15px;
                    font-size: 0.85rem;
                    letter-spacing: normal;
                }
            `}</style>
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