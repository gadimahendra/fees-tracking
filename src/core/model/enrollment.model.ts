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
