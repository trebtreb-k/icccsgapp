import { Component, OnInit } from '@angular/core';
import { moment } from './../../services/utils/moment/moment.service';
import { IncomeService } from './../../services/api/income/income.service';

@Component({
  selector: 'app-direct-to-customer',
  templateUrl: './direct-to-customer.page.html',
  styleUrls: ['./direct-to-customer.page.scss'],
})
export class DirectToCustomerPage implements OnInit {

  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  dataApi :any = [];
  loadData: any = [];
  loadDataCalendar :any = [];
  optionsMulti: any;
  monthYear :string = moment().format('MMYYYY');
  dateSelect :string = moment().format('DD/MM/YYYY');
  loaded : boolean;
  affiliate_id : string = '';

  constructor(private api : IncomeService) { }

  ngOnInit() {
  }


  async ionViewDidEnter() {
    this.getData(this.monthYear);
  }


  doRefresh(event) {
   setTimeout(() => {
       this.ionViewDidEnter();
       event.target.complete();
   }, 2000);
  }




  async getEventForDays(events: any) {
    console.log(events)
    this.dateSelect = moment(events._d).format('DD/MM/YYYY');
    console.log(this.dateSelect)

    this.loadData = this.dataApi.filter((datas:any)=>{
        return (this.dateSelect == datas.order_create.substring(0,10));
    });
  }

  async getEventForMonths(events: any) {
    console.log(events)
    //let moment(events.newMonth.string).format('DD/MM/YYYY'));
    if(events.newMonth.string.substring(0,7)==moment().format('YYYY-MM')){
      this.dateSelect = moment().format('DD/MM/YYYY');
    }else{
      if(events.newMonth.string < events.oldMonth.string) {
        this.dateSelect = moment(this.dateSelect,'DD/MM/YYYY').subtract(1, 'month').format('DD/MM/YYYY');
      }else{
        this.dateSelect = moment(this.dateSelect,'DD/MM/YYYY').add(1, 'month').format('DD/MM/YYYY');
      }
    }
    console.log('this.dateSelect',this.dateSelect)
    this.monthYear = moment(events.newMonth.string).format('MMYYYY');
    this.getData(this.monthYear);

  }


