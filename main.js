window.onload = () => {
    const input = document.getElementById("input");
    const encrypt = document.getElementById("encrypt");
    const alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
    const keyWord = ['Я', 'Б', 'Л', 'О', 'К', 'О'];
    encrypt.addEventListener('click', () => {
        let textBeforeEnc = input.value.toUpperCase().split('');
        let vizhenerSquare = [];
        let i = 0;

        textBeforeEnc.forEach((value, index) => {
            if (i < keyWord.length && value != ' ') {
                let indexOfKeyword = alphabet.indexOf(keyWord[i]);//1. находим индекс буквы ключевого слова из алфавита
                let secondSymbols = alphabet.slice(0, indexOfKeyword);//2. вырезаем элементы из алфавита с начала и до буквы ключевого слова
                let firstSymbols = alphabet.slice(indexOfKeyword, alphabet.length);//3. вырезаем элементы из алфавита после буквы ключевого слова

                vizhenerSquare = firstSymbols.concat(secondSymbols);//4. лепим новый алфавит и получаем


                let indexOfText = alphabet.indexOf(value);//5. находим индекс буквы незашифрованного слова в исходном алфавите
                let replacingLetter = vizhenerSquare[indexOfText + 1];//6. находим соответственный элемент из смещенного алфавита

                vizhenerSquare = [];//7. очищаем массив с использованным смещенным алфавитом

                let outputArr = [];
                outputArr.push(replacingLetter);
                let encryptedText = outputArr.join('');
                console.log(outputArr);
                i++;
            } else {
                vizhenerSquare.slice(0, vizhenerSquare.length);//очистили массив
                i = 0;
            }
        })
    })
}