const Increment = (props) => {
    return (
      <button
        onClick={props.counter <= 10 ? () => {
          props.setCounter(props.counter + 1);
        } : (!props.setCounter(props.counter + 1))}
      >
        +
      </button>
    );
  };
  
  export default Increment;