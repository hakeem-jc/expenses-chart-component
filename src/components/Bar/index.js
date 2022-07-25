import './styles.css';

export const Bar = (props) => {

    const height = { height: `${props.data.amount * 4}px`};

    return (
        <div className="bar__container" style={height}>
            <div className={"bar bar--soft-red"}></div>
            <p className='bar__text'>{props.data.day}</p>
        </div>
    );
}