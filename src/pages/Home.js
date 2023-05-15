
import './Home.css';
import homeimg from '../assets/bycyclee.jpg';

export default function Home() {
  return (
    <div className='sections'>
      <section className='Home'>
        <div className='wrapper'>
          <div className='page-first'>
            <div className='pageone-image'>
              <img src={homeimg} alt='pageoneimg'></img>
            </div>
            <div className='text-first'>
            <h2 className="section-title">Add some sunshine to their day with a cheery summer flower bouquet.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cum, perspiciatis a illo veniam ratione expedita assumenda laboriosam</p>
            </div>
          </div>
        </div>
      </section>

      <section className='diagonal'>
        <div className='wrapper'>
          <h2 className="section-title">Diagonal</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cum, perspiciatis a illo veniam ratione expedita assumenda laboriosam modi error maiores fugit soluta vitae temporibus voluptatum ducimus culpa similique quaerat?</p>
        </div>
      </section>

      <section>
        <div className="wrapper">
          <h2 className="section-title">FLOWER DELIVERY TO PUT A SMILE ON THEIR FACE</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cum, perspiciatis a illo veniam ratione expedita assumenda laboriosam modi error maiores fugit soluta vitae temporibus voluptatum ducimus culpa similique quaerat?</p>
        </div>
      </section>

      <section className="spikes">
        <div className="wrapper">
          <h2 className="section-title">Spikes</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cum, perspiciatis a illo veniam ratione expedita assumenda laboriosam modi error maiores fugit soluta vitae temporibus voluptatum ducimus culpa similique quaerat?</p>
        </div>
      </section>
    </div>
  );
}


