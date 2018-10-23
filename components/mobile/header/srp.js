import { white, opacity1, primary, blue1 } from '../../../config/common'
import Back from '../../utilities/others/back'
import Slider from '../slider/slider2'
import SearchPanel from '../search/searchpanel'
import Sort from '../search/sort'
import SearchIcon from '../../utilities/img/searchicon'

export default (props) => (
    <header className = "flcolc">
        <style jsx>{`
            header {
                position: relative;
                width: 100%;
                padding: 10px 0 0;
                background: ${ primary };
                color: ${ white };
                box-shadow: 0 1px 15px 0 ${ opacity1(0.2) };
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
            }
            .txt-wrapper span {
                max-width: 25%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            @media only screen and (max-width:370px) {
                .txt-wrapper span {
                    max-width: 20%;
                }
            }
            @media only screen and (max-width:340px) {
                .txt-wrapper {
                    width: calc(100% - 30px);
                }
                img {
                    display: none;
                }
            }
        `}</style>
        <div className = "flsbc">
            <Back
                color = { white }
                onClick = { () => window.history.back() }
            />
            <div className = "flcc txt-wrapper" onClick = { props.onClick }>
                <span>{ props.from }</span>&nbsp;to&nbsp;<span>{ props.to }</span>&nbsp;on { props.journeyDate }
            </div>
            <SearchIcon onClick = { props.onClick } />
        </div>
        <Slider active = { props.showSearch } height = "220px">
            <SearchPanel />
        </Slider>
        <Sort />
    </header>
)