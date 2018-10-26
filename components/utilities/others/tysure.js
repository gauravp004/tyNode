import { primary, secondary } from '../../../config/common'

export default (props) => (
    <div>
        <span style = {{ color: primary }}>TY</span>
        <span style = {{ color: secondary }}>SURE</span>
        { props.children }
    </div>
)