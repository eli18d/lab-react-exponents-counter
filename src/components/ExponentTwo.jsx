
const ExponentTwo = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{props.counter}²</p>
    <p className="exponent-result"> {props.counter} * {props.counter}= {props.counter * props.counter} <span className="total">4</span></p>
  </div>
);

export default ExponentTwo;