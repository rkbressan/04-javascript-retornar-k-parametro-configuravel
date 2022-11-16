//"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
function calculaTopOcorrenciasDeQueries(
  texto,
  queries,
  quantidadeDeLetrasSolicitadas
) {
  const quantidadesPorLetras = [];

  //Contar acumulado de letras e posição das letras
  for (let iterator of queries) {
    let indice = texto.indexOf(iterator);
    let quantidade = (texto.match(new RegExp(iterator, "g")) || []).length;
    if (indice != -1) {
      quantidadesPorLetras.push({
        letter: iterator,
        position: texto.indexOf(iterator),
        quantity: quantidade,
      });
    }
  }

  const sortedList = pegarListaOrdenadaAsc(quantidadesPorLetras);
  const resultado = [];
  for (let index = 0; index < quantidadeDeLetrasSolicitadas; index++) {
    resultado.push(sortedList[index].letter);
  }

  return resultado;
}

function pegarListaOrdenadaAsc(lista) {
  return lista.sort((a, b) => {
    if (b.quantity == a.quantity) {
      if (a.position > b.position) {
        return 1;
      } else {
        return -1;
      }
    }
    if (a.quantity < b.quantity) {
      return 1;
    }
    if (a.quantity > b.quantity) {
      return -1;
    }
    return 0;
  });
}
//Retorne os primeiros K termos mais recorrentes na string
//K é a quantidade de letras esperada, é um parâmetro configurável
//Quando houver termos com quantidades iguais, priorizar o retorno de acordo com a ordem de ocorrência
