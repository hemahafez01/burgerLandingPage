import './section1.css';
import './section2.css';
import './section3.css';
import './section4.css';
import './section5.css';
import './section6.css';
import Section1 from './comp/Section1';
import Section2 from './comp/Section2';
import Section3 from './comp/Section3';
import Section4 from './comp/Section4';
import Section5 from './comp/Section5';
import Section6 from './comp/Section6';

function App() {
  return (
    <div className="App">
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>

    </div>
  );
}

export default App;
