import { primary, white, opacity1 } from '../../../config/common'

export default (props) => (
    <div
        style = {{
            display: 'flex',
            padding: '0 15px',
            background: primary,
            color: white,
            fontSize: '0.7rem',
            width: '100%',
            whiteSpace: 'nowrap',
            overflowX: 'auto',
            boxShadow: `0 1px 15px 0 ${ opacity1(0.2) }`
        }}
    >
        <div
            onClick = { () => props.fareFilter(0) }
            style = {{
                padding: '10px',
                borderBottom: '3px solid',
                borderBottomColor: props.fare === 0 ? white : primary
            }}
        >All</div>
        <div
            className = "flc scroll-hide"
            style = {{
                width: 'calc(100% - 120px)',
                overflowX: 'auto',
                whiteSpace: 'nowrap'
            }}>
            {
                props.uniq.map ( (el, index) => 
                    <div
                        key = { index }
                        onClick = { () => props.fareFilter(el) }
                        style = {{
                            padding: '10px',
                            borderBottom: '3px solid',
                            borderBottomColor: props.fare === el ? white : primary
                        }}
                    >&#8377;{ el }</div>
                )
            }
        </div>
        <div
            className = "fare-filter"
            style = {{
                marginLeft: 'auto',
                padding: '10px 0 10px 10px',
                borderBottom: '3px solid transparent'
            }}
        >Policies</div>
    </div>
)