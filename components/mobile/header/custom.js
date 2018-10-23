import { primary, white } from '../../../config/common'

const custom = (props) => (
    <div className = { 'custom-head ' + props.classes }>
        <style jsx>{`
            .custom-head {
                position: relative;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: ${ primary };
                padding: 0 15px;
                min-height: 55px;
                color: ${ white };
            }
        `}</style>
        { props.children }
    </div>
)

export default custom