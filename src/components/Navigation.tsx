import { Link } from "react-router-dom"
import "../components/Navigation.css"

export default function Navigation() {
    return (
        <div className="navigation">
            <nav>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/menu">Menu</Link>
                <Link className="link" to="/about">About</Link>
            </nav>
        </div>
    )
}