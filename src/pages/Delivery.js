import step1 from '../assets/step1.png'
import step2 from '../assets/step2.png'
import step3 from '../assets/step3.png'

import './Delivery.css';
export default function Delivery() {
  return (
    <div className="Delivery">
      <h1>HOW IT WORKS</h1>
      <div className="delivery">
        <div className="step1">

          <img src={step1} alt="step1" />
          <h2>STEP 1</h2>
          <p>Pick a product,from our <br/>  marketplace  of wild goods.</p>

        </div>

        <div  className="step2">
          <img src={step2} alt="step2" />
          <h2>STEP 2</h2>
          <p>Tell us your name and where  <br/> you'd like your items to be sent.</p>
          
        </div>

        <div className="step3">
          <img src={step3} alt="step3" />
          <h2>STEP 3</h2>
          <p>Beautiful and fresh flowers <br/> will bedelivered to your door<br/> for you to enjoy!</p>
          
        </div>

      </div>
     
    </div>
  );
}