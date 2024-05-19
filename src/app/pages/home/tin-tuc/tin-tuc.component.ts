import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.css']
})
export class TinTucComponent implements OnInit {

  constructor(private _newsService: UserService) { }

  listNew: any[] = [];

  ngOnInit() {
    this.getDataNews();
  }

  async getDataNews(){
    await this._newsService.getNews().then((item) => {
      if(item.result.responseCode == '00'){
        this.listNew = item.data;
        console.log(this.listNew);
      }
    })
  }


}
