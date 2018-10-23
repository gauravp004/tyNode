import { primary, white, blue1, blue2, opacity1, appLink, fbLink, twitterLink, instaLink, linkedinLink, gplusLink, youtubeLink } from '../../../config/common'
import FbLogo from '../../utilities/img/fb'
import TwitterLogo from '../../utilities/img/twitter'
import InstaLogo from '../../utilities/img/instagram'
import YoutubeLogo from '../../utilities/img/youtube'
import GplusLogo from '../../utilities/img/gplus'
import LinkedinLogo from '../../utilities/img/linkedin'
import AppLogo from '../../utilities/img/playstore'
import Logo from '../../utilities/img/logosmall'

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
            href = { appLink }
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
            <a href = { fbLink } target = "_self">
                <FbLogo />
            </a>
            <a href = { twitterLink } target = "_self">
                <TwitterLogo />
            </a>
            <a href = { instaLink } target = "_self">
                <InstaLogo />
            </a>
            <a href = { linkedinLink } target = "_self">
                <LinkedinLogo />
            </a>
            <a href = { gplusLink } target = "_self">
                <GplusLogo />
            </a>
            <a href = { youtubeLink } target = "_self">
                <YoutubeLogo />
            </a>
            <a href = { appLink } target = "_self">
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