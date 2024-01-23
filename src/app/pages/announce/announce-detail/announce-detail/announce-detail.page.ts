import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-announce-detail',
  templateUrl: './announce-detail.page.html',
  styleUrls: ['./announce-detail.page.scss'],
})
export class AnnounceDetailPage implements OnInit {
  title:string
  announce : any;
  state : any;

  constructor( private router: Router,
               private photoViewer: PhotoViewer ) {
    this.state = this.router.getCurrentNavigation().extras.state;

    console.log(' this.state', this.state)
    this.announce =  this.state;
  //  this.title = this.state.title;
  }

  ngOnInit() {
  }


  onViewImage(url: string | undefined): void {
      this.photoViewer.show(url);
  }

}
