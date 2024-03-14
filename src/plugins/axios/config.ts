import type { AxiosRequestConfig } from 'axios';
import dayjs from '@/plugins/dayjs';

export const config: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
    'X-Timezone': dayjs().format('Z'),
    'X-Timezone-Name': dayjs.tz.guess(),
  },
  baseURL: process.env.VUE_APP_API_URL,
  responseType: 'json',
};
