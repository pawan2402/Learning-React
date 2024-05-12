import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeydown }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Input Custom Food Item"
      onKeyDown={handleKeydown}
      id="newFoodByUser"
    />
  );
};

export default FoodInput;
