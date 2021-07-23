const Button = ({children}) => {
    return (
        <button 
        className="styleBtn"
        ><span>{children}</span></button>
    ); 
};

export default Button;