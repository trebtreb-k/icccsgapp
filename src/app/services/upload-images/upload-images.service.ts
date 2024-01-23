import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';

import { Injectable } from '@angular/core';
import { ST_ROOT } from './../api/api.root';

@Injectable({
  providedIn: 'root'
})
export class UploadImagesService {

  constructor( private transfer: FileTransfer ) { }

  uploadImage(desc) {

    let url = ST_ROOT.authen+'/salestools/authen/upload';

    var targetPath = desc.image;

    var options: FileUploadOptions = {
      fileKey: 'image',
      chunkedMode: false,
      mimeType: 'multipart/form-data',
      params: {
        image: desc.image,
        empid: desc.empid
      }
    };

    const fileTransfer: FileTransferObject = this.transfer.create();
    return fileTransfer.upload(targetPath, url, options)
  }

}
