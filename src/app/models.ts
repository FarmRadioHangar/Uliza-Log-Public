export class Project {
  id:number; name: string; doner:string; focus:string;
  image:string; start_date:string; end_date:string;
  country:number;
}

export class Program {
  id:number; radio_station__name:string;project__name:string;
  country:number; country_name:string;name:string;public_name:string;
  program_type:string; confirmed_program_time:boolean;uliza:string;
  start_date:string;end_date:string; repeat_week_day:string;
  repeat_start_time:string;duration:number;weeks:number;
  last_updated_at:string;created_at:string;radio_station:number;
  project:number;access:number[];
}

export class Radiostation {
  id:number; name:string;city:string;
  phone_number:number; email:string;uliza_password:string;website:string;
  manager:string; group_account_id:number;country:number;
}

export class Comment {
  id:number; content:string;log:number;
  contact:number;
}


export class Country {
  id:number;
  name:string;
  country_code:string;
  language:string;
  gbb:boolean;
}

export class Log {
 id:number;project: number; program__name:string; topic:string;
 focus_statement: string; ict:string; duration: number; week: number;
 postpone: boolean; postponed_for:string; email: string; gdrive_available: boolean;
 gdrive_url:string; recording_backup: string; recording_saved: boolean;
 offset: number; last_updated_at: string; created_at: string; program: number;
 saved_by: string; formats: string[];
}
