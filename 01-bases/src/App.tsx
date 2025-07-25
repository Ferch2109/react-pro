import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";
import CounterHook from "./bases/CounterHook";
import CounterReducerComponent from "./counter-reducer/CounterReducer";
// import CounterReducerComponent from "./bases/CounterReducer";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr/>
      <Counter initValue={15} />
      <CounterBy initValue={5} />
      <CounterEffect initValue={5} />
      <CounterHook initValue={5} />
      <CounterReducerComponent initValue={5} />
    </>
  );
}

export default App;
