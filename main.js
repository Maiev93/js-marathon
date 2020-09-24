const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
let letterF=0;
let letterS=0;

function getRow(firstRow, secondRow) {
    for (let i=0; i<firstRow.length; i++) {
        if (firstRow.charAt(i) == 'а') {
            letterF++;           
            }
    }
    for (let i=0; i<secondRow.length; i++) {
        if (secondRow.charAt(i) == 'а') {
        letterS++;           
        }
    }
    
    if (letterF > letterS) {
        console.log(firstRow);
    }
    else {
        console.log(secondRow);
    }
}

getRow (firstRow, secondRow);