 async getData(transDate:string) {
  this.loaded = false;
  let response = await this.api.getDirectToCustomer(transDate);
  this.dataApi = response.datas;

  /*
  this.dataApi = [
    {
      period: "202107_P1",
      order_id: "19641",
      order_status: "wait_receive",
      order_status_desc: "จัดส่งแล้ว รอรับสินค้า สำหรับ order ที่รับชำระเงินผ่าน LnwPay",
      order_create: "16/07/2021 15:27:13",
      affiliate_id: "5993861",
      emp_id: "58949",
      emp_type: "OFFICE",
      div_desc: "ฝ่าย H",
      dept_id: "HWS",
      dept_id2: "HWS",
      emp_name: "น.ส.วรนาถ ลับบัวงาม",
      completed_status: "Y",
      brand_count: 1,
      product_sku_count: 1,
      comm_type_count: 1,
      quantity: 1,
      netprice: 630,
      incentive_expect: 0,
      incentive_complete: 12,
      product_sku: "SAPKMIRFC1",
      product_name: "BSC BIO PERFECT POWDER SPF 25 PA++ (Refiil ) บีเอสซี ไบโอ เพอร์เฟค พาวเดอร์ ฟาวเดชั่น (รีฟิล) C1 ผิวขาว",
      pruduct_qty: 1,
      price: 630,
      discount: 0,
      product_net_price: 630,
      brand: "AHP-",
      comm_amt: 12,
      expect_comm: 0,
      complete_comm: 12,
      comm_type: "COMM_1",
      set_brand: "%",
      set_product_sku: "%",
      set_date_start: "01/01/2021 00:00:00",
      set_date_end: "Invalid date",
      set_used: "R",
      set_rate: 2,
      set_amt: 0,
      set_flag: "Y",
      },
      {
      period: "202107_P1",
      order_id: "19878",
      order_status: "sent",
      order_status_desc: "จัดส่งแล้ว สำหรับ order  ที่ไม่ได้รับชำระผ่าน LnwPay",
      order_create: "16/07/2021 09:21:39",
      affiliate_id: "6032169",
      emp_id: "95835",
      emp_type: "OFFICE",
      div_desc: "ฝ่าย R",
      dept_id: "RTA",
      dept_id2: "RTA",
      emp_name: "น.ส.พรทิพย์ สุขเลิศนันทกิจ",
      completed_status: "Y",
      brand_count: 1,
      product_sku_count: 1,
      comm_type_count: 1,
      quantity: 1,
      netprice: 1290,
      incentive_expect: 0,
      incentive_complete: 24,
      product_sku: "BTSETA03",
      product_name: "ชุดแคทเธอรีน+บุญทิพย์",
      pruduct_qty: 1,
      price: 1290,
      discount: 0,
      product_net_price: 1290,
      brand: "ART-",
      comm_amt: 24,
      expect_comm: 0,
      complete_comm: 24,
      comm_type: "COMM_1",
      set_brand: "%",
      set_product_sku: "%",
      set_date_start: "01/01/2021 00:00:00",
      set_date_end: "Invalid date",
      set_used: "R",
      set_rate: 2,
      set_amt: 0,
      set_flag: "Y",
      },
      {
      period: "202107_P1",
      order_id: "20130",
      order_status: "wait_receive",
      order_status_desc: "จัดส่งแล้ว รอรับสินค้า สำหรับ order ที่รับชำระเงินผ่าน LnwPay",
      order_create: "15/07/2021 08:46:01",
      affiliate_id: "5993861",
      emp_id: "58949",
      emp_type: "OFFICE",
      div_desc: "ฝ่าย H",
      dept_id: "HWS",
      dept_id2: "HWS",
      emp_name: "น.ส.วรนาถ ลับบัวงาม",
      completed_status: "N",
      brand_count: 2,
      product_sku_count: 2,
      comm_type_count: 1,
      quantity: 5,
      netprice: 1338,
      incentive_expect: 0,
      incentive_complete: 25,
      product_sku: "BAPKSBPFC1",
      product_name: "BSC Pure Care แป้งเค้กควบคุมความมัน SHINE FREE POWDER C1 ผิวขาว",
      pruduct_qty: 2,
      price: 258,
      discount: 0,
      product_net_price: 258,
      brand: "AHC-",
      comm_amt: 5,
      expect_comm: 0,
      complete_comm: 5,
      comm_type: "COMM_1",
      set_brand: "%",
      set_product_sku: "%",
      set_date_start: "01/01/2021 00:00:00",
      set_date_end: "Invalid date",
      set_used: "R",
      set_rate: 2,
      set_amt: 0,
      set_flag: "Y",
      },
      {
      period: "202107_P1",
      order_id: "20130",
      order_status: "wait_receive",
      order_status_desc: "จัดส่งแล้ว รอรับสินค้า สำหรับ order ที่รับชำระเงินผ่าน LnwPay",
      order_create: "24/05/2021 08:46:01",
      affiliate_id: "5993861",
      emp_id: "58949",
      emp_type: "OFFICE",
      div_desc: "ฝ่าย H",
      dept_id: "HWS",
      dept_id2: "HWS",
      emp_name: "น.ส.วรนาถ ลับบัวงาม",
      completed_status: "Y",
      brand_count: 2,
      product_sku_count: 2,
      comm_type_count: 1,
      quantity: 5,
      netprice: 1338,
      incentive_expect: 0,
      incentive_complete: 25,
      product_sku: "SAPKHSR C2",
      product_name: "BSC SUPER EXTRA COVER HIGH COVERAGE POWDER SPF30 PA+++ (REFILL) บีเอสซี ซุปเปอร์ เอ็กซ์ตร้า คัฟเวอร์ เอสพีเอฟ 30 พีเอ +++ (รีฟิล) C2 ผิวขาวเหลือง",
      pruduct_qty: 3,
      price: 1080,
      discount: 0,
      product_net_price: 1080,
      brand: "AHP-",
      comm_amt: 20,
      expect_comm: 0,
      complete_comm: 20,
      comm_type: "COMM_1",
      set_brand: "%",
      set_product_sku: "%",
      set_date_start: "01/01/2021 00:00:00",
      set_date_end: "Invalid date",
      set_used: "R",
      set_rate: 2,
      set_amt: 0,
      set_flag: "Y",
      }
  ]
 */

  this.dataApi = this.dataApi.map((datas:any)=>({...datas,image: (datas.completed_status==='Y')?'assets/images/direct-to-customer/checked.svg':'assets/images/direct-to-customer/clock.svg'}))
 // this.loadData = this.dataApi
 // console.log('-->',this.loadData)

  if(this.dataApi.length > 0){
     this.affiliate_id = this.dataApi[0].affiliate_id;
  }


  console.log(this.dateSelect);
  this.loadData = this.dataApi.filter((datas:any)=>{
    // console.log('xxx=',datas.order_create.substring(0,10))
      return (this.dateSelect == datas.order_create.substring(0,10));
  });

  console.log('loadData-->',this.loadData)


  let i = -1;
  let j = -1;
  let data = [];
  let oldDate = '';
  this.dataApi.forEach((e: any) => {
    i++;

    const dateC = moment(e.order_create.substring(0,10), 'DD/MM/YYYY').format();//'MM-DD-YYYY');

    if(oldDate != dateC || i==0) {
      j++;
      data.push({
        date: new Date(dateC),
        cssClass:
          e.completed_status=== 'Y'
            ? 'custom-calendar workdayShow'
            : 'custom-calendar holiday',
        subTitle: null,
      });
    }else{
      console.log('xxx->'+j,data[j])
      data[j].cssClass =  e.completed_status=== 'Y'
                            ? 'custom-calendar workdayShow'
                            : 'custom-calendar holiday'
    }

    oldDate = dateC;


  });


  this.loadDataCalendar =  data;
  console.log('loadDataCalendar',this.loadDataCalendar)
  this.loaded = true;



  this.optionsMulti = {
    from: new Date(2000, 0, 1),
    monthFormat: 'ปี YYYY เดือน MMM',
    monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
    weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
    weekStart: 0,
    showToggleButtons: true,
    showMonthPicker: true,
    daysConfig: this.loadDataCalendar,
  };
}


}
