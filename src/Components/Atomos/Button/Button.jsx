import "../Button/Button.css";
// eslint-disable-next-line react/prop-types
const Button = ({ name }) => {
    return <button className="col-btn">{name}</button>;
};

export default Button;
