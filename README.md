# Desempenho do Atleta

Este projeto contém uma função JavaScript que calcula a média das notas de desempenho de atletas. A função considera as notas dos atletas, ordena-as em ordem decrescente e calcula a média das três notas mais altas (excluindo a maior e a menor nota).

## Descrição

A função `desempenhoDoAtleta` recebe um array de objetos, onde cada objeto representa um atleta e contém o nome do atleta e suas notas. A função calcula e exibe a média das três notas mais altas de cada atleta.

## Estrutura dos Dados

Os dados dos atletas devem estar estruturados da seguinte forma:

```json
[
  {
    "nome": "Nome do Atleta",
    "notas": [nota1, nota2, nota3, nota4, nota5]
  },
  ...
]