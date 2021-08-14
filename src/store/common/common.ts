export enum ResourceStatus {
  SUCCESS = "success",
  ERROR = "error",
  LOADING = "loading",
  NONE = "none",
}
export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
