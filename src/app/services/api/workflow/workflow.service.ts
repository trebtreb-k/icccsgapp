import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { File } from '@ionic-native/file';
import { Injectable } from '@angular/core';
import { ST_ROOT } from './../api.root';
import { StorageService } from './../../storage/storage.service';

interface CreateDocBody {
  groupcode: string | null | undefined;
  absentcode: string | null | undefined;
  startdate: string | null | undefined;
  enddate: string | null | undefined;
  starttime: string | null | undefined;
  endtime: string | null | undefined;
  reason: string | null | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class WorkflowService {
  constructor(private http: HttpClient, private storage: StorageService, private transfer: FileTransfer) {}

  async workflowLists(): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    const url = `${ST_ROOT.workflow}/salestools/leaverequest/lists`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }

  async workflowDocDetail(body: { workflow_id: string; doc_id: string }): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    const url = `${ST_ROOT.workflow}/salestools/leaverequest/lists/detail`;
    console.log(url);
    
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.post(url, body, { headers }).toPromise();
  }

  async workflowTimestat(period: string, empid: string): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    const url = `${ST_ROOT.workflow}/salestools/timestat/yearlyadjust?period=${period}&empid=${empid}`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }

  async workflowCancelDoc(docid: string): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    const url = `${ST_ROOT.workflow}/salestools/leaverequest/canceldoc/${docid}`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.delete(url, { headers }).toPromise();
  }

  async workflowApproverInfo(): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    const url = `${ST_ROOT.workflow}/salestools/leaverequest/approverinfo`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }

  async workflowSearchApprover(level: string, deptId: string): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    

    const url = `${ST_ROOT.workflow}/salestools/leaverequest/searchpeople/${level}/${deptId}`;
    console.log(url);
    console.log(token);
    
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }

  async workflowTypeLeaverequest(): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');

    console.log('ST_ROOT.workflow',ST_ROOT);

    const url = `${ST_ROOT.workflow}/salestools/leaverequest/typeleaverequest`;
    console.log('workflowTypeLeaverequest', url);
    
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }


  async workflowCreateDoc(body: CreateDocBody): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    const url = `${ST_ROOT.workflow}/salestools/leaverequest/createdoc`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.post(url, body, { headers }).toPromise();
  }

  async workflowUpdateApprover(body: any): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    const url = `${ST_ROOT.workflow}/salestools/leaverequest/updateapprover`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.patch(url, body, { headers }).toPromise();
  }

  async workflowUploadAttachFile(file: any, option: any): Promise<any> {
    const fileTransfer: FileTransferObject = this.transfer.create();

    const options: FileUploadOptions = {
      fileKey: 'file',
      fileName: option.fileName,
      httpMethod: 'POST',
      mimeType: 'image/jpeg',
      params: {
        path: option.path,
      },
      chunkedMode: false,
      headers: {},
    };

    const url = `https://webapp7.icc.co.th/api/v1/upload/image`;

    return fileTransfer.upload(file, url, options);

    // const { result, data } = await fileTransfer.upload(file, url, options).then(
    //   (upload) => {
    //     console.log('🚀 ~ file: api.service.ts ~ line 407 ~ ApiService ~ workflowUploadAttachFile ~ upload', upload);
    //     return { result: true, data: JSON.parse(upload.response) };
    //   },
    //   (error) => {
    //     console.log('🚀 ~ file: api.service.ts ~ line 410 ~ ApiService ~ workflowUploadAttachFile ~ error', error);

    //     return { result: false, data: error };
    //   }
    // );

    // return { result, data };
  }


  async monthlyAdjust(period: string): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    const url = `${ST_ROOT.workflow}/salestools/timestat/monthlyadjust?period=${period}`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }

  async yearlyAdjust(period: string): Promise<any> {
    const token =  await this.storage.get('USER_TOKEN');
    const url = `${ST_ROOT.workflow}/salestools/timestat/yearlyadjust?period=${period}`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    console.log(url);
    console.log(headers);


    return this.http.get(url, { headers }).toPromise();
  }


}
