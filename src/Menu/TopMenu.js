import { TiThMenuOutline } from "react-icons/ti";

function TopMenu() {
    return (
        <nav className="nav">
            <ul className="Menu-list list">
                <li className="Menu-item">
                    <a className="Menu-link" href="#">Букварь</a>
                </li>

                <li className="Menu-item">
                    <a className="Menu-link" href="#">Вторая</a>
                </li>

                <li className="Menu-item">
                    <a className="Menu-link" href="#">Синяя</a>
                </li>

                <li className="Menu-hamburger">
                    <TiThMenuOutline className="Menu-hamburger-ico" />
                </li>
            </ul>
        </nav>
    )
}

export default TopMenu;