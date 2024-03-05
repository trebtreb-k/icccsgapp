import { Component, OnInit } from '@angular/core';
import { PdpaService } from "./../../services/api/pdpa/pdpa.service";
import { StorageService } from './../../services/storage/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-pdpa-privacy-notify',
  templateUrl: './pdpa-privacy-notify.page.html',
  styleUrls: ['./pdpa-privacy-notify.page.scss'],
})
export class PdpaPrivacyNotifyPage implements OnInit {

  buttonDisabled : boolean = true;
  showCheckAll : boolean = false;
  isItemCheckedAll : boolean = false;
  enableItemCheckedAll : boolean = true;

  canLeave : boolean = false;  
  items: any
  loading : boolean;
  count:number;
  loaded: boolean;
  datas: any =[]; 
  title : string = ''; 
  type: string ='';
  button_label : string ='';
  check_agree_flag : string ='';

  privacy_notice_url :string = '';
  privacy_notice_title :string = '';

  constructor(private pdpaApi : PdpaService,
              private storage: StorageService,
              private router: Router,
              private iab : InAppBrowser,) { }

  ngOnInit() {
  }


  async ionViewDidEnter() {
    this.loadPrivacyWaitAgree();
  }



  doRefresh(refresher) {
    setTimeout(() => {
        this.loadPrivacyWaitAgree()
        refresher.target.complete();
    }, 2000);
  }


  /***************** pdpa ******************/
  async loadPrivacyWaitAgree() {

    console.log('loadPrivacyWaitAgree');
    try {
      this.datas = []; 
      let response = await this.pdpaApi.privacyWaitAgree();
      if(response.result){
        console.log(response)
        if(response.datas.length > 0){

          this.title = response.topic;
          this.type  = response.type;
          this.button_label = (!response.button_label)?'ยอมรับเงื่อนไข':response.button_label;
          this.check_agree_flag = (!response.check_agree_flag)?'N':response.check_agree_flag;
          this.privacy_notice_url = response.privacy_notice_url;
          this.privacy_notice_title = response.privacy_notice_title;

          let checkedCount = 0;
          this.datas = [];
          let i=0;
          response.datas.forEach((data) => {
         
           // data.show_checkbox_flag ='N';
           // data.consent_flag       ='N';
            i++;

            //if(i==1){
            this.datas.push({
              system_id            : data.system_id,
              sub_system_id        : data.sub_system_id,
              privacy_id           : data.privacy_id,
              version_no           : data.version_no,
              consent_flag         : data.consent_flag,  
              consent_caption      : (data.consent_caption=='') ? 'ยินยอม' : data.consent_caption,
              privacy_content_thai : data.privacy_content_thai,
              privacy_content_eng  : data.privacy_content_eng,
              privacy_title        : data.privacy_title,
              privacy_version_name : data.privacy_version_name,
              version_date         : data.version_date,
              active_flag          : data.active_flag,
              isItemChecked        : (data.consent_flag=='Y')?true:false,   
              show_checkbox_flag   : data.show_checkbox_flag,
              type                 : data.type,
              disagree_message     : data.disagree_message,
            });

            if(data.consent_flag=='Y'){
                checkedCount++;
            }else if(data.show_checkbox_flag=='N'){
               // checkedCount++;
            }

            //}
          
          });

          console.log('checkedCount',checkedCount+' '+this.datas.length)
          this.showCheckAll = (this.datas.length > 1) || (this.datas.length == 1 && this.datas[0].show_checkbox_flag=='N'); 

          if(checkedCount==this.datas.length){
              this.buttonDisabled = false;
              this.isItemCheckedAll = true;                 
          }else{
              this.buttonDisabled = true;
              this.isItemCheckedAll = false;
          }

              
        }
      }

    } catch (error) {

      console.log(error)
     // alert(error);

    }
  }
  /***************** pdpa ******************/



