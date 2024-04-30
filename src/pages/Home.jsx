import hope from "../assets/img/HOPE Bottle.webp";
import day from "../assets/img/New Day Ombre.webp";
import maji from "../assets/img/Maji Blue.webp";
// import Artboard from "../assets/img/Artboard.png";
// import bottle2 from "../assets/img/manbottle.jpg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="wrapper">
      {/* ========home section===== */}
      <div className="home__section">
        <div className="home__section-content">
          <h1>Didomi</h1>
          <p>Every Bottle Provides 10 Years Of Water</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </div>
      {/* ========next section====== */}
      <div className="bottle1">
        <h3>A Bottle with A Mission</h3>
        <p>
          We are a social enterprise, founded by African immigrants who endured
          the water crisis,
          <span> dedicated to addressing global water scarcity</span> and
          <span>ending plastic waste </span>by selling premium-quality,
          custom-designed reusable water bottles.
        </p>
        <button className="our-story-btn">our story</button>
      </div>
      {/* =======bottles section=========== */}
      <div className="image-grid">
        <h2>our bottles</h2>
        <div className="image-container">
          <div className="image-item">
            <img src={hope} alt="HOPE Bottle" />
            <div className="image-info">
              <h3>HOPE Bottle</h3>
              <p>
                24 oz that is suitable for all occasions and perfect for those
                on the go. Built with Thermo-pro™ Double Wall Vacuum Insulation.
                Cold drinks Stay cold for 24+ hours and hot for up to 12 hours.
                Rockwell™ Powder Coating so it is easy to grip and condensation
                free. 18/8 Medical grade stainless steel to ensure no
                aftertaste.
              </p>
            </div>
          </div>
          <div className="image-item">
            <img src={day} alt="HOPE Bottle" />
            <div className="image-info">
              <h3>New Day Ombre</h3>
              <p>
                24 oz that is suitable for all occasions and perfect for those
                on the go. Built with Thermo-pro™ Double Wall Vacuum Insulation.
                Cold drinks Stay cold for 24+ hours and hot for up to 12 hours.
                Rockwell™ Powder Coating so it is easy to grip and condensation
                free. 18/8 Medical grade stainless steel to ensure no
                aftertaste.
              </p>
            </div>
          </div>
          <div className="image-item">
            <img src={maji} alt="Maji Blue" />
            <div className="image-info">
              <h3>Maji Blue</h3>
              <p>
                24 oz that is suitable for all occasions and perfect for those
                on the go. Built with Thermo-pro™ Double Wall Vacuum Insulation.
                Cold drinks Stay cold for 24+ hours and hot for up to 12 hours.
                Rockwell™ Powder Coating so it is easy to grip and condensation
                free. 18/8 Medical grade stainless steel to ensure no
                aftertaste.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ============didomi promise section================== */}
      {/* <div className="didomi-promise">
        <h2>Didomi Promise</h2>
        <p>
          As part of the Didomi Promise,
          <span>
            every bottle provides 10 years of clean, safe and reliable water
            access
          </span>
          to someone in need.
        </p>
        <div className="didomi-promise1">
          <div className="didomi-promise2">
            <h3>60 k</h3>
            <p>People with water access</p>
          </div>
          <div className="didomi-promise2">
            <h3>6</h3>
            <p>Countries Impacted</p>
          </div>
          <div className="didomi-promise2">
            <h3>23</h3>
            <p>Partner Organization</p>
          </div>
        </div>
        <button className="our-impact-btn">our impact</button>
      </div> */}
      {/* ========the next section========background-color: #88c4f6; */}

      {/* <div className="impact-section">
        <div className="text-container">
          <p className="title">
            We provide 10 years of water access for someone in need using 50% of
            our profits
          </p>
          <p className="profit-margin">50% profit margin</p>
        </div>
        <div className="diagram-container">
          <div className="image-section">
            <img src={Artboard} alt="Water Bottle" className="bottle-image" />

            <img src={Artboard} alt="Water Bottle" className="bottle-image" />
          </div>
          <div className="pir">
            <div className="revenue-section">
              <p className="revenue-title">Revenue</p>
              <p className="revenue-text">Avg. Price of bottle $30</p>
            </div>
            <div className="profit-section">
              <p className="profit-title">Profit</p>
              <p className="profit-text">$15 but ranges bottle</p>
            </div>
            <div className="impact-section">
              <p className="impact-title">impact</p>
              <p className="impact-text">$7 of every sale donated</p>
            </div>
          </div>

          <p className="profit-margin2">50% of profit goes towards impact</p>
        </div>
      </div> */}

      {/* ========bottle2-section ========*/}

      {/* <div className="bottle2-section">
        <div className="bottle2-left">
          <h2>Our Bottles</h2>
          <p>
            Our <span> high-quality bottles</span> strike the perfect balance
            between function and aesthetic. They enable{" "}
            <span> eco-conscious organizations</span> to tangibly demonstrate
            their commitment to <span> eliminating plastic waste</span> by
            providing an attractive, reusable alternative to single-use plastics
          </p>
        </div>
        <div className="bottle2-right">
          <img src={bottle2} alt="man with a bottle a bottle" />
        </div>
      </div> */}
    </div>
  );
};

export default Home;
