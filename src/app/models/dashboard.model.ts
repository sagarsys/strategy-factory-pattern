export interface Dashboard {
  id: number;
  name: string;
  description: string;
  period: DatePeriod;
  blocks?: DashboardBlock[];
}

export interface DashboardBlock {
  id: number;
  title: string;
  items?: string[];
}

export interface DatePeriod {
  start: string;
  end: string;
}
