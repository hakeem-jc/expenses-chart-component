import './styles.css';

export const Bar = (props) => {
    <div className="bar__container">
        <div className="bar bar--cyan"></div>
        <p className='bar__text'>{props.day}</p>
    </div>
}