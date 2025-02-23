import { Usuarios } from "./usuarios";
import { Produtos } from "./produtos";

export class Compras {
    id: number;
    usuario: Usuarios;
    produto: Produtos;
    quantidadeItens: number;
    dataCompra: Date;
    valorDaCompra: number;
    descontosNaCompra: number;
  
    constructor(
      id: number,
      usuario: Usuarios,
      produto: Produtos,
      quantidadeItens: number,
      dataCompra: Date,
      valorDaCompra: number,
      descontosNaCompra: number
    ) {
      this.id = id;
      this.usuario = usuario;
      this.produto = produto;
      this.quantidadeItens = quantidadeItens;
      this.dataCompra = dataCompra;
      this.valorDaCompra=valorDaCompra;
      this.descontosNaCompra=descontosNaCompra;
  
      }
}
