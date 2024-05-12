const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>Enter Some Food Names</h3>}</>;
};

export default ErrorMessage;