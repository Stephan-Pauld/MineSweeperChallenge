import './App.css';
import React, { useEffect } from 'react';
import Field from './components/Field';
import TopBar from './components/TopBar';
import Winner from './components/Winner';
import LeaderBoard from './components/LeaderBoard';

import { useSelector, useDispatch } from 'react-redux';
import { cleanField, clearTimer, setLeaderBoard } from './actions';

import axios from 'axios';

const style = {
  lbTitle: {
    display: 'flex',
    justifyContent: 'center'
  }
}

function App() {
  const field = useSelector(state => state.manageField);
  const toggleTimer = useSelector(state => state.toggleTimer)
  const leaderBoard = useSelector(state => state.leaderBoard)
  const dispatch = useDispatch();


  useEffect(() => {

    axios.get('http://localhost:3001/users')
      .then((res) => {
        const leaderBoardStats = res.data;
        dispatch(setLeaderBoard(leaderBoardStats))
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const newGame = () => {
    dispatch(cleanField())
    dispatch(clearTimer())

  }

  return (
    <>
      <div className="App">
        <Winner />
        <h1>Stephan Sweeper</h1>
        <TopBar />
        <Field />
      </div>
      <div style={style.lbTitle}>
        <h1>LEADER BOARDS</h1>
      </div>
      <div>
        <LeaderBoard/>
      </div>
    </>
  );
}

export default App;
