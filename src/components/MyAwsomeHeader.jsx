import heroimg from "../assets/images/hero.png"
import logo from "../assets/images/logo.svg"

function MyAwsomeHeader(){
    return (
        <header className="header">
            <div className="navbar wrapper">
                {/* logo box */}
                <article className="logo">
                    <img className="logo-img" src={logo} alt="Logo" width="70" height="50"/>
                    <h3 className="logo-text">Start</h3>
                </article>
                {/* hamburger for mobile */}
                <article className="hamburger hide-for-desktop">
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </article>
                {/* nav */}
                <nav className="nav hide-for-mobile">
                    <ul className="nav-list">
                        <li className="nav-link">Home</li>
                        <li className="nav-link">About</li>
                        <li className="nav-link">Services</li>
                        <li className="nav-link">Contact</li>
                    </ul>
                </nav>
            </div>
            {/* hero section */}
            <section className="hero wrapper">
                <img className="hero-img" src={heroimg} alt="" />
                {/* hero content-box */}
                <article className="hero-content content-box">
                    <h4 className="content-box-subtitle">Welcome</h4>
                    <h2 className="content-box-title">
                        Lorem ipsum dolor sit amet consectetur
                    </h2>
                    <small className="content-box-paragraph">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo
                        hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate
                        culpa nesciunt delectus iste?
                    </small>
                    <button className="btn content-box-btn hero-btn">Explore</button>
                </article>
            </section>
        </header>
    )
}

export default MyAwsomeHeader