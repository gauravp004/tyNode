export default (props) => <span
    onClick = { props.onClick }
    style = {{
        ...props.style,
        fontSize: props.fontSize || '1.5rem'
    }}
>&#x2715;</span>