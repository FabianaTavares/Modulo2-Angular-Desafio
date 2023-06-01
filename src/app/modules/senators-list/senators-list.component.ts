import { Component, OnInit } from '@angular/core';
import { senadoresDto } from 'src/app/shared/model/senators';
import packageInfo from '../../../../package.json';
import { SenadoresService } from '../../shared/services/senators.service';

@Component({
  selector: 'app-senators-list',
  templateUrl: './senators-list.component.html',
  styleUrls: ['./senators-list.component.scss']
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
      }
    );

  }


}
