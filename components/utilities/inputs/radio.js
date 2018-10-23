import { primary, white, text1 } from '../../../config/common'

const radio = (props) => (
    <label className = "radio-wrapper" onClick = { props.onClick }>
        <style jsx>{`
            .radio-wrapper {
                position: relative;
                display: flex;
                align-items: center;
                padding: 10px 15px;
                color: ${ text1 }
            }
            .radio {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 20px;
                height: 20px;
                border: 2px solid ${ primary };
                border-radius: 50%;
                background: ${ white };
                margin-right: 10px;
            }
            .radio-dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: ${ primary };
            }
        `}</style>
        <span className = "radio">
            {
                props.active &&
                <i className = "radio-dot"></i>
            }
        </span>
        { props.text }
    </label>
)

export default radio