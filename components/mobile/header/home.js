import { text1, white, opacity1 } from '../../../config/common'
import BurgerMenu from '../../utilities/others/burger'
import LogoImg from '../../utilities/sprites/logo'
import OfferImg from '../../utilities/sprites/offer'

export default () => (
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
            <BurgerMenu color = { text1 } onClick = { () => alert('Coming soon') } />
            <LogoImg />
            <a href="/offers" target="_self">
                <OfferImg />
            </a>
        </div>
    </header>
)