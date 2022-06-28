import Logo from '../../images/logo.svg';
import './styles.css';

export const Balance = () => {
    return (
        <header className="balance">
            <div className="balance__content">
                <h3 className="balance__title">My balance</h3>
                <h1 className="balance__value">$921.48</h1>
            </div>
            <div className="balance__logo_container">
                <img src={Logo} alt="App logo"/>
            </div>
        </header>
    )
}