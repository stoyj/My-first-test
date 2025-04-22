import './App.css';
import Button from './components/Button/Button';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  
  return (
    <>
      <Button onClick={handleClick} className="primary">
        Click Me
      </Button>
      <Button disabled className="secondary">
        Disabled
      </Button>
    </>
  );
}

export default App;
