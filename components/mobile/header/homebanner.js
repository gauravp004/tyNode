import Link from 'next/link'

import { primary, other1, white } from '../../../config/common'

export default (props) => (
    <div className = 'search-head flsac'>
        <style jsx>{`
            .search-head {
                background: ${ primary };
                color: ${ other1 };
                font-weight: 700;
                padding: 10px 5px;
                text-align: center;
            }
            .search-head a {
                width: calc(25% - 10px);
                padding: 4px 0 6px;
                text-transform: uppercase;
            }
            .search-head a.active {
                color: ${ white };
                border-bottom: 3px solid ${ white };
            }
        `}</style>
        <Link href='/'>
            <a className = { props.active === 1 && 'active' }>Bus</a>
        </Link>
        <a href='/hotel' target='_self' className = { props.active === 2 && 'active' }>Hotel</a>
        <a href='/tour' target='_self' className = { props.active === 3 && 'active' }>Tour</a>
        <a href='/activity' target='_self' className = { props.active === 4 && 'active' }>Activity</a>
    </div>
)