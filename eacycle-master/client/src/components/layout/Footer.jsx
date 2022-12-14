import "./footer.sass"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <h1 className="footer__logo">Eacycle</h1>
                <div className="footer__author">
                    <a href="https://github.com/Artur-Topolyan" className="footer__author-link" target="_blank"></a>
                    <h6 className="footer__author-signature">
                        This site has been powered by Topolyan Artur.
                        All right reserved
                    </h6>
                </div>
            </div>

        </footer>
    )

}

export default Footer