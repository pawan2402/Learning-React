import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeydown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healty Foods</h1>
        <FoodInput handleKeydown={onKeydown} />
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>Above is the list of food that are good for health...</p>
      </Container>
    </>
  );
}

export default App;

// 1. What Fragment?
// Allows grouping of multiple elements without
// extra DOM nodes.

// 2. Why Fragment?
// • Return multiple elements without a wrapping
// parent.
// • Cleaner DOM and consistent styling.

// 3. How Fragment? Two syntaxes:
// 1. <React.Fragment>...</React.Fragment>
// 2. Short: <>...</>

// map function
// 1. Purpose: Render lists from array data.

// 2. JSX Elements: Transform array items into JSX.

// 3. Inline Rendering: Directly inside JSX
// {items.map(item => <li key={item.id}>{item.name}</li>)}

// 4. Key Prop: Assign unique key for optimized re-renders.
// <div key={item.id}>{item.name}</div>

// Conditional Rendering
// Conditional Rendering
// • Displaying content based on certain conditions.
// • Allows for dynamic user interfaces.

// Methods
// • If-else statements: Choose between two blocks
// of content.
// • Ternary operators: Quick way to choose
// between two options.
// • Logical operators: Useful for rendering content
// when a condition is true.

// Benefits
// • Enhances user experience.
// • Reduces unnecessary rendering.
// • Makes apps more interactive and responsive.
