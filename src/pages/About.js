import  './About.css'
import girlflower from '../assets/gilrflower.png'
import Flowersgirl from '../assets/flowersgirl.avif'
export default function About () {
  return (
    <div className="About">
     <div className='aboutus'>
     <img src={girlflower} alt="girlflower" />
     <h2>Kimberly Gilroy</h2>
     <p>Founder</p>
     </div>


     <div className='aboutuss'>
      <h2>A diverse team <br/> founded  by females</h2>
      <p>Our intenational network of award-winning developers <br/>  writers, desigeners, and photographers allow us to curate <br/>  the best possible team for each project. We're passionate <br/>  about what we do and the relationships we foster</p>
     <img src={Flowersgirl} alt="flowersgirl" />
     </div>
    </div>
  );
}