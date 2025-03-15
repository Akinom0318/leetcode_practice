

class Spreadsheet{
    constructor(number){
        this.grid = new Array(number).fill().map(() => new Array(26).fill(0));
    }

    alpheToAscii(chr){
        return chr.charCodeAt(0) - 65 < 0 ? parseInt(chr) : chr.charCodeAt(0) - 65;
    }

    setCell(cell, value){
        let _col = cell[0];
        let _row = parseInt(cell.slice(1));

        let col = this.alpheToAscii(_col);
        let row = parseInt(_row) - 1;

        this.grid[row][col] = value;


        return null;
    }

    getCell(form){
        let _col = form[0];
        let _row = parseInt(form.slice(1));

        let col = this.alpheToAscii(_col);
        let row = parseInt(_row) - 1;


        if(row >= this.grid.length){
            return 0;
        }

        return this.grid[row][col];
    }

    getValue(formula){
        let vals = (formula.split('='))[1].split('+');
        let val_1 = vals[0];
        let val_2 = vals[1];
        if(!parseInt(vals[0]) && vals[0] !== '0'){
            val_1 = this.getCell(val_1);
        }

        if(!parseInt(vals[1]) && vals[1] !== '0'){
            val_2 = this.getCell(val_2);
        }


        return parseInt(val_1) + parseInt(val_2);
    }

    resetCell(cell){
        this.setCell(cell,0);
        return null;
    }
}



let test = new Spreadsheet(1000);
test.setCell("A1000", 10000);
test.setCell("B2", 15);
console.log(test.getCell("A1000"));
console.log(test.getValue("=A1000+0"));