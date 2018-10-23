import { primary, white } from '../../../config/common'

const custom = (props) => (
    <div className = "flsbc custom-head" style = {{ ...props.style }}>
        <style jsx>{`
            .custom-head {
                position: ${ props.position || 'relative' };
                background: ${ props.background || primary };
                padding: ${ props.padding || '0 15px' };
                min-height: ${ props.minHeight || '50px' };
                color: ${ props.color || white };
            }
        `}</style>
        { props.children }
    </div>
)

export default custom