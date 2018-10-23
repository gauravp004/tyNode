import { connect } from 'react-redux';

import Wrapper from '../components/mobile/wrapper'
import { showBanner } from '../config/mobile/home'
// Head tag for home page
import HomeHead from '../components/mobile/headtag/home'

import Header from '../components/mobile/header/home'
import Banner from '../components/mobile/header/homebanner'
import SearchPanel from '../components/mobile/searchpanel/searchpanel'
import Seo from '../components/mobile/seo/home'
import Footer from '../components/mobile/footer/home'

export default connect()(() => (
    <Wrapper>
        <HomeHead />
        <Header />
        { showBanner && <Banner active = { 1 } /> }
        <SearchPanel />
        <Seo />
        <Footer />
    </Wrapper>
))