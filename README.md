# 04-javascript-retornar-k-parametro-configuravel

:fire: Retornar termo mais recorrente em uma string, com parâmetros configuráveis

Dada um texto qualquer e um lista de termos de pesquisa (sequencia de caracteres), retorne os primeiros K termos mais recorrentes na string, onde K é um parâmetro configurável.

Exemplo:

String: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

Lista de termos: ["a", "em", "i", "el"]

K: 2

Resultado: ["i", "a"]

Explicação:

Ocorrências de cada termo,"i": 11, "a": 7, "em": 2, "el": 1, com K = 2, retornamos "i" e "a" ordenados conforme a quantidade de ocorrências de cada termo.

Obs: Quando houver termos com quantidades iguais, priorizar o retorno de acordo com a ordem de ocorrência do termo na string.

You Solution:
function calculaTopOcorrenciasDeQueries(texto, letras, quantidadeDeLetrasSolicitadas) {
const quantidadesPorLetras = [];

Teste unitário:
let assert = require("chai").assert;
describe('Calcula Top Ocorrencias De Queries', function() {
it('Testa Lorem Ipsum', function() {
assert.deepEqual(calculaTopOcorrenciasDeQueries("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",["a","em","i","el"],2), ["i","a"]);
});
});
