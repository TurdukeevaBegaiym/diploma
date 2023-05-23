
import './Home.css';
import homeimg from '../assets/bycyclee.jpg';


export default function Home() {
  return (
    <div className='sections'>
      <section className='Home'>
        <div className='wrapper'>
          <div className='page-first'>
            <div className='pageone-image'>
            <img src={homeimg} alt="homeimg" />
            </div>
            <div className='text-first'>
              <h2 className='section-title'>Add some sunshine  to their day with a cheery summer flower bouguet </h2>
              <p>
                lorem ipsum dolor sit amet consectetur adipisicing elit. Cumgue cum, perspiciatis a illo veniam ratione expedita  assumenda laboriosam
              </p>
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

      <section className='dioganal'>
        <div className="wrapper">
          <div className='video'>
          <iframe  src="https://www.youtube.com/embed/n8T3cmb8kJo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen=""></iframe>

          </div>
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


