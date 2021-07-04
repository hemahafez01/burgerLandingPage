/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from 'D:/PRV/web practice/React - landing page/berger-landingpage/src/img/group6/logo.png';
import insta from 'D:/PRV/web practice/React - landing page/berger-landingpage/src/img/group6/Instagram.png';
import Facebook from 'D:/PRV/web practice/React - landing page/berger-landingpage/src/img/group6/Facebook.png';
import Twitter from 'D:/PRV/web practice/React - landing page/berger-landingpage/src/img/group6/Twitter.png';
import WhatsApp from 'D:/PRV/web practice/React - landing page/berger-landingpage/src/img/group6/WhatsApp.png';
import location from 'D:/PRV/web practice/React - landing page/berger-landingpage/src/img/group6/Location Icon.png';
import EMail from 'D:/PRV/web practice/React - landing page/berger-landingpage/src/img/group6/Email.png';

function Section6() {
    return (
          <div className="section6">
            < div className='main'>
              <div className='left'>
                <img src={logo} alt='logo'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis. </p>
              </div>
              <div className='right6'>
                <div>
                  <img src={location} alt='location'/>
                  <p>Main Road, Building Name, Country</p>
                </div>
                <div>
                  <img src={EMail} alt='Email'/>
                  <p>info@companyname.com</p>
                </div>
              </div>
            </div>
            <div className='hash'>
              <p>© Company Name 2020. All rights reserved.</p>
              <div>
                <img src={insta} alt='instagram'/>
                <img src={Facebook} alt='Facebook'/>
                <img src={Twitter} alt='Twitter'/>
                <img src={WhatsApp} alt='WhatsApp'/>
              </div>
            </div>
          </div>
    );
  }
  
  export default Section6;