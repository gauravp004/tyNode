export default (props) => (
    <span className = "ty-arrow" onClick = { props.onClick } style = {{ ...props.style }}>
        <style jsx>{`
            .ty-arrow {
                border: ${ props.width || '5px' } solid;
                width: 0;
                height: 0;
                border-color: transparent transparent ${ props.up || props.down ? props.color : 'transparent' } ${ props.right || props.left ? props.color : 'transparent' };
                transform: ${ props.down || props.left ? 'rotate(180deg)' : 'none' };
                transition: 0.6s ease transform;
            }
        `}</style>
    </span>
)