import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">
                    Home
                    </Link>
                    </li>
                <li>
                    <Link to="/blog">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link to="/users">
                        Users
                    </Link>
                </li>
                <li>
                    <Link to="/ilyosxon">
                        Ilyosxon
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar