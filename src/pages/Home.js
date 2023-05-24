
import './Home.css';
import homeimg from '../assets/bycyclee.jpg';
import make from '../assets/make.png'
import take from '../assets/take.png'


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
        <div className='wrapper wrap'>
          <h2 className="section-title">Why a BloomsyBox Subscription</h2>
          <div className='three'>
          <div className='make'>
          <img src={make} alt="homeimg"  className='diogana'/>
          <h1>Make it yours</h1>
          <p>Choose your flowers, tell us where you want ‘em delivered, and get ready for a hand-wrapped delivery of the freshest seasonal flowers our Rainforest Alliance certified farms have to offer.</p>
          </div>

          <div className='take'>
          <img src={take} alt="hom"  className='diogana'/>
          <h1>On your own terms</h1>
          <p>Want flowers delivered weekly? Monthly? Twice monthly? It’s all up to you! You can fully customize your subscription plan according to your needs at any time.</p>
          </div>

        
        </div>
        </div>
      </section>

      <section className='dioganal'>
        <div className="wrapper">
          <div className='video'>
          <iframe  src="https://www.youtube.com/embed/n8T3cmb8kJo" autoPlay title="YouTube video player" frameBorder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen=""></iframe>

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


