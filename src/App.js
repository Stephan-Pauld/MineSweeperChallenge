import './App.css';
import Field from './components/Field';
import TopBar from './components/TopBar'
import Winner from './components/Winner'

import { useSelector, useDispatch } from 'react-redux';
import { cleanField, clearTimer } from './actions';

import Button from '@material-ui/core/Button';



const style = {
  controlButton: {
    margin: '0 0 5px 0',
    background: 'linear-gradient(to bottom right, #ffff00 0%, #666699 90%)'
  }
}


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
      <h1>Xerris Sweeper</h1>
      <div >
        {
          field.gameOver ?
            <Button
              style={style.controlButton}
              variant="contained"
              color="none"
              onClick={() => newGame()}
              
            >
              Restart
        </Button>
            :
            ''
        }


      </div>
      <TopBar />
      <Field />
    </div>
  );
}

export default App;
