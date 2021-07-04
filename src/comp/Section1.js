/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from 'D:/PRV/web practice/React - landing page/berger-landingpage/src/img/logo.png';
import scooter from 'D:/PRV/web practice/React - landing page/berger-landingpage/src/img/scooter.png';

function Section1() {
    return (
      <div className="section1">
        <div class="header">
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className='right'>
            <div className="delivery">
              <img src={scooter} alt="delivery"/>
              <span>Express Delivery +1 234 567 890</span>
            </div>
            <div className="nav">
              <a href='#'>HOME</a>
              <a href='#'>MENU</a>
              <a href='#'>OUR STORY</a>
              <a href='#'>CONTACT US</a>
            </div>
          </div>
        </div>
        <div className="section-main">
          <p className="dashborder norm">It is a good time for the great taste of burgers</p>
          <h2>BURGER</h2>
          <h4>WEEK</h4>
        </div>
      </div>
    );
  }
  
  export default Section1;