import {Link} from "react-router-dom";

function BaseLayout({ children }) {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/meshEditor">Mesh Editor</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                { children }
            </main>
            <footer>
                <p>© 2024 Proto</p>
            </footer>
        </div>
    )
}

export default BaseLayout;