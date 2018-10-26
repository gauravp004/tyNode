import SearchMobile from '../components/mobile/search'

class search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showLoader: true
        }
    }

    componentDidMount() {
        
    }
    
    render() {
        return <SearchMobile />
    }
    
}

export default search