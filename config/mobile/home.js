import Tysure from '../../components/utilities/others/tysure'

export const navBar = [
    [{
        label: 'My bookings',
        link: '/accounts/booking'
    }],
    [{
        label: 'Download our app',
        link: 'https://play.google.com/store/apps/details?id=com.travelyaari'
    }],
    [{
        label: 'Customer care',
        link: '/contact-us'
    },
    {
        label: 'Call us at 1800-103-4482',
        link: 'tel:18001034482'
    }],
    [{
        label: <Tysure>-Assured travel</Tysure>,
        link: '/ty-sure'
    },
    {
        label: 'Terms & conditions',
        link: '/terms-conditions'
    },
    {
        label: 'Privacy policy',
        link: '/privacy-policy'
    }],
    [{
        label: 'About Travelyaari',
        link: '/about-us'
    },
    {
        label: 'Office Address',
        link: '/office-address'
    }]
]

export const showBanner = false

export const seo = {
    operator: {
        head: {
            label: 'Popular bus operators',
            link: '/popular-bus-operators-listing'
        },
        list: [
            {
                label: 'Punbus',
                link: '/punbus-punjab-roadways-10632-online'
            },
            {
                label: 'Sharma Travels',
                link: '/sharma-travels-nanded-4081-online'
            },
            {
                label: 'Parveen Travels',
                link: '/parveen-travels-15985-online'
            },
            {
                label: 'SRS Travels',
                link: '/srs-travels-12989-online'
            }
        ]
    },
    route: {
        head: {
            label: 'Top bus routes',
            link: '/popular-routes-listing'
        },
        list: [
            {
                label: 'Delhi to Chandigarh',
                link: '/delhi-to-chandigarh-bus-tickets'
            },
            {
                label: 'Hyderabad to Bangalore',
                link: '/hyderabad-to-bengaluru-bus-tickets'
            },
            {
                label: 'Pune to Nagpur',
                link: '/pune-to-nagpur-bus-tickets'
            },
            {
                label: 'Mumbai to Kolhapur',
                link: '/mumbai-to-kolhapur-bus-tickets'
            }
        ]
    },
    city: {
        head: {
            label: 'Popular cities',
            link: '/popular-cities-listing'
        },
        list: [
            {
                label: 'Pune',
                link: '/pune-service'
            },
            {
                label: 'Bangalore',
                link: '/bengaluru-service'
            },
            {
                label: 'Delhi',
                link: '/delhi-service'
            },
            {
                label: 'Chennai',
                link: '/chennai-service'
            }
        ]
    }
}