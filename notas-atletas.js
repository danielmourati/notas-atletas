function desempenhoDoAtleta(atletas){
    
  for(let i = 0; i < atletas.length; i++){
    let notasValidas = atletas[i].notas.sort((a,b)=>b-a).slice(1,4);
    let mediaNotas = notasValidas.reduce((total,atual)=>total+atual,0) / notasValidas.length
    console.log(`
    Atleta: ${atletas[i].nome}
    Notas Obtidas: ${atletas[i].notas}
    Média válida: ${mediaNotas}
    `);
  }  
    
}

const atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
      },
      {
        nome: "Fernando Puntel",
        notas:  [8, 10, 10, 7, 9.33]
      },
      {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
      },
      {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
      }
];
desempenhoDoAtleta(atletas);