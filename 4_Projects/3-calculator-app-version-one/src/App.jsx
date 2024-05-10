import styles from "./App.module.css";
import Display from "./components/display";
import ButtonContainer from "./components/ButtonsContainer";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonContainer />
    </div>
  );
}

export default App;
