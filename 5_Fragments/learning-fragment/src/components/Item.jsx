import FoodItems from "./FoodItems";
import styles from './Item.module.css';

const Item = (props) => {
    let{foodItem} = props;
  return (
    <li className={`${styles.ItemSpan} ItemForColor`}>
    <span className="ItemSpan">{props.foodItem}</span>
    </li>
  );
};

export default Item;


// Passing data via props
// Props in React
// • Short for properties
// • Mechanism for passing data.
// • Read-only by default

// Usage
// • Pass data from parent to child component.
// • Makes components reusable.
// • Defined as attributes in JSX.

// Key Points
// • Data flows one-way (downwards).
// • Props are immutable.
// • Used for communication between components.

// Examples
// <Header title="My App" />