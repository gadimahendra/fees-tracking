export interface Ienrollment {
  enrollmentId: number;
  studentName: string;
  contactNo: string;
  totalFees: number;
  emi1: number;
  emi2: number;
  emi3: number;
  totalReceived: number;
  status: string;
  batchId: number;
  batchName: string;
}

export interface IpostEnrollemt {
  enrollmentId: number;
  studentName: string;
  contactNo: string;
  totalFees: number;
  emi1: number;
  emi2: number;
  emi3: number;
  totalReceived: number;
  status: string;
  isSoftDelete: false;
  batchId: number;
}

export interface IEnrollmentFilter {
  batchid?: 0;
  status?: string;
  studentName?: string;
}

export interface IdashboardStats {
  totalbatches: number;
  totalamounttobereceived: number;
  totalreceived: number;
  totalpending: number;
  batchwisestats: IbatchwiseStats[];
}

export interface IbatchwiseStats {
  batchid: number;
  batchname: string;
  totalamount: number;
  totalreceived: number;
  totalpending: number;
}
