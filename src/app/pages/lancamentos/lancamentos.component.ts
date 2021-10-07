import { Component, OnInit } from '@angular/core'; 
import { LancamentoModel } from './lancamento.model';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent implements OnInit {

  elements: LancamentoModel[] = [
    {
      pessoa: 'Lucas',
      descricao: 'Teclado Lindinho',
      pagamento: new Date(),
      vencimento: new Date(),
      valor: 1550.23
    },
    {
      pessoa: 'Luiz',
      descricao: 'Coca-Cola',
      pagamento: new Date(),
      vencimento: new Date(),
      valor: 10
    },
    {
      pessoa: 'Felp',
      descricao: 'Pizza',
      pagamento: new Date(),
      vencimento: new Date(),
      valor: 39.90
    },
    {
      pessoa: 'Jose',
      descricao: 'Lançamento UM',
      pagamento: new Date(),
      vencimento: new Date(),
      valor: 870
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
