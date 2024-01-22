import './App.css';
import Header from './components/Header/Header';
import Timer from './components/Timer/Timer';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';


function App() {
  return (
    <DarkModeProvider>
      <Header/>
      <div className='content__wrap'>
        <Timer />
        <TodoList />
      </div>
    </DarkModeProvider>
  );
}

export default App;
