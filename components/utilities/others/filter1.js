import { blue2, opacity1 } from '../../../config/common'

export default (props) => (
    <div
        className = "flcc"
        style = {{
            position: 'fixed',
            bottom: '40px',
            right: '15px',
            background: blue2,
            borderRadius: '50%',
            padding: '20px',
            boxShadow: `0 10px 10px ${ opacity1(0.2) }`
        }}
        onClick = { props.onClick }
    >
        <img src = "/static/img/filter.svg" height = { props.height || "23" } />
    </div>
)