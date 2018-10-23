import { white, text1, opacity1 } from '../../../config/common'

export default (props) => (
    <div className = { props.active ? "foot-wrapper" : "foot-wrapper disabled"}>
        <style jsx>{`
            .foot-wrapper {
                position: ${ props.position || 'fixed' };
                width: ${ props.width || '100%' };
                bottom: 0;
                left: 0;
                font-size: ${ props.fontSize || '0.9rem' };
                background: ${ props.background || white };
                color: ${ props.color || text1 };
                padding: ${ props.padding || '15px' };
                text-align: ${ props.textAlign || 'normal' };
                box-shadow: 0 -1px 5px ${ opacity1(0.2) };
                transform: translate(0, 0);
                transition: 0.5s ease transform;
            }
            .foot-wrapper.disabled {
                transform: translate(0, 100%);
            }
        `}</style>
        { props.children }
    </div>
)