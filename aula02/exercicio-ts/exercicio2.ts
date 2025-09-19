// Criando o array com tipo explícito
let cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Salvador'];

// Função com tipo de parâmetro definido
function listarCidades(arrayDeCidades: string[]): void {
  arrayDeCidades.forEach((cidade, index) => {
    console.log(`${index + 1}. ${cidade}`);
  });
}

// Chamando a função
listarCidades(cidades);
