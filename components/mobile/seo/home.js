import { seo } from '../../../config/mobile/home'
import List from './listing1'
import { black, primary } from '../../../config/common'

export default () => (
    Object.keys(seo).map((el, index) => (
        <div
            key = { index }
            style = {{
                padding: '15px'
            }}
        >
            <div className = "flsbc" style = {{ padding: '10px 0' }}>
                <h6
                    style = {{
                        margin: 0,
                        fontSize: '0.9rem',
                        fontWeight: 300,
                        color: black
                    }}
                >{ seo[el].head.label }</h6>
                <a
                    href = { seo[el].head.link }
                    target = "_self"
                    style = {{
                        fontSize: '0.85rem',
                        fontWeight: 300,
                        color: primary
                    }}
                >View all</a>
            </div>
            <List data = { seo[el].list } />
        </div>
    ))
)