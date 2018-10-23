import { white, opacity1, primary, blue1 } from '../../../config/common'
import Back from '../../utilities/back'
import Slider from '../slider/slider2'

export default (props) => (
    <header className = "flcolc">
        <style jsx>{`
            header {
                position: relative;
                width: 100%;
                padding: 10px 0;
                background: ${ primary };
                color: ${ white };
                // box-shadow: 0 1px 15px 0 ${ opacity1(0.2) };
                z-index: 999;
            }
            header>div {
                width: calc(100% - 30px);
                margin: auto;
                background: ${ blue1 };
                padding: 15px;
                border-radius: 3px;
                box-shadow: 0 0 1px 0 ${ opacity1(0.2) };
            }
            .txt-wrapper {
                width: calc(100% - 50px);
                font-size: 0.9rem;
                font-weight: 400;
                text-align: center;
            }
            header .flcolc span {
                width: 4px;
                height: 4px;
                background: ${ white };
                border-radius: 50%;
            }
        `}</style>
        <div className = "flsbc">
            <Back
                color = { white }
                onClick = { () => window.history.back() }
            />
            <div className = "txt-wrapper elp">
                { props.company } on { props.date }
            </div>
            <div className = "flcolc">
                <span></span>
                <span style = {{ margin: '3px 0' }}></span>
                <span></span>
            </div>
        </div>
        {/* <Slider active = { props.showSearch } height = "220px">
            <div>Hello</div>
        </Slider> */}
    </header>
)