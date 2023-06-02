import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { despesasDto } from 'src/app/shared/model/expenses';
import { dtoCompleto } from '../../shared/model/complete';
import { SenadoresService } from '../../shared/services/senators.service';

@Component({
  selector: 'app-senators-expenses',
  templateUrl: './senators-expenses.component.html',
  styleUrls: ['./senators-expenses.component.scss'],
})
export class DespesaSenadoresComponent implements OnInit {
  id: string;
  nomeSenador: string;
  despesasDto: despesasDto[];
  dtoCompleto: dtoCompleto = {
    id: 0,
    nomeSenador: '',
    despesas: [],
  };
  despesasObjeto = [];

  constructor(
    private senadoresService: SenadoresService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recuperaIdUrl();
    this.buscaDespesas();
  }

  recuperaIdUrl() {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
    });
  }

  buscaDespesas() {
    this.senadoresService.getDespesasSenadores(this.id).subscribe((retorno) => {
      this.dtoCompleto = retorno;
      this.nomeSenador = this.dtoCompleto.nomeSenador;
      this.despesasObjeto = this.recuperaDespesas();
    });
  }

  recuperaDespesas() {
    let despesasObjeto = [];

    this.dtoCompleto.despesas.forEach((element) => {
      let hasElement = despesasObjeto.find((hasElement) => {
        return hasElement.id === element.tipo;
      });
      if (hasElement) {
        hasElement.total = hasElement.total + element.valor;
      } else {
        let descricaoTipo = {};
        switch (element.tipo) {
          case 1:
            descricaoTipo = {
              id: 1,
              descricao: 'Aluguel de imóveis e despesas concernentes a eles',
              total: element.valor,
            };
            break;
          case 2:
            descricaoTipo = {
              id: 2,
              descricao: 'Divulgação da atividade parlamentar',
              total: element.valor,
            };
            break;
          case 3:
            descricaoTipo = {
              id: 3,
              descricao:
                'Aquisição de material de consumo para uso no escritório',
              total: element.valor,
            };
            break;
          case 4:
            descricaoTipo = {
              id: 4,
              descricao: 'Passagens aéreas, aquáticas e terrestres nacionais.',
              total: element.valor,
            };
            break;
          case 5:
            descricaoTipo = {
              id: 5,
              descricao:
                'Contratação de consultorias, assessorias, pesquisas, trabalhos técnicos e outros serviços.',
              total: element.valor,
            };
            break;
          case 6:
            descricaoTipo = {
              id: 6,
              descricao: 'Locomoção, hospedagem, alimentação e combustíveis.',
              total: element.valor,
            };
            break;
          case 7:
            descricaoTipo = {
              id: 7,
              descricao: 'Serviços de Segurança Privada',
              total: element.valor,
            };
            break;
          default:
            break;
        }
        despesasObjeto.push(descricaoTipo);
      }
    });
    return despesasObjeto;
  }
}
