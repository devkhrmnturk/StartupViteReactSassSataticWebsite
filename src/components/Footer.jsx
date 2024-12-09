import face from "../assets/images/f.svg"
import inst from "../assets/images/instagram.svg"
import tw from "../assets/images/twitter.svg"
import pin from "../assets/images/pinterest.svg"
import tt from "../assets/images/tiktok.svg"
import wp from "../assets/images/whatsapp.svg"
import yt from "../assets/images/youtube.svg"

function Footer(){
    return (
        <footer className="footer">
            <div className="footer-container wrapper">
                <div className="footer-social-icons">
                    <img src={face} alt="facebook logo" width="10" height="18"/>
                    <img src={inst} alt="instagram logo" width="19" height="18"/>
                    <img src={tw} alt="twitter logo" width="23" height="18"/>
                    <img src={pin} alt="pinterest logo" width="15" height="18"/>
                    <img src={tt} alt="tiktok logo" width="17" height="18"/>
                    <img src={wp} alt="whatsapp logo" width="19" height="18"/>
                    <img src={yt} alt="youtube logo" width="26" height="18"/>
                </div>
                <p className="footer-copytext">© Start, 2022. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer