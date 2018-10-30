import { white, primary, light3 } from '../../../config/common'
import { navBar } from '../../../config/mobile/home'
import Slider from '../slider/slider'
import Close from '../../utilities/others/close'
import UserIcon from '../../utilities/img/usericon'

export default (props) => (
    <Slider
        direction = "left"
        active = { props.active }
        background = { light3 }
        width = "calc(100% - 70px)"
    >
        <style jsx>{`
            .flc {
                background: ${ primary };
                color: ${ white };
                height: 50px;
                padding-left: 15px;
            }
            .link-wrapper {
                border-bottom: 2px solid ${ light3 };
            }
            .link-wrapper a {
                display: block;
                width: 100%;
                padding: 15px;
                font-size: 0.95rem;
                background: ${ white };
            }
        `}</style>
        <div className = "flc">
            <Close onClick = { props.onClose } style = {{ marginRight: '15px' }} />
            <UserIcon style = {{ marginRight: '10px' }} />
            {
                props.isLoggedIn ?
                <a href = "/accounts" target = "_self">My account</a>
                :
                <a href = "/login" target = "_self">Login / Join </a>
            }
        </div>
        {
            navBar.map( (el, index) => (
                <div key = { index } className = "link-wrapper">
                    {el.map( (ell, ind) => (
                        <a
                            key = { ind }
                            href = { ell.link }
                            target = "_self"
                        >
                            { ell.label }
                        </a>
                    ))}
                </div>
            ))
        }
        {
            props.isLoggedIn &&
            <div className = "link-wrapper"><a href = "/logout" target = "_self">Logout</a></div>
        }
    </Slider>
)