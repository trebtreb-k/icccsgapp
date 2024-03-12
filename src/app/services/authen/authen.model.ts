interface API_BODY_REGISTER {
  emp_id: string | null | undefined;
  username: string | null | undefined;
  password: string | null | undefined;
  name: string | null | undefined;
  mobile_phone: string | null | undefined;
  email: string | null | undefined;
  id_card: string | null | undefined;
}

interface API_BODY_CHECKMOBILE {
  mobile_phone: string | null | undefined;
}

interface API_BODY_RESETPASSWORD {
  password: string | null | undefined;
  token: string | null | undefined;
}

interface API_BODY_CHECKEMPLOYEE {
  emp_id: string | null | undefined;
  id_card: string | null | undefined;
  mobile_phone: string | null | undefined;
}

interface API_RESPONSE_PROFILE {
  emp_id: string | null | undefined;
  name: string | null | undefined;
  dept_id: string | null | undefined;
  dept_desc: string | null | undefined;
  birthday: string | null | undefined;
  date_start: string | null | undefined;
  address: string | null | undefined;  
  store_id: string | null | undefined;
  branch_id: string | null | undefined;
  counter_id: string | null | undefined;
  cust_id: string | null | undefined;
  mobile_phone: string | null | undefined;
  email: string | null | undefined;
  picture: string | null | undefined;
  type: string | null | undefined;
}

export { API_BODY_REGISTER, API_BODY_CHECKMOBILE, API_BODY_RESETPASSWORD, API_BODY_CHECKEMPLOYEE, API_RESPONSE_PROFILE };
