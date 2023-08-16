const Decrement = (props) => {
    return (
      <button
        onClick={props.counter > 0 ? () => {
          props.setCounter(props.counter - 1);
        } : (!props.setCounter(props.counter - 1))}
      >
        -
      </button>
    );
  };
  
  export default Decrement;