export default function Counter(props) {
  return (
    <div className="counter-card">
      <h3 className="title">{props.title}</h3>
      <div className="counter">
        <button className="btn">−</button>
        <span className="value">0</span>
        <button className="btn">+</button>
      </div>
    </div>
  );
}
