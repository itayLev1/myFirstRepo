const rows = 5;

for (let i = 1; rows >= i; i++) {
    let row = '';
    for (let k = 1; k <= (rows - i); k++) {
        row = row + ' ';
    }
    for (let j = 1; j <= i * 2; j++) {
        row = row + '*';
    }


    console.log(row);
}