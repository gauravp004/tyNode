import { white, secondary, opacity1 } from '../../../config/common'

export default (props) => (
    <button
        type = { props.type }
        className = "flcc"
        style = {{
            width: props.width || '100%',
            height: props.height || '50px',
            border: 0,
            background: props.background || secondary,
            padding: 0,
            margin: props.margin || 'auto',
            fontSize: props.fontSize || '1.1rem',
            fontWeight: props.fontWeight || 400,
            color: props.color || white,
            outline: 0,
            borderRadius: props.borderRadius || '3px',
            boxShadow: props.boxShadow || `0 1px 2px 0 ${ opacity1(0.15) }`,
            textTransform: props.textTransform || 'uppercase'
        }}
        onClick = { props.onClick }
    >
        { props.children }
    </button>
)