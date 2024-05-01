import hope from "../assets/img/HOPE Bottle.webp";
import day from "../assets/img/New Day Ombre.webp";
import maji from "../assets/img/Maji Blue.webp";
import ppl1 from "../assets/img/ppl.png";
import ppl2 from "../assets/img/ppl-1.png";
import ppl3 from "../assets/img/ppl-2.png";
import updates from "../assets/img/updates.jpg";
import bottle2 from "../assets/img/manbottle.jpg";
import bottle3 from "../assets/img/bottle3.jpg";
import Partner1 from "../assets/img/sony logo-1.jpg";
import Partner2 from "../assets/img/sony logo-2.jpg";
import Partner3 from "../assets/img/sony logo-3.jpg";
import Partner4 from "../assets/img/sony logo-4.jpg";
import Partner5 from "../assets/img/sony logo.jpg";
import Partnerships from "../assets/img/Partnerships.jpg";
import Story from "../assets/img/Story.jpg";
import "../styles/Home.css";

const Home = () => {
  // Array to store the number of indicators
  const indicators = [1, 2, 3, 4];
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
      <div className="didomi-promise">
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
            <img src={ppl1} alt="ppl icon" />
            <h3>60 k</h3>
            <p>People with water access</p>
          </div>
          <div className="didomi-promise2">
            <img src={ppl2} alt="ppl icon" />
            <h3>06</h3>
            <p>Countries Impacted</p>
          </div>
          <div className="didomi-promise2">
            <img src={ppl3} alt="ppl icon" />
            <h3>23</h3>
            <p>Partner Organization</p>
          </div>
        </div>
        <button className="our-impact-btn">our impact</button>
      </div>
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

      <div className="bottle2-section">
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
      </div>
      {/* =====this is the video tag====   */}
      <iframe
        src="https://www.youtube.com/embed/GnSHHTHmocc?si=7jFD3WOl0TigET4D"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      {/* ========another-section ========*/}
      <div className="bottle3-section">
        <div className="bottle3-left">
          <div className="quote">&ldquo;</div>
          <p>best bottle i own</p>

          <h6>
            Buying and owning this bottle was the best decision i’ve ever made.
            it’s easy to carry, easy to drink out of it, and knowing Didómi’s
            mission makes it an even better purchase.
          </h6>
          <p>Clara M</p>
          <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
        </div>
        <div className="bottle3-right">
          <img src={bottle3} alt="a lady with a bottle" />
          <div className="pagination">
            {indicators.map((indicator, index) => (
              <span
                key={index}
                className={index === 0 ? "active" : ""} // Adding "active" class to the first indicator
              ></span>
            ))}
          </div>
        </div>
      </div>
      <section className="updates">
        <div className="update">
          <h2>Our Updates</h2>
          <p>Learn how your Bottle brings water to people in Africa</p>
          <button className="discover-btn">Discover More</button>
        </div>
        <div className="update">
          <img src={updates} alt="updates " />
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sedLorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed
          </p>
          <button className="readmore-btn">Read More</button>
        </div>
        <div className="update">
          <img src={updates} alt="updates " />
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sedLorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed
          </p>
          <button className="readmore-btn">Read More</button>
        </div>
      </section>
      {/* ============partners========== */}
      <section className="partner">
        <h2>Companies Who Are Reducing Plastic Waste And Making An Impact</h2>
        <div className="pattern-container">
          <img src={Partner5} alt="Partner 5" className="partner-image" />
          <img src={Partner1} alt="Partner 1" className="partner-image" />
          <img src={Partner2} alt="Partner 2" className="partner-image" />
          <img src={Partner3} alt="Partner 3" className="partner-image" />
          <img src={Partner4} alt="Partner 4" className="partner-image" />
        </div>
      </section>
      {/* =========PartnershipSection========= */}
      <section className="partnership-section">
        <div className="partnership">
          <img src={Partnerships} alt="Image 1" />
          <h3>Our Partnerships</h3>
          <p>
            Learn More <span>&gt;</span>
          </p>
        </div>
        <div className="partnership">
          <img src={Story} alt="Image 2" />
          <h3>Our Story</h3>
          <p>
            Learn More <span>&gt;</span>
          </p>
        </div>
      </section>
      {/* =====the second lasts section====== */}

      <div className="bottle-image4">
        <div className="description-column">
          <p>
            Design your custom bottle. Simply follow the steps, add your artwork
            and get creative! It’s easy. It’s fun. And best of all, it’s
            one-of-a-kind!
          </p>

          <button className="discover-btn">Discover More</button>
        </div>
        <div className="description-column">
          <img src={hope} alt="Bottle Image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
