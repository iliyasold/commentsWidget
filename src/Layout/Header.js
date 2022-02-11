import logo from '../logo.svg'
import TopMenu from '../Menu/TopMenu';
import LoginMenu from '../Menu/LoginMenu';

function Header() {
    return (
        <header className="Header">
            <div className="container Header-container">
                <div className="App-name">
                    <img src={logo} className="App-logo" alt="Логотип" title={"Логотип виджета комментариев"}/>

                    <h1 className="first-title visually-hidden">Виджет комментариев</h1>
                </div>

                <TopMenu />

                <LoginMenu />
            </div>
        </header>
    )
}

export default Header;