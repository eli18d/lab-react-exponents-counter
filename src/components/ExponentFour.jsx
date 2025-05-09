const ExponentFour = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{props.counter}⁴</p>
    <p className="exponent-result"> {props.counter} * {props.counter} * {props.counter} * {props.counter} = { props.counter * props.counter * props.counter * props.counter} <span className="total">16</span></p>
  </div>
);

export default ExponentFour;