module.exports = function toReadable(number) {
    let num = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
        '100': 'hundred',
    }

    let endLine = '';
    let mas = String(number).split('');
    if (mas.length === 1) {
        for (const key in num) {
            if (num.hasOwnProperty(key)) {
                if (key === mas[0]) {
                    endLine = num[key];
                }

            }
        }
    } else if (mas.length === 2) {


        if (mas[0] === '1') {
            let newLine = mas.join('');
            for (const key in num) {
                if (num.hasOwnProperty(key)) {
                    if (key === newLine) {
                        endLine = num[key];
                    }
                }
            }
        } else {
            let masDouble = [];
            masDouble.push(mas[0] + '0');
            masDouble.push(mas[1]);
            let lineDouble = '';
            for (let i = 0; i < masDouble.length; i++) {
                for (const key in num) {
                    if (num.hasOwnProperty(key)) {
                        if ('0' === masDouble[i]) {
                            break;
                        } else if (key === masDouble[i]) {
                            lineDouble += num[key] + ' ';
                        }
                    }
                }
            }
            endLine = lineDouble.substring(0, lineDouble.length - 1);
        }

    }


    else if (mas.length === 3) {

        let masDouble = [];
        masDouble.push(mas[0]);
        masDouble.push(mas[1]);
        masDouble.push(mas[2]);
        let lineDouble = '';
        for (let i = 0; i < masDouble.length; i++) {
            if (i === 0) {
                for (const key in num) {
                    if (num.hasOwnProperty(key)) {
                        if (key === masDouble[i]) {
                            lineDouble += num[key] + ' hundred ';
                        }
                    }
                }
            }
            else if (masDouble[i] === '1' && i === 1) {
                let tempMas = [];
                tempMas.push(masDouble[1]);
                tempMas.push(masDouble[2]);
                let newLine = tempMas.join('');
                for (const key in num) {
                    if (num.hasOwnProperty(key)) {
                        if (key === newLine) {
                            lineDouble += num[key] + ' ';
                            i++;
                        }
                    }
                }
            } else {
                if (i === 1) {
                    let tempInt = masDouble[i] + '0';
                    for (const key in num) {
                        if (num.hasOwnProperty(key)) {
                            if (key === tempInt) {
                                lineDouble += num[key] + ' ';
                            }
                        }
                    }
                } else {
                    for (const key in num) {
                        if (num.hasOwnProperty(key)) {
                            if ('0' === masDouble[i]) {
                                break;
                            } else if (key === masDouble[i]) {
                                lineDouble += num[key] + ' ';
                            }
                        }
                    }
                }
            }
        }
        endLine = lineDouble.substring(0, lineDouble.length - 1);
    }
return endLine;
}
