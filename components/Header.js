import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Regional</span> News
            </h1>
            <p className={headerStyles.description}>
                Keep up to date with the latest regional news
            </p>
        </div>
    );
}

export default Header;