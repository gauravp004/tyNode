export default (props) => (
    <span
        onClick = { props.onClick }
        style = {{
            ...props.style,
            display: 'inline-block',
            width: '17px',
            height: '18px',
            backgroundImage: 'url(/static/img/home-sprite-1.png)',
            backgroundPosition: '-333px -5px'
        }}
    ></span>
)