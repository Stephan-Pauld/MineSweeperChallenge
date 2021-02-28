import './App.css';
import Field from './components/Field';
import TopBar from './components/TopBar'
import Winner from './components/Winner'

import { useSelector, useDispatch } from 'react-redux';
import { cleanField, clearTimer } from './actions';



function App() {
  const field = useSelector(state => state.manageField);
  const toggleTimer = useSelector(state => state.toggleTimer)
  const dispatch = useDispatch();

  const newGame = () => {
    dispatch(cleanField())
    dispatch(clearTimer())

  }
  return (
    <div className="App">
      <Winner/>
      <h1>Stephan Sweeper</h1>
      <TopBar />
      <Field />
    </div>
  );
}

export default App;
