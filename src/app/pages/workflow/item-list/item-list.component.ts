import { Component, Input, OnInit } from '@angular/core';

interface ParamData {
  absent_code: string | null | undefined;
  absent_name: string | null | undefined;
  absent_reason: string | null | undefined;
  doc_id: string | null | undefined;
  emp_id: string | null | undefined;
  emp_name: string | null | undefined;
  end_date: string | null | undefined;
  end_time: string | null | undefined;
  rowno: number | null | undefined;
  start_date: string | null | undefined;
  start_time: string | null | undefined;
  step_id: string | null | undefined;
  time_count: string | null | undefined;
  workflow_id: string | null | undefined;
  workflow_status: string | null | undefined;
  show_date?: string | null | undefined;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() param: ParamData;

  constructor() {}

  ngOnInit() {}
}
