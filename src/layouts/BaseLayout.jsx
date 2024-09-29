import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

function BaseLayout({ children }) {
    return (
        <>
            <Header />
            <main>
                { children }
            </main>
            <Footer />
        </>
    )
}

export default BaseLayout;