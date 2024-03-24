import PropTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <div className="py-2 px-5 bg-green-500 hover:bg-gray-300 transition-all inline-block rounded-md hover:cursor-pointer">
      {children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};
export default Button;
