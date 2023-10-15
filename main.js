window.onload = () => {
    const input = document.getElementById("input");
    const encrypt = document.getElementById("encrypt");
    const decipher = document.getElementById("decipher");
    decipher.style.display = "none";
    const alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
    const keyWord = ['Я', 'Б', 'Л', 'О', 'К', 'О'];
    const inputData = document.getElementById('inputData');
    const encryptedOutput = document.getElementById('encryptedOutput');
    const decipheredOutput = document.getElementById('decipheredOutput');

    let encryptedText;
    let outputArr = [];
    encrypt.addEventListener('click', () => {
        let textBeforeEnc = input.value.toUpperCase().split('');
        inputData.innerHTML = input.value.toUpperCase();
        encrypt.style.display = 'none';
        let vizhenerSquare = [];
        let i = 0;
        console.log(textBeforeEnc);
        textBeforeEnc.forEach((value) => {
            if (i < keyWord.length) {
                if (value != ' ') {
                    let indexOfKeyword = alphabet.indexOf(keyWord[i]);//1. находим индекс буквы ключевого слова из алфавита
                    let secondSymbols = alphabet.slice(0, indexOfKeyword);//2. вырезаем элементы из алфавита с начала и до буквы ключевого слова
                    let firstSymbols = alphabet.slice(indexOfKeyword, alphabet.length);//3. вырезаем элементы из алфавита после буквы ключевого слова

                    vizhenerSquare = firstSymbols.concat(secondSymbols);//4. лепим новый алфавит и получаем

                    let indexOfText = alphabet.indexOf(value) + 1;//5. находим индекс буквы незашифрованного слова в исходном алфавите
                    let replacingLetter = vizhenerSquare[indexOfText - 1];//6. находим соответственный элемент из смещенного алфавита

                    vizhenerSquare = [];//7. очищаем массив с использованным смещенным алфавитом

                    outputArr.push(replacingLetter);
                    i++;
                } else {//добавляем пробел в масcив
                    outputArr.push(' ');
                }
            } else {
                vizhenerSquare.slice(0, vizhenerSquare.length);//очистили массив
                i = 0;
                if (value != ' ') {
                    let indexOfKeyword = alphabet.indexOf(keyWord[i]);//1. находим индекс буквы ключевого слова из алфавита
                    let secondSymbols = alphabet.slice(0, indexOfKeyword);//2. вырезаем элементы из алфавита с начала и до буквы ключевого слова
                    let firstSymbols = alphabet.slice(indexOfKeyword, alphabet.length);//3. вырезаем элементы из алфавита после буквы ключевого слова

                    vizhenerSquare = firstSymbols.concat(secondSymbols);//4. лепим новый алфавит и получаем

                    let indexOfText = alphabet.indexOf(value) + 1;//5. находим индекс буквы незашифрованного слова в исходном алфавите
                    let replacingLetter = vizhenerSquare[indexOfText - 1];//6. находим соответственный элемент из смещенного алфавита

                    vizhenerSquare = [];//7. очищаем массив с использованным смещенным алфавитом

                    outputArr.push(replacingLetter);
                    i++;
                } else {//добавляем пробел в масcив
                    outputArr.push(' ');
                }
            }
        });
        encryptedText = outputArr.join('');
        encryptedOutput.innerHTML = encryptedText;
        decipher.style.display = "block";
    })
    let decipherArr = [];
    let outputData;
    let deciperedText;
    decipher.addEventListener('click', () => {
        let vizhenerSquare = [];
        decipher.style.display = "none";
        let i = 0;
        outputArr.forEach((value) => {
            if (i < keyWord.length) {
                if (value != ' ') {
                    let indexOfKeyword = alphabet.indexOf(keyWord[i]);//1. находим индекс буквы ключевого слова из алфавита
                    let secondSymbols = alphabet.slice(0, indexOfKeyword);//2. вырезаем элементы из алфавита с начала и до буквы ключевого слова
                    let firstSymbols = alphabet.slice(indexOfKeyword, alphabet.length);//3. вырезаем элементы из алфавита после буквы ключевого слова

                    vizhenerSquare = firstSymbols.concat(secondSymbols);//4. лепим новый алфавит и получаем

                    let indexOfText = vizhenerSquare.indexOf(value) + 1;//5. находим индекс буквы незашифрованного слова в исходном алфавите
                    let replacingLetter = alphabet[indexOfText - 1];//6. находим соответственный элемент из смещенного алфавита

                    vizhenerSquare = [];//7. очищаем массив с использованным смещенным алфавитом

                    decipherArr.push(replacingLetter);
                    i++;
                } else {//добавляем пробел в масcив
                    decipherArr.push(' ');
                }
            } else {
                vizhenerSquare.slice(0, vizhenerSquare.length);//очистили массив
                i = 0;
                if (value != ' ') {
                    let indexOfKeyword = alphabet.indexOf(keyWord[i]);//1. находим индекс буквы ключевого слова из алфавита
                    let secondSymbols = alphabet.slice(0, indexOfKeyword);//2. вырезаем элементы из алфавита с начала и до буквы ключевого слова
                    let firstSymbols = alphabet.slice(indexOfKeyword, alphabet.length);//3. вырезаем элементы из алфавита после буквы ключевого слова

                    vizhenerSquare = firstSymbols.concat(secondSymbols);//4. лепим новый алфавит и получаем

                    let indexOfText = vizhenerSquare.indexOf(value) + 1;//5. находим индекс буквы незашифрованного слова в исходном алфавите
                    let replacingLetter = alphabet[indexOfText - 1];//6. находим соответственный элемент из смещенного алфавита

                    vizhenerSquare = [];//7. очищаем массив с использованным смещенным алфавитом

                    decipherArr.push(replacingLetter);
                    i++;
                } else {//добавляем пробел в масcив
                    decipherArr.push(' ');
                }
            }
        });

        deciperedText = decipherArr.join('');
        decipheredOutput.innerHTML = deciperedText;

    });
}
