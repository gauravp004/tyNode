import { primary, white, text1 } from '../../../config/common'

const checkbox = (props) => (
    <label className = "checkbox-wrapper flc" onClick = { props.onClick } style = {{ ...props.style }}>
        <style jsx>{`
            .checkbox-wrapper {
                position: relative;
                padding: ${ props.padding || '10px 15px' };
                color: ${ text1 };
            }
            .checkbox {
                width: 20px;
                height: 20px;
                margin-right: ${ props.right || 0 };
                border: 1px solid ${ props.checkColor || primary };
                border-radius: 3px;
                background: ${ props.active ? primary : white };
                transition: 0.3s ease;
            }
            .checkbox-tick {
                width: 7px;
                height: 13px;
                border: 2px solid ${ white };
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
                margin-top: -4px;
            }
        `}</style>
        <span className = "checkbox flsac">
            <i className = "checkbox-tick"></i>
        </span>
        { props.text }
    </label>
)

export default checkbox