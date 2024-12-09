import ContentBox from "./Contentbox"

//brands
import googleImg from "../assets/images/google.svg"
import microsoftImg from "../assets/images/microsoft.svg"
import airbnbImg from "../assets/images/airbnb.svg"
import facebookImg from "../assets/images/facebook.svg"
import spotifyImg from "../assets/images/spotify.svg"
//sections
import contact from "../assets/images/contact.svg"
import settings from "../assets/images/settings.svg"
//teams
import peg from "../assets/images/pegpp.svg"
import richard from "../assets/images/richardpp.svg"
import alexandra from "../assets/images/alexandra.svg"
import janet from "../assets/images/janetpp.svg"


function MainContents(){
    return(
        <main className="main wrapper">
            {/* partners section */}
            <section className="partners mb">
                <center>
                    <article className="content-box c-white">
                        <h4 className="content-box-subtitle">partners</h4>
                        <h2 className="content-box-title">
                            Lorem ipsum dolor sit amet consectetur
                        </h2>
                        <small className="content-box-paragraph">
                            Lorem ipsum, dolor sit amet consectetur <br></br><br></br>
                            adipisicing elit.
                        </small>
                    </article>
                    
                    <article className="partners-images">
                        <img src={googleImg} alt="google logo" width="151" height="50" />
                        <img src={microsoftImg} alt="microsoft logo" width="201" height="43" />
                        <img src={airbnbImg} alt="airbnb logo" width="161" height="51" />
                        <img src={facebookImg} alt="facebook logo" width="191" height="38" />
                        <img src={spotifyImg} alt="spotfy logo" width="161" height="49" />
                    </article>

                        <button className="btn content-box-btn">Learn More</button>
                </center>
            </section>

            {/* section one */}
            <section className="section mb">
                    <img className="section-img" src={contact} alt="" width="600" height="432"/>
                    <article className="content-box">
                        {/* <h4 className="content-box-subtitle">{subtitle.subtitle}</h4> */}
                        <h2 className="content-box-title">
                            Lorem ipsum dolor sit amet consectetur
                        </h2>
                        <small className="content-box-paragraph">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo
                            hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate
                            culpa nesciunt delectus iste?
                        </small>
                        <button className="btn content-box-btn">Learn More</button>
                    </article>
            </section>

            {/* section two */}
            <section className="section mb section-grid">
                    <img className="section-img" src={settings} alt="" width="600" height="566"/>
                    <article className="content-box">
                        {/* <h4 className="content-box-subtitle">{subtitle.subtitle}</h4> */}
                        <h2 className="content-box-title">
                            Lorem ipsum dolor sit amet consectetur
                        </h2>
                        <small className="content-box-paragraph">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo
                            hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate
                            culpa nesciunt delectus iste?
                        </small>
                        <button className="btn content-box-btn">Learn More</button>
                    </article>
            </section>
            {/* section team */}
            <section className="team">
                <article className="content-box c-white">
                    <h4 className="content-box-subtitle">Team</h4>
                    <h2 className="content-box-title">
                        Our Talents
                    </h2>
                    <small className="content-box-paragraph">
                        Lorem ipsum, dolor sit amet consectetur <br></br>
                        adipisicing elit.
                    </small>
                </article>
                <article className="teams">

                    <article className="teams-card">
                             <img className="teams-card-img" src={peg} alt="peg profile photo" />
                            <div className="teams-card-content">
                                <h4 className="teams-card-content-title">Pegg Legge</h4>
                                <small className="teams-card-content-paragraph">CEO</small>
                            </div>
                    </article>
                    <article className="teams-card">
                             <img className="teams-card-img" src={richard} alt="richard profile photo" />
                            <div className="teams-card-content">
                                <h4 className="teams-card-content-title">Richard Guerra</h4>
                                <small className="teams-card-content-paragraph">CTO</small>
                            </div>
                    </article>
                    <article className="teams-card">
                             <img className="teams-card-img" src={alexandra} alt="alexandra profile photo" />
                            <div className="teams-card-content">
                                <h4 className="teams-card-content-title">Alexandra Stolz</h4>
                                <small className="teams-card-content-paragraph">DESIGNER</small>
                            </div>
                    </article>
                    <article className="teams-card">
                             <img className="teams-card-img" src={janet} alt="janet profile photo" />
                            <div className="teams-card-content">
                                <h4 className="teams-card-content-title">Janet Bray</h4>
                                <small className="teams-card-content-paragraph">DEVELOPER</small>
                            </div>
                    </article>

                </article>
                <button className="btn content-box-btn">Learn More</button>
            </section>
        </main>
    )
}

export default MainContents