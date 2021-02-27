
export default function showEmpties(field, row, column, empties) {



  let shown = [];
  shown.push(field[row][column])


  while (shown.length !== 0) {
    let tile = shown.pop()


    if (!tile.show) {
      tile.show = true
    }

    if (tile.value !== 0) {
      break;
    }

    if (tile.row > 0 && tile.column > 0 && field[tile.row - 1][tile.column - 1].value === 0 && !field[tile.row - 1][tile.column - 1].show) {
      shown.push(field[tile.row - 1][tile.column - 1]);

    } else if (tile.row > 0 && tile.column > 0 && field[tile.row - 1][tile.column - 1]) {
      field[tile.row - 1][tile.column - 1].show = true;
    }

    if (tile.row > 0 && field[tile.row - 1][tile.column].value === 0 && !field[tile.row - 1][tile.column].show) {

      shown.push(field[tile.row - 1][tile.column])

    } else if (tile.row > 0 && field[tile.row - 1][tile.column]) {

      field[tile.row - 1][tile.column].show = true
    }


    if (tile.row > 0 && tile.column < field[1].length - 1 && field[tile.row - 1][tile.column + 1].value === 0 && !field[tile.row - 1][tile.column + 1].show) {

      shown.push(field[tile.row - 1][tile.column + 1])
    } else if (tile.row > 0 && tile.column < field[1].length - 1 && field[tile.row - 1][tile.column + 1]) {
      field[tile.row - 1][tile.column + 1].show = true
    }

    if (tile.column < field[1].length - 1 && field[tile.row][tile.column + 1].value === 0 && !field[tile.row][tile.column + 1].show) {
      shown.push(field[tile.row][tile.column + 1])
    } else if (tile.column < field[1].length - 1 && field[tile.row][tile.column + 1]) {
      field[tile.row][tile.column + 1].show = true
    }

    if (tile.row < field.length - 1 && tile.column < field[1].length - 1 && field[tile.row + 1][tile.column + 1].value === 0 && !field[tile.row + 1][tile.column + 1].show) {

      shown.push(field[tile.row + 1][tile.column + 1]);

    } else if (tile.row < field.length - 1 && tile.column < field[1].length - 1 && field[tile.row + 1][tile.column + 1]) {
      field[tile.row + 1][tile.column + 1].show = true
    }

    if (tile.row < field.length - 1 && field[tile.row + 1][tile.column].value === 0 && !field[tile.row + 1][tile.column].show) {
      shown.push(field[tile.row + 1][tile.column])
    } else if (tile.row < field.length - 1 && field[tile.row + 1][tile.column]) {
      field[tile.row + 1][tile.column].show = true;
    }


    if (tile.row < field.legth - 1 && tile.column > 0 && field[tile.row + 1][tile.column - 1].value === 0 && !field[tile.row + 1][tile.column - 1].show) {
      shown.push(field[tile.row + 1][tile.column - 1])
    } else if (tile.row < field.legth - 1 && tile.column > 0 && field[tile.row + 1][tile.column - 1]) {
      field[tile.row + 1][tile.column - 1].show = true
    }

    if (tile.column > 0 && field[tile.row][tile.column - 1].value === 0 && !field[tile.row][tile.column - 1].show) {
      shown.push(field[tile.row][tile.column - 1])
    } else if (tile.column > 0 && field[tile.row][tile.column - 1]) {
      field[tile.row][tile.column - 1].show = true
    }



  }
  return field
}
