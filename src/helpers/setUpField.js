const setUpField = (r, c, m) => {

  let field = []

  for (let row = 0; row < r; row++) {
    let fieldRow = []
    for (let column = 0; column < c; column++) {
      fieldRow.push({
        value: 0,
        shown: false,
        hasFlag: false,
        row,
        column,
      });
    }
    field.push(fieldRow);
  }
  // console.table(field);
  let mines = m;
  while (mines) {
    const randRow = Math.floor(Math.random() * r)
    const randCol = Math.floor(Math.random() * c)
    // console.log(field[randRow][randCol]);
    if (!field[randRow][randCol].value) {
      field[randRow][randCol].value = '💣'
      mines--;
    }
  }



  for (let row = 0; row < r; row++) {
    for (let column = 0; column < c; column++) {
      // const plusOne = field[row][column].value++;
      if (field[row][column].value !== "💣") {


        //  When I try to ++ I get NaN... WHY?!

        //As long as we are on the second row the top will exist
        if (row > 0 && field[row - 1][column].value === "💣") {
          field[row][column].value ++;
        }

        //As long as we are 1 row down from the top and 1 column in from the right
        //Then topright will EXIST
        if (row > 0 && column < c - 1 && field[row - 1][column + 1].value === "💣") {
          field[row][column].value ++;
        }

        // one column in from the right
        if (column < c - 1 && field[row][column + 1].value === "💣") {
          field[row][column].value ++;
        }
        // one column in from the right and one row up from bottom
        if (row < r - 1 && column < c - 1 && field[row + 1][column +1].value === "💣"){
          field[row][column].value ++;
        }
        // one row above bottom
        if (row < r - 1 && field[row + 1][column].value === "💣"){
          field[row][column].value ++;
        }

        // one row up back one column
        if (row < r - 1 && column > 0 && field[row + 1][column - 1].value === "💣"){
          field[row][column].value ++;
        }
        // one column back
        if ( column > 0 && field[row][column - 1].value === "💣") {
          field[row][column].value ++;
        }

        // one colum back 1 row up
        if (row > 0 && column > 0 && field[row - 1][column - 1].value === "💣"){
          field[row][column].value ++;
        }

      }
    }
  }





  return field
}

export default setUpField;

