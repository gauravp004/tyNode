export default (props) => (
    <span
        onClick = { props.onClick }
        style = {{
            ...props.style,
            display: 'inline-block',
            width: '28px',
            height: '26px',
            backgroundImage: 'url(/static/img/home-sprite-1.png)',
            backgroundPosition: '-143px -1px'
        }}
    ></span>
)