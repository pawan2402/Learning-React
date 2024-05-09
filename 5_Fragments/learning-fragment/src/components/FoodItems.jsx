import Item from "./Item";

const FoodItems = () => {
  let foodItems = ["Green Vegetables", "Dairy Products", "Salad", "Wheat"];
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
