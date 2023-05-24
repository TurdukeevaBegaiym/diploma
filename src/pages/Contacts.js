import "./Contacts.css"

export default function Contacts () {
  return (
    <div className="Contact">
      <h1>Contact</h1>
      <div className="phone">
      <p>Phone:</p>
      <a href="tel:+996708026312">+996708026312</a>
      </div>
    

      <div className="email">
      <p>Email:</p>
      <a href="mailto:turdukeeva@gmail.com">:info@flower.com</a>
      </div>
      <p>Addres: Flower Street, 123, City</p>
      <div className="map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.0763741624382!2d78.39221287553755!3d42.48992892688776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38865ba72a222567%3A0xc3759d1b82f29ca!2z0KbQstC10YLQvtGH0L3Ri9C5INCc0LDQs9Cw0LfQuNC9!5e0!3m2!1sru!2skg!4v1684945351096!5m2!1sru!2skg"
    title="Google map"
    width="600"
    height="450"
    style={{ border: "0" }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
   </div>
      
    </div>
    
  );
}