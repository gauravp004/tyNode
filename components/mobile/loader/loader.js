import { primary, opacity4 } from '../../../config/common'

export default () => (
    <div className = 'loading'>
        <style jsx>{`
            @keyframes loading {
                0% {
                    opacity: .2
                }
                20% {
                    opacity: 1
                }
                100% {
                    opacity: .2
                }
            }
            
            .loading {
                position: fixed;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: 0.3s ease-in-out;
                background: ${ opacity4 };
            }
            
            .loading span {
                width: 25px;
                height: 25px;
                background: ${ primary };
                border-radius: 50%;
                animation: loading 1s infinite both;
            }
            
            .loading span:nth-child(2) {
                margin: 0 5px;
                animation-delay: .3s;
            }
            
            .loading span:nth-child(3) {
                animation-delay: .6s;
            }
        `}</style>
        <span></span>
        <span></span>
        <span></span>
    </div>
)