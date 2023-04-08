import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css']
})
export class CancelarComponent implements OnInit {

  curp: string = '';
  public curpNC: string = '';

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    
    this.dataService.curpCCEvent$.subscribe(curpServ => {
      this.curp = curpServ;
      console.log(' CURP Register: ', curpServ);
    });
  }


}