/* eslint-disable jsx-a11y/anchor-is-valid */
import burger1 from '../img/group3/burger1.png';
import burger2 from '../img/group3/burger2.png';

function Section3() {
    return (
          <div className="section3">
              <div className='mid'>
                <h6>Always Tasty Burger</h6>
                <h4>Choose & Enjoy</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
              </div>
              <div className='parts'>
                <div>
                  <img src={burger1} alt='burger1' />
                  <h5>Lorem ipsum dolor</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                  <button>Order Now</button>
                </div>
                <div>
                  <img src={burger2} alt='burger2' />
                  <h5>Lorem ipsum dolor</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                  <button>Order Now</button>
                </div>
                <div>
                  <img src={burger1} alt='burger1' />
                  <h5>Lorem ipsum dolor</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                  <button>Order Now</button>
                </div>
              </div>
          </div>
    );
  }
  
  export default Section3;
