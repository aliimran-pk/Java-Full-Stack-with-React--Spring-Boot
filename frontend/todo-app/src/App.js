import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';

function App() {
  return (
    <div  className="App">
        <TodoApp/>
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
