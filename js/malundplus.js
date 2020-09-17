let row = [1,2,3,4,5];
let column = [1,2,3,4,5];
let zweiDArray = [];


column.forEach(eRow => {
    let temp = "";
    row.forEach(eColumn => {
        // console.log(eRow, eColumn);
        temp = temp + eRow.toString()+ "-" + eColumn.toString() + ",";
    })
    zweiDArray.push([temp]);
});

console.log(zweiDArray);


