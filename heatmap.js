// VARIABLES
var HEATMAP_COLORS = ["#bbbbeb", "#9292e7", "#5959bf", "#3b3bba"];

// UTIL FUNCTIONS
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// CELL OBJECT
function getCellColor(value) {
  var colorIndex = Math.abs((value / 20) -1);
  return HEATMAP_COLORS[parseInt(colorIndex, 10)];
}

function createCell(row, column, value) {
  return {
    color: getCellColor(value),
    row: row,
    column: column,
    value: value,
    info: `${value} U`
  };
}

function showCellData(cell) {
  return `Cell: { color: ${cell.color}, row: ${cell.row}, column: ${cell.column}, value: ${cell.value}, description: ${cell.info}}`;
}

//HEATMAP MATRIX
function generateHeatmap(nRows, nColummns) {
  var matrix = [];
  for (r = 0; r < nRows; r++) {
    matrix[r] = [];
    for (c = 0; c < nColummns; c++) {
      matrix[r][c] = createCell(r, c, getRndInteger(1, 100));
    }
  }

  return matrix;
}

// LOAD WEB
$(function() {
  var heatmap = generateHeatmap(4, 8);

  heatmap.forEach(row => {
    var htmlRow = '<tr class="heatmap-row">';
    
    row.forEach(cell => {
      htmlRow += `<td class="heatmap-column tooltip" style="background-color: ${cell.color};">
        <span class="tooltiptext">${showCellData(cell)}</span>
        ${cell.info}
        </td>`;
    });

    htmlRow += '</tr>';

    $('#heatmap').append(htmlRow);
  });
});

$(document).ready(function() {

});
