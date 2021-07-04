/* eslint-disable jsx-a11y/anchor-is-valid */
// import burger1 from 'D:/PRV/web practice/React - landing page/berger-landingpage/src/img/group4/Burger Image.png';
// import burger2 from 'D:/PRV/web practice/React - landing page/berger-landingpage/src/img/group3/burger2.png';

function Section5() {
    return (
          <div className="section5">
            <div className="mid">
              <h5>Reservation</h5>
              <h3>Book your table</h3>
            </div>
            <form className='form'>
              <div>
              <input type='text' id='name' name='name' placeholder="NAME"/>
              <input type='date' id='date' name='date' placeholder="Date" />
              <input type='text' id='people' name='people' placeholder="PEOPLE"/>
              </div>
              <div>
              <input type='email' id='email' name='email' placeholder="EMAIL"/>
              <input type='time' id='time' name='time' placeholder="TIME"/>
              <button className='form-btn'>FIND A TABLE</button>
              </div>
            </form>
          </div>
    );
  }
  
  export default Section5;