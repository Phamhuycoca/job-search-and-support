import { type AxiosResponse } from 'axios';
import type { Ref } from 'vue';
import {
  ErrorCode,
  Gender,
  HttpStatus,
  OrderDirection,
  PageName,
  ProfileType,
  Role,
  UserStatus,
} from './constants';

export interface IResponseError<T = any> {
  key: string;
  message: string;
  errorCode: ErrorCode;
  data?: T;
}

export interface IBodyResponse<T> extends AxiosResponse {
  success: boolean;
  isRequestError?: boolean;
  code: HttpStatus;
  message: string;
  error: string;
  data: T;
  statusCode:string;
  errors?: IResponseError<any>[];
}

export interface ICommonListQuery {
  page?: number;
  limit?: number;
  orderBy?: string;
  orderDirection?: OrderDirection | string;
  keyword?: string;
}

export interface IUser {
  _id: string;
  email: string;
  name?: string;
  role:string;
  avatar:string;
}

export interface ILoginResponse {
  accessToken: {
    token: string;
    expiresIn: number;
  };
  refreshToken: {
    token: string;
    expiresIn: number;
  };
  profile: IUser;
}

export interface IGetListResponse<T> {
  items: T[];
  totalItems: number;
}

export interface IDropDownOption {
  value?: string | number;
  label?: string;
}

// For sidebar

export interface ISidebarItem {
  title: string;
  routeName?: PageName;
  activeRouteNames?: PageName[];
  icon?: string;
  subItems?: ISidebarItem[];
  active?: Ref<boolean>;
  role?: boolean;
  // hasRoles?: SystemRole[];
}

export interface ISidebarGroup {
  groupName?: string;
  items: ISidebarItem[];
  role?: boolean;
}

export interface IOption {
  value: string | number;
  title: string;
  disabled?: boolean;
  other?: any;
}

export interface ITime {
  hours: number;
  minutes: number;
  seconds?: number;
}

export type IOrderDirection = OrderDirection | undefined;

export interface IRoleDetail {
  role?: string;
}
export interface IUserProfile {
  id?: string;
  role?: IRoleDetail;
}

export interface ITableSorter {
  field: string;
  direction?: IOrderDirection;
}
// Permissions
export interface IBasePermission {
  create?: boolean;
  delete?: boolean;
  update?: boolean;
  view?: boolean;
}

export interface IClassroomPermission extends IBasePermission {
  viewPersonal?: boolean;
  detailBasic?: boolean;
  detailStatistics?: boolean;
  viewTimeKeeping?: boolean;
  viewAttendance?: boolean;
  viewStudentClassroom?: boolean;
  viewGeneralClassroom?: boolean;
  viewSyllabus?: boolean;
  download?: boolean;
}

export interface ICoursePermission extends IBasePermission {
  viewPersonal?: boolean;
  detailBasic?: boolean;
  detailStatistics?: boolean;
  viewClassroomByCourse?: boolean;
  viewPersonalClassroomByCourse?: boolean;
  viewTeacherByCourse?: boolean;
  viewSubjectByCourse?: boolean;
}

export interface ILessonPermission extends IBasePermission {
  viewPersonal?: boolean;
  updateDocument?: boolean;
  detail?: boolean;
  downloadVideo?: boolean;
}

export interface IUserPermission {
  update?: boolean;
  view?: boolean;
  changePassword?: boolean;
}

export interface ISchedulePermission {
  view?: boolean;
  viewPersonal?: boolean;
  processLeaveRequest?: boolean;
  createRequestLeave?: boolean;
  deleteLeaveRequest?: boolean;
  updateLesson?: boolean;
  createLesson?: boolean;
  attendance?: boolean;
  updateTimeKeeping?: boolean;
  delete?: boolean;
}

export interface ITeacherPermission extends IBasePermission {
  viewClassroomByTeacher?: boolean;
}

export interface ITimekeepingPermission {
  viewPersonal?: boolean;
  view?: boolean;
  create?: boolean;
}

export interface IStudentPermission extends IBasePermission {
  viewClassroomByStudent?: boolean;
}

export interface ISyllabusPermission extends IBasePermission {
  viewPersonal?: boolean;
  download?: boolean;
}

export interface IUserRole {
  user?: IUserPermission;
  role?: IBasePermission;
}
