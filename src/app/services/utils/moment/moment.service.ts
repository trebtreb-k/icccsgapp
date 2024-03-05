import * as moment from 'moment';

import { Injectable } from '@angular/core';

interface MomentRequest {
  inp?: moment.MomentInput;
  strict?: string | undefined;
  locale?: moment.LocaleSpecifier;
  format?: string | undefined;
}

type MomentUnit = 'years' | 'months' | 'weeks' | 'days' | 'hours' | 'minutes' | 'seconds' | 'milliseconds';

interface MomentOption {
  add?: { amount: moment.DurationInputArg1; unit: moment.unitOfTime.DurationConstructor } | undefined;
  subtract?: { amount: moment.DurationInputArg1; unit: moment.unitOfTime.DurationConstructor } | undefined;
}
@Injectable({
  providedIn: 'root',
})
class MomentService {
  constructor() {}

  initial(param: MomentRequest | null | undefined, options?: MomentOption): string | undefined {
    const { inp, strict, locale, format } = param;
    const { add, subtract } = options;

    return moment(inp || undefined, strict || undefined)
      .locale(locale || 'th')
      .format(format || 'YYYY-MM-DD');
  }
}

export { moment, MomentService, MomentRequest, MomentOption };
