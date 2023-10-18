import "./WarningComponent.css";

const WarningComponent = ({ message }) => {
  return (
    <div className="main-section__warning">{message}</div>
  )
}

export default WarningComponent;