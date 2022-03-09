import "./styles.css";

function Buscar() {
  return (
    <div className="buscar-container">
      <input type="text" value="Digite sua busca" readOnly />
      <button type="submit">Buscar</button>
    </div>
  );
}

export default Buscar;
