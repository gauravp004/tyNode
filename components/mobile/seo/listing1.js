import { white, text1, opacity1 } from '../../../config/common'

export default (props) => (
    <div
        className = "flsbc"
        style = {{
            padding: '5px 0',
            flexWrap: 'wrap'
        }}
    >
        {
            props.data.map( (el, index) => (
                <a
                    href = { el.link }
                    key = { index }
                    target = "_self"
                    style = {{
                        background: white,
                        borderRadius: '3px',
                        color: text1,
                        fontSize: '0.85rem',
                        width: 'calc(50% - 5px)',
                        padding: '10px 5px',
                        margin: '5px 0',
                        textAlign: 'center',
                        boxShadow: `0 1px 1px ${ opacity1(0.1) }`
                    }}
                    className = "elp"
                >{ el.label }</a>
            ))
        }
    </div>
)