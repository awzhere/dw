// identifique o erro e corrija o código a baixo

function verificarMaiorIdade(idade) {

    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';

}


//// complete o códigoFaça com que a variável arr tenha uma lista ordenada de de 10 posições de 0 a 9

function orderArray() {

    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    return arr
}

/// Substitua os dados do objeto reatribuído  e delete o campo idade sem alterar a declaração do mesmo
function meusDados() {
    let pessoa = {
        nome: 'jhon doe',
        idade: '30',
        cidade: 'New York'
    }

    pessoa.idade = null;
    return pessoa;
}

// Manipule o Array para que ele traga as informações pedidas no objeto e atribua nas posições do objeto
// ex: ordemAlfabetica: animais.short... 
function manipulaArray() {
    let animais = ['cachorro', 'gato', 'abelha', 'rato', 'leão',  'galinha'];

    return {
        ordemAlfabetica: animais.toSorted(), 
        primeiro: animais.at(0),
        ultimo: animais.at(-1),
        tamanhoDaLista: animais.length
    };

  
}
 