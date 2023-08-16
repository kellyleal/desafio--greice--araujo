class CaixaDaLanchonete {
    constructor() {
      this.menu = {
        cafe: { descricao: 'Café', valor: 3.00 },
        chantily: { descricao: 'Chantily (extra do Café)', valor: 1.50 },
        suco: { descricao: 'Suco Natural', valor: 6.20 },
        sanduiche: { descricao: 'Sanduíche', valor: 6.50 },
        queijo: { descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
        salgado: { descricao: 'Salgado', valor: 7.25 },
        combo1: { descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
        combo2: { descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
      };
      this.formasDePagamento = ['dinheiro', 'debito', 'credito'];
      this.descontosETaxas = {
        dinheiro: -0.05,
        credito: 0.03
      };
      this.itensExtras = {
        chantily: 'cafe',
        queijo: 'sanduiche'
      };
      this.combos = ['combo1', 'combo2'];
    }
  
    calcularValorDaCompra(itens, formaDePagamento) {
      if (!itens || itens.length === 0) {
        return 'Não há itens no carrinho de compra!';
      }
  
      if (!this.formasDePagamento.includes(formaDePagamento)) {
        return 'Forma de pagamento inválida!';
      }
  
      let valorTotal = 0;
      let itensPrincipais = [];
  
      for (let item of itens) {
        if (!item.codigo || !this.menu[item.codigo]) {
          return 'Item inválido!';
        }
  
        if (item.quantidade <= 0) {
          return 'Quantidade inválida!';
        }
  
        if (this.itensExtras[item.codigo]) {
          if (!itensPrincipais.includes(this.itensExtras[item.codigo])) {
            return 'Item extra não pode ser pedido sem o principal';
          }
        } else if (!this.combos.includes(item.codigo)) {
          itensPrincipais.push(item.codigo);
        }
  
        valorTotal += this.menu[item.codigo].valor * item.quantidade;
      }
  
      if (this.descontosETaxas[formaDePagamento]) {
        valorTotal += valorTotal * this.descontosETaxas[formaDePagamento];
      }
  
      return `Valor total da compra: R$ ${valorTotal.toFixed(2)}`;
    }
  }
  