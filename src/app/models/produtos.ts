export class Produtos {
    id: number;
  nome: string;
  descricao: string | null;
  preco: number;
  quantidade: number;

  constructor(
    id: number,
    nome: string,
    descricao: string | null,
    preco: number,
    quantidade: number
  ) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}
