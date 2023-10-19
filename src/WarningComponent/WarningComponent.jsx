import "./WarningComponent.css";

const WarningComponent = ({ message }) => {
  return (
    <div className="warning">{message}</div>
  )
}

export default WarningComponent;