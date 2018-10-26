import { text1, white, opacity1 } from '../../../config/common'
import BurgerMenu from '../../utilities/others/burger'
import LogoImg from '../../utilities/img/logo'
import OfferImg from '../../utilities/img/offer'
import NavDrawer from './navigation_drawer'
import Layer from '../../utilities/others/layer'

export default class search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navActive: false
        }
    }

    setNav = () => {
        if (!this.state.navActive) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        this.setState({ navActive: !this.state.navActive })
    }
    
    render = () => (
        <header style = {{ paddingTop: '50px' }}>
            <div
                className = "flsbc"
                style = {{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '100%',
                    padding: '12px 15px',
                    background: white,
                    boxShadow: `0 -1px 15px 0 ${ opacity1(0.2) }`,
                    zIndex: 999
                }}
            >
                <BurgerMenu color = { text1 } onClick = { this.setNav } />
                <LogoImg />
                <a href="/offers" target="_self">
                    <OfferImg />
                </a>
            </div>
            <NavDrawer
                active = { this.state.navActive }
                onClose = { this.setNav }
                isLoggedIn = { false }
            />
            <Layer
                active = { this.state.navActive }
                onClick = { this.setNav }
            />
        </header>
    )
}