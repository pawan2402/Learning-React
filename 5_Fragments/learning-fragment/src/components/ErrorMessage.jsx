const ErrorMessage = () => {
  let foodItems = ["Green Vegetables", "Dairy Products", "Salad", "Wheat"];
  return (
    <>{foodItems.length === 0 && <h3>Please Give Some Healty Food Items</h3>}</>
  );
};

export default ErrorMessage;
