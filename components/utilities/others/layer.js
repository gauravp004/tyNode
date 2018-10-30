import { opacity1 } from '../../../config/common'

export default (props) => (
    <div
        style = {{
            position: 'fixed',
            left: 0,
            top: 0,
            height: props.active ? '100%' : 0,
            width: props.active ? '100%' : 0,
            opacity: props.active ? 1 : 0,
            background: props.background || opacity1(0.5),
            zIndex: props.active ? (props.zIndex || 999) : -1,
            transition: '0.6s ease opacity',
            overflow: 'hidden'
        }}
        onClick = { props.onClick }
    ></div>
)