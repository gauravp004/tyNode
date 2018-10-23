export default (props) => (
    <div className = "ty-menu flcolsb" onClick = { props.onClick }>
        <style jsx>{`
            .ty-menu {
                height: 19px;
            }
            .ty-menu div {
                width: 25px;
                height: 3px;
                background-color: ${ props.color };
            }
        `}</style>
        <div></div>
        <div></div>
        <div></div>
    </div>
)