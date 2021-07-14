import './App.css';
import Home from './pages/home';

function App() {
  console.log(process.env.REACT_APP_NOT_SECRET_CODE);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
