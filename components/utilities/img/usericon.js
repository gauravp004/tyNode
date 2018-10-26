export default (props) => (
    <span
        onClick = { props.onClick }
        style = {{
            ...props.style,
            display: 'inline-block',
            width: '27px',
            height: '28px',
            backgroundImage: 'url(/static/img/home-sprite-1.png)',
            backgroundPosition: '-352px -4px'
        }}
    ></span>
)