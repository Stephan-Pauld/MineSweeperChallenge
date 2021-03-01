import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import { useSelector, useDispatch } from 'react-redux';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, score, time, tiles) {
  return { name, score, time, tiles };
}

const leaderTable = [
  
];

// const populateLeaderBoard = (leaderBoard) => {
//   leaderBoard.map((player) => {
//     // const time = player.minutes: player.seconds > 9? player.seconds:`0${player.seconds}`
//     leaderTable.push(createData(player.name, player.score, player.seconds, player.safeSpaces),)
//   })
//   return leaderTable;
// }






const useStyles = makeStyles({
  table: {
    margin: 'auto',
    width: 1100,
  },
  paper: {
    margin: 'auto',
    width: 'fit-content'
  }
});




export default function LeaderBoard() {

  const leaderBoard = useSelector(state => state.leaderBoard)
  const classes = useStyles();




console.log(leaderBoard);

  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Score</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">Tiles Remaining</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderBoard.map((player) => (
            <StyledTableRow key={player.name}>
              <StyledTableCell component="th" scope="player">
                {player.name}
              </StyledTableCell>
              <StyledTableCell align="right">{player.score}</StyledTableCell>
              <StyledTableCell align="right">{player.minutes}:{player.seconds > 9? player.seconds:`0${player.seconds}`}</StyledTableCell>
              <StyledTableCell align="right">{player.safeSpaces}</StyledTableCell>
            </StyledTableRow>
          ))}


        </TableBody>
      </Table>
    </TableContainer>
  );
}