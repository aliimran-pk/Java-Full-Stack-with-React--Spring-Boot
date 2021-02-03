import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div  className="App">
        <Counter/>
        <Counter by={5} />
        <Counter by={10} />
       { /* <ChildApp /> */}
    </div>
  );
}

export function ChildApp()
{
  return ( <h1>
          2nd component
    </h1>
  );

}
export default App;
