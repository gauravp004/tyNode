const slider = (props) => (
    <div className = { props.active ? "slider2 active" : "slider2" }>
        <style jsx>{`
            .slider2 {
                height: 0;
                opacity: 0;
                visibility: hidden;
                width: 100%;
                transition: 0.6s ease;
            }
            .slider2.active {
                height: ${ props.height || "auto" };
                opacity: 1;
                visibility: visible;
                transition: 0.6s ease;
            }
        `}</style>
        { props.children }
    </div>
)

export default slider