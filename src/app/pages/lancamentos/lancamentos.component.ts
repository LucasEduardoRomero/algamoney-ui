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
      descricao: 'Lançamento Teste',
      pagamento: new Date(),
      vencimento: new Date(),
      valor: 1550.23
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
