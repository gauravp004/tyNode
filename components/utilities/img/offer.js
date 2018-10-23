export default (props) => (
    <span
        onClick = { props.onClick }
        style = {{
            ...props.style,
            display: 'inline-block',
            width: '25px',
            height: '24px',
            backgroundImage: 'url(/static/img/home-sprite-1.png)',
            backgroundPosition: '-120px -1px'
        }}
    ></span>
)