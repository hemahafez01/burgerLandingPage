/* eslint-disable jsx-a11y/anchor-is-valid */
import burger1 from '../img/group4/Burger Image.png';
// import burger2 from 'D:/PRV/web practice/React - landing page/berger-landingpage/src/img/group3/burger2.png';

function Section4() {
    return (
          <div className="section4">
            <div className='left4'>
              <h5>Discover</h5>
              <h3>UPCOMING EVENTS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
              <div className='scroll'>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className='right4'>
              <img src={burger1} alt="burger"/>
            </div>
          </div>
    );
  }
  
  export default Section4;
