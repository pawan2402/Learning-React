import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = ["Green Vegetables", "Dairy Products", "Salad", "Wheat"]; //Array

   //loop condition for conditional rendering
  if (foodItems.length === 0) {
    return <h3>Please Give Some Healty Food Items</h3>
  }

  let emptyMessage = foodItems.length === 0 ? <h3>Please Give Some Healty Food Items</h3> : null;
  return (
    // fragments are used to avoid empty elements which are just to wrap other elements
    // Fragment <>...</> , <React.Fragment>...</React.Fragment>
    <>
      <h1>Healty Foods</h1>
      {/* using ternary operator */}
      {foodItems.length === 0 ? <h3>Please Give Some Healty Food Items</h3> : null}
      {/* given ternary operator condition in variable and call-out it */}
      {emptyMessage}
      {/* using logical operator for conditional rendering */}
      {foodItems.length === 0 && <h3>Please Give Some Healty Food Items</h3>}
      <ErrorMessage></ErrorMessage>
      <ul className="list-group">
        {/* Map Function */}
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))} 
      </ul>
      <FoodItems></FoodItems>
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