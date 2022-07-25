import './styles.css';
import { useState } from 'react';

export const Bar = (props) => {

    const height = { height: `${props.data.amount * 4}px`};
    const barClass = props.today === props.data.day ? 'bar bar--cyan':'bar bar--soft-red';
    const [showToolTip, setShowToolTip] = useState(false);

    return (
        <div
            onMouseEnter={(_e)=>{
                setShowToolTip(true);
            }}
            onMouseLeave={(_e)=>{
                setShowToolTip(false);
            }}
        >
            {showToolTip &&
                <div className='bar__tooltip'>
                    <p>${props.data.amount}</p>
                </div>
            }
            <div className="bar__container" style={height}>
                <div className={barClass}></div>
                <p className='bar__text'>{props.data.day}</p>
            </div>
        </div>
    );
}