import { white } from '../../../config/common'

const slider = (props) => (
    <div className = { 'slider ' + props.direction + (props.active ? ' active': '') }>
        <style jsx>{`
            .slider {
                position: fixed;
                top: 0;
                width: ${ props.width || '100%' };
                height: ${ props.height || '100%' };
                opacity: 0;
                z-index: ${ props.zIndex || 1000 };
                transition: 0.6s ease;
                background: ${ props.background || white };
            }
            .slider.left {
                transform: translate(-100%, 0);
            }
            .slider.right {
                transform: translate(100%, 0);
            }
            .slider.bottom {
                transform: translate(0, 100%);
            }
            .slider.top {
                transform: translate(0, -100%);
            }
            .slider.active {
                transform: translate(0, 0);
                opacity: 1;
                transition: 0.6s transform;
            }
        `}</style>
        { props.children }
    </div>
)

export default slider