import propTypes from "prop-types";
const Button = (props) => {
  return (
    <div>
        <button className="text-lg font-semibold p-2 bg-medium w-full shadow-lg rounded">{props.text}</button>
    </div>
  )
}
Button.propTypes = {
    text: propTypes.string
}

export default Button