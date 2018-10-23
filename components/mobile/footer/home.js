import { primary, white, blue1, blue2, opacity1 } from '../../../config/common'
import FbLogo from '../../utilities/sprites/fb'
import TwitterLogo from '../../utilities/sprites/twitter'
import InstaLogo from '../../utilities/sprites/instagram'
import YoutubeLogo from '../../utilities/sprites/youtube'
import GplusLogo from '../../utilities/sprites/gplus'
import LinkedinLogo from '../../utilities/sprites/linkedin'
import AppLogo from '../../utilities/sprites/playstore'
import Logo from '../../utilities/sprites/logosmall'

export default () => (
    <footer
        className = "flcolc"
        style = {{
            textAlign: 'center',
            background: primary,
            color: white,
            boxShadow: `0 1px 15px ${ opacity1(0.2) }`
        }}
    >
        <a
            href = "https://play.google.com/store/apps/details?id=com.travelyaari"
            style = {{
                width: 'calc(100% - 30px)',
                padding: '15px 0',
                margin: '15px auto',
                background: blue1,
                borderRadius: '3px',
                fontSize: '0.9rem'
            }}
        >
            <Logo style = {{ marginRight: '5px' }} />
            Download our app for latest updates
        </a>
        <div className = "flsbc" style = {{ width: '100%', padding: '20px 15px' }}>
            <a href = "https://www.facebook.com/travelyaari" target = "_self">
                <FbLogo />
            </a>
            <a href = "https://twitter.com/travelyaari" target = "_self">
                <TwitterLogo />
            </a>
            <a href = "https://www.instagram.com/Travelyaari_India/" target = "_self">
                <InstaLogo />
            </a>
            <a href = "https://www.linkedin.com/company/travelyaari-com-mantis-technologies-pvt-ltd-" target = "_self">
                <LinkedinLogo />
            </a>
            <a href = "https://plus.google.com/+travelyaari" target = "_self">
                <GplusLogo />
            </a>
            <a href = "https://www.youtube.com/channel/UCHKCrF8UrVGt-tI_CRa9zbg" target = "_self">
                <YoutubeLogo />
            </a>
            <a href = "https://play.google.com/store/apps/details?id=com.travelyaari" target = "_self">
                <AppLogo />
            </a>
        </div>
        <div
            style = {{
                fontSize: '0.75rem',
                padding: '20px 15px',
                borderTop: `1px solid ${ blue2 }`
            }}
        > © 2008-{ new Date().getFullYear() }, Mantis Technologies Private Limited, (Travelyaari™)<br />All rights reserved</div>
    </footer>
)