import SearchartMobile from '../components/mobile/seatchart'

class seatchart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showLoader: true
        }
    }

    componentDidMount() {
        
    }
    
    render() {
        return <SearchartMobile />
    }
    
}

export default seatchart