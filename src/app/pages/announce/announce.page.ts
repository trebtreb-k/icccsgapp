import { Component, OnInit } from '@angular/core';
import { AnnounceService } from './../../services/api/announce/announce.service';
import { moment } from './../../services/utils/moment/moment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.page.html',
  styleUrls: ['./announce.page.scss'],
})
export class AnnouncePage implements OnInit {

  items: any
  announceList: any

  title: string
  announce : any = {
      announce_id : '',
      title       : '',
      description : '',
      picture     : '',
      start_date  : '',
      end_date    : '',
      read_date   : ''
  }


  constructor(private announceApi: AnnounceService,
              private router: Router ) { }

  ngOnInit() {
  }

  ionViewDidEnter(): void {
    this.getAnnounceList();
  }

  async getAnnounceList(){
    try {
      this.announceList = [];
      const response = await this.announceApi.announcePopupList();
      console.log('response',response)

      if(response.result){
        response.datas.forEach( data => {

          this.announceList.push({
                 announce_id : data.announce_id,
                 title       : data.title,
                 description : data.description,
                 picture     : data.picture1,
                 start_date  : moment(data.start_date).format('DD-MM-YYYY'),
                 end_date    : moment(data.end_date).format('DD-MM-YYYY'),
                 read_date   : data.read_date
              })
        });
        this.items = this.announceList

      }

    } catch (error) {
      console.log(error)
    }

  }



  async viewDoc(item){
    try {

      const response = await this.announceApi.addReadAnnoucementPopup(item.announce_id);

      if(response.result){
          this.getAnnounceList();
          this.router.navigate(['announce/announce-detail'], { state: item })
      }



    } catch (error) {

    }



   // this.router.navigate(') .push(AnnounceDetailPage, {announce: item});
  }



}
