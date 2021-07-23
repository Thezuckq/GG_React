const inputComp = (props) => {
  return(
    <input
      value={props.value}
      onChange={props.onChange}
      type={props.type}
      name={props.name} 
      placeholder={props.placeholder}/>
  );
};

export default inputComp;