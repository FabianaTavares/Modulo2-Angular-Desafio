import { Component, OnInit } from '@angular/core';
import packageInfo from '../../../package.json';
import { SenadoresService } from '../senadores.service';
import { senadoresDto } from '../senadoresDto';

@Component({
  selector: 'app-lista-senadores',
  templateUrl: './lista-senadores.component.html',
  styleUrls: ['./lista-senadores.component.scss']
})
export class ListaSenadoresComponent implements OnInit {
  version: string = packageInfo.version;

  senadoresDto: senadoresDto[] = [];

  constructor(
    private senadoresService: SenadoresService,
  ) { }

  ngOnInit(): void {
    this.buscaSenadores();
  }

  buscaSenadores() {
    this.senadoresService.getListaSenadores().subscribe(
      retorno => {
        this.senadoresDto = retorno;
        console.log(this.senadoresDto);
      }
    );

  }


}
