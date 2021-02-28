import './App.css';
import Field from './components/Field';
import { useSelector, useDispatch } from 'react-redux';
import { cleanField } from './actions';
import TopBar from './components/TopBar'

function App() {
  const field = useSelector(state => state.manageField);
  const toggleTimer = useSelector(state => state.toggleTimer)
  const dispatch = useDispatch();

  return (
    <div className="App">

      <h1>Xerris Sweeper</h1>
      <TopBar/>
      {
        field.gameOver ?
          <button onClick={() => dispatch(cleanField())}>Restart</button> : ''
      }
      <Field />
    </div>
  );
}

export default App;