  async agreePrivacyPolicy(){
    const token = await this.storage.get('USER_TOKEN');
    const user  = await this.storage.get('USER_INFO');

    const datas_post = {
      datas   : [],
    }
    this.datas.forEach((data) => {

      if(data.show_checkbox_flag=='Y'){
         data.consent_flag = (data.isItemChecked)?'Y':'N';
      }else{
         data.consent_flag = 'Y'
      }
      datas_post.datas.push({
          user_id      : user.emp_id,
          system_id    : data.system_id,
          sub_system_id: data.sub_system_id,
          privacy_id   : data.privacy_id,
          version_no   : data.version_no,
          consent_flag : data.consent_flag,
      });
    });

    console.log(datas_post)

    try {
      const response = await this.pdpaApi.updateAgreeConsent(datas_post);
      console.log(response)
      if(response.result){    
        
        this.canLeave = true;    
        this.router.navigate(['/home', {replaceUrl:true}]);     
        return true; 
      }else{
        console.log('invalid')
      }

    } catch (error) {
      console.log(error);
    }



  }


  logScrollEnd(event){    
    // console.log("logScrollEnd : When Scroll Ends", event);
    // this.buttonDisabled = false;
  }


  

  checkConsent(e, item){
    console.log('checkConsent',e.target.checked);
  //  console.log(this.datas);
    if(item.type==='CONSENT'){
      item.isItemNotChecked = !e.target.checked;
    }

    let checkedCount = 0;
    let checkedCountAgree = 0;

    this.datas.forEach((data) => {
        
        if(item.type!=='CONSENT'){
          if(data.isItemChecked){
             checkedCount++;
          }
        }else{
          if(data.isItemChecked || data.isItemNotChecked ){
             checkedCount++;
          }
          if(data.isItemChecked ){
            checkedCountAgree++;
          }          
        }

    });

    console.log(checkedCount+' '+this.datas.length);
    this.enableItemCheckedAll = false;

    if(this.check_agree_flag=='N') {
      if(checkedCount==this.datas.length){
          this.buttonDisabled = false;
          // this.isItemCheckedAll = true;
      }else{
          this.buttonDisabled = true;
        // this.isItemCheckedAll = false;
      }
    }else{
      if(checkedCountAgree==this.datas.length){
          this.buttonDisabled = false;
      }else{
          this.buttonDisabled = true;
      }
    }

    console.log('this.buttonDisabled=>>',this.buttonDisabled)

    this.isItemCheckedAll = (checkedCountAgree === checkedCount)

    setTimeout(() => {
      this.enableItemCheckedAll = true;
    },500);

    
  }

  checkConsentNot(e, item){
    console.log('not checkConsent',e);
    console.log('not checkConsent',e.target.checked);    
    
    item.isItemChecked = !e.target.checked; 

  

    let checkedCount = 0;
    let checkedCountAgree = 0;


    this.datas.forEach((data) => {
        if(data.isItemChecked || data.isItemNotChecked ){
          checkedCount++;
        }
        if(data.isItemChecked ){
          checkedCountAgree++;
        }
    });

    console.log(checkedCount+' '+this.datas.length);
    this.enableItemCheckedAll = false;

    if(this.check_agree_flag=='N') {
      if(checkedCount==this.datas.length){
          this.buttonDisabled = false;
      }else{
          this.buttonDisabled = true;
      }
    }else{
      if(checkedCountAgree==this.datas.length){
         this.buttonDisabled = false;
      }else{
         this.buttonDisabled = true;
      }
    }
    console.log('this.buttonDisabled=>',this.buttonDisabled)

    this.isItemCheckedAll = (checkedCountAgree === checkedCount)
   
    setTimeout(() => {
      this.enableItemCheckedAll = true;
    },500);

    
  }


  checkConsentAll(e){

    console.log('this.enableItemCheckedAll=',this.enableItemCheckedAll)

    if(this.enableItemCheckedAll==false){
       return;
    }

    console.log('change',e);
    console.log('checkConsentAll',e.target.checked);
   // console.log(this.datas);
    
    this.datas.forEach((data) => {
        data.isItemChecked = e.target.checked;
    });

    let checkedCount = 0;
    this.datas.forEach((data) => {
        if(data.isItemChecked){
          checkedCount++;
        }
    });

    /*
    console.log(checkedCount+' '+this.datas.length);
    if(checkedCount==this.datas.length){
        this.buttonDisabled = false;
    }else{
        this.buttonDisabled = true;
    }
    */
  }  


  viewPolicy(url){  
    const browser = this.iab.create(url, '_system');
    browser.show()
  }

}
