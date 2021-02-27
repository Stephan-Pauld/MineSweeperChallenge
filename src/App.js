import './App.css';
import Field from './components/Field'
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const field = useSelector(state => state.manageField);


  const setBoardSize = () => {

  }
  return (
    <div className="App">
      <h1>Xerris Sweeper</h1>
      <h5>{field.safeSpaces}</h5>
      <Field />
    </div>
  );
}

export default App;
