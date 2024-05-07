import Myfunc from "./impoExpo";
import ForDynamic from "./TestDynamic";
import ReuseableItem from "./ReusableCompo";
import InlineStyling from "./StylingInline";

function App() {
  return <div>
      <h1>Hello World</h1>
      <Myfunc />
      <ForDynamic />
      <ReuseableItem />
      <ReuseableItem />
      <ReuseableItem />
      <InlineStyling />
    </div>
}

export default App;
