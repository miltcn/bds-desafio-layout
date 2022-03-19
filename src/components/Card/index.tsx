import { Link } from "react-router-dom";
import CarCard from "../../assets/images/car-card.png";
import "./styles.css";

function Card() {
  return (
    <div className="card-container">
      <div id="car-card">
        <img src={CarCard} alt="Carro vermelho" />
      </div>
      <h1>Audi Supra TT</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        nisi
      </p>
      <Link to="/">COMPRAR</Link>
    </div>
  );
}

export default Card;
