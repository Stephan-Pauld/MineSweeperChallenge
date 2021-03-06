
export default function showEmpties(field, spaces, row, column, empties) {


  let shown = [];
  shown.push(field[row][column])


  while (shown.length !== 0) {
    let tile = shown.pop()


    // if whatever we popped off is not revealed and does not have a flag
    // then we show the tile and remove a space count
    if (!tile.show && !tile.hasFlag) {
      spaces--;
      tile.show = true
    }

    // if we dont select a 0 there is no point to continue
    // we only want to look at 0 values!
    if (tile.value !== 0) {
      break;
    }


    //  This looks like a mess... clean this up!!
    // here we check to see if a space touching the cell we
    // are looking at has the value of 0.. if it is a 0 we push 
    // the cell to an array so when the loop comes back around we can
    // look at that cell to see if it has an 0's touching it.
    // we also remove a single "safe space" count from each "0" value

    // however the "else if" checks if that value is not "0"
    // and if it is not we reveal that tile because it means it has 
    // to be the boder around the empty tiles.
    // we also remove a "safe space" count for each bordered tile.

    // top left
    if (tile.row > 0 && tile.column > 0 && field[tile.row - 1][tile.column - 1].value === 0 && !field[tile.row - 1][tile.column - 1].show) {
      shown.push(field[tile.row - 1][tile.column - 1]);

    } else if (tile.row > 0 && tile.column > 0 && field[tile.row - 1][tile.column - 1] && !field[tile.row - 1][tile.column - 1].show && !field[tile.row - 1][tile.column - 1].hasFlag) {
      spaces--;
      field[tile.row - 1][tile.column - 1].show = true;
    }


    // top
    if (tile.row > 0 && field[tile.row - 1][tile.column].value === 0 && !field[tile.row - 1][tile.column].show) {
      shown.push(field[tile.row - 1][tile.column])

    } else if (tile.row > 0 && field[tile.row - 1][tile.column] && !field[tile.row - 1][tile.column].show && !field[tile.row - 1][tile.column].hasFlag) {
      spaces--;
      field[tile.row - 1][tile.column].show = true
    }



    // topRight
    if (tile.row > 0 && tile.column < field[1].length - 1 && field[tile.row - 1][tile.column + 1].value === 0 && !field[tile.row - 1][tile.column + 1].show) {

      shown.push(field[tile.row - 1][tile.column + 1])

    } else if (tile.row > 0 && tile.column < field[1].length - 1 && field[tile.row - 1][tile.column + 1] && !field[tile.row - 1][tile.column + 1].show && !field[tile.row - 1][tile.column + 1].hasFlag) {

      spaces--;
      field[tile.row - 1][tile.column + 1].show = true
    }

    
    // right
    if (tile.column < field[1].length - 1 && field[tile.row][tile.column + 1].value === 0 && !field[tile.row][tile.column + 1].show) {
      shown.push(field[tile.row][tile.column + 1])
    } else if (tile.column < field[1].length - 1 && field[tile.row][tile.column + 1] && !field[tile.row][tile.column + 1].show && !field[tile.row][tile.column + 1].hasFlag) {
      spaces--;
      field[tile.row][tile.column + 1].show = true
    }


    // botRight
    if (tile.row < field.length - 1 && tile.column < field[1].length - 1 && field[tile.row + 1][tile.column + 1].value === 0 && !field[tile.row + 1][tile.column + 1].show) {

      shown.push(field[tile.row + 1][tile.column + 1]);

    } else if (tile.row < field.length - 1 && tile.column < field[1].length - 1 && field[tile.row + 1][tile.column + 1] && !field[tile.row + 1][tile.column + 1].show && !field[tile.row + 1][tile.column + 1].hasFlag) {
      spaces--;

      field[tile.row + 1][tile.column + 1].show = true
    }


    // bottom
    if (tile.row < field.length - 1 && field[tile.row + 1][tile.column].value === 0 && !field[tile.row + 1][tile.column].show) {
      shown.push(field[tile.row + 1][tile.column])
    } else if (tile.row < field.length - 1 && field[tile.row + 1][tile.column] && !field[tile.row + 1][tile.column].show && !field[tile.row + 1][tile.column].hasFlag) {
      spaces--;
      field[tile.row + 1][tile.column].show = true;
    }



    // bottom left
    if (tile.row < field.length - 1 && tile.column > 0 && field[tile.row + 1][tile.column - 1].value === 0 && !field[tile.row + 1][tile.column - 1].show) {
      shown.push(field[tile.row + 1][tile.column - 1])
    } else if (tile.row < field.length - 1 && tile.column && field[tile.row + 1][tile.column - 1] && !field[tile.row + 1][tile.column - 1].show && !field[tile.row + 1][tile.column - 1].hasFlag) {
      spaces--;
      field[tile.row + 1][tile.column - 1].show = true;
    }


    // left
    if (tile.column > 0 && field[tile.row][tile.column - 1].value === 0 && !field[tile.row][tile.column - 1].show) {
      shown.push(field[tile.row][tile.column - 1])
    } else if (tile.column > 0 && field[tile.row][tile.column - 1] && !field[tile.row][tile.column - 1].show && !field[tile.row][tile.column - 1].hasFlag) {
      spaces--;
      field[tile.row][tile.column - 1].show = true
    }



  }
  return { field, spaces }
}
