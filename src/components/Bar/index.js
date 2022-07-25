import './styles.css';

export const Bar = (props) => {

    const height = { height: `${props.data.amount * 4}px`};
    const barClass = props.today === props.data.day ? 'bar bar--cyan':'bar bar--soft-red';

    return (
        <div className="bar__container" style={height}>
            <div className={barClass}></div>
            <p className='bar__text'>{props.data.day}</p>
        </div>
    );
}