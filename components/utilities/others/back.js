export default (props) => (
    <div className = "ty-back flcc" onClick = { props.onClick }>
        <style jsx>{`
            .ty-back {
                position: relative;
            }
            .ty-back span {
                display: inline-block;
                height: 2px;
                width: 10px;
                background: ${ props.color };
            }
            .ty-back>span:nth-child(2) {
                width: 16px;
            }
            .ty-back>span:first-child {
                position: absolute;
                top: 3px;
                left: -2px;
                transform: rotate(45deg);
            }
            .ty-back>span:last-child {
                position: absolute;
                top: -3px;
                left: -2px;
                transform: rotate(-45deg);
            }
        `}</style>
        <span></span>
        <span></span>
        <span></span>
    </div>
)