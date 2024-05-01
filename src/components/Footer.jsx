import "../styles/Footer.css";
import logo from "../assets/img/logo.png";
import facebook from "../assets/img/fb.png";
import linkedn from "../assets/img/linkedn.png";
import twitter from "../assets/img/twitter.png";
import instagram from "../assets/img/instagram.jpeg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer1">
        <div className="footer11">
          <img src={logo} alt="HOPE Bottle" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing
          </p>

          <form className="subscribe-form">
            <input
              className="email-input"
              type="email"
              placeholder="Enter your email address"
              name="email"
              required
            />
            <button className="subscribe-btn">Subscribe</button>
          </form>
          <div className="footer-icons">
            <img src={facebook} alt="Icon 1" />
            <img src={linkedn} alt="Icon 2" />
            <img src={twitter} alt="Icon 3" />
            <img src={instagram} alt="Icon 4" />
          </div>
        </div>
        <div className="footer12">
          <h3>About DIDOMI</h3>
          <h6>Our Story</h6>
          <h6>Sustainability</h6>
          <h6>Company Information</h6>
          <h6>Terms of Service</h6>
          <h6>Refund policy</h6>
        </div>
        <div className="footer12">
          <h3>Fan Favourites</h3>
          <h6>Espadrilles for Summer</h6>
          <h6>Trendy Sneakers</h6>
          <h6>Wide Width Collection</h6>
        </div>
        <div className="footer12">
          <h3>Policies</h3>
          <h6>Privacy Policy</h6>
          <h6>Shipping Policy</h6>
          <h6>Contect</h6>
          <h6>Terms of Service</h6>
          <h6>Request a Return/Exchange</h6>
          <h6>Exchange & Retum Pollcy</h6>
          <h6>Track Your Order</h6>
        </div>
      </div>
      <div className="footer3">
        <hr />
      </div>
      <div className="footer2">
        <p>Copyright &#169;{new Date().getFullYear()} Didomi</p>
      </div>
    </section>
  );
};

export default Footer;
