import dayjs from 'dayjs';
import { useToast } from 'vue-toastification'
import {
  DATE_TIME_FORMAT,
  DEFAULT_FIRST_PAGE,
  DEFAULT_LIMIT_FOR_PAGINATION,
  OrderDirection,
} from './constants';
import { type IOption, type IOrderDirection } from './interfaces';
const toast = useToast();

export function isValidJSON(str: string) {
  try {
    const object = JSON.parse(str);
    if (object && typeof object === 'object') return true;
    return false;
  } catch (error) {
    return false;
  }
}



export function isStringify<T>(obj: T | Record<string, unknown>): boolean {
  try {
    JSON.stringify(obj);
  } catch (e) {
    return false;
  }
  return true;
}

export function showErrorNotification(message: string) {
  if (!message) return;
  toast.error(message)

}

export function showSuccessNotification(message: string) {
  if (!message) return;
  toast.success(message)
}

export function showWarningsNotification(message: string) {
  if (!message) return;
  toast.warning(message)
}


export function maskPhone(value: string, pattern = '###-####-###') {
  let i = 0;
  return pattern.replace(/#/g, (_) => value[i++]);
}

export function formatDate(date: Date | string) {
  return dayjs(date).format(DATE_TIME_FORMAT.YYYY_MM_DD_DASH);
}

export const normalizeString = (str: string) => {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ|Đ/g, 'd');
};

export const getToggleOrderDirection = (orderDirection: IOrderDirection | string) => {
  switch (orderDirection) {
    case undefined:
      return OrderDirection.DESC;
    case OrderDirection.ASC:
      return OrderDirection.DESC;
    case OrderDirection.DESC:
      return OrderDirection.ASC;
    default:
      break;
  }
};

export const getTableIndex = (index: number, page?: number, limit?: number) => {
  return (
    ((page || DEFAULT_FIRST_PAGE) - 1) * (limit || DEFAULT_LIMIT_FOR_PAGINATION) +
    index +
    1
  );
};

export const convertToOptionItem = (item: any, withCode?: boolean) => {
  return {
    title: (item?.name || '') + (withCode && item?.code ? ` (${item.code})` : ''),
    value: item?.id || item?._id,
    other: item,
  };
};

export const convertToOptions = (data: any[], withCode?: boolean): IOption[] => {
  return data.map((item) => convertToOptionItem(item, withCode));
};

export const compareFormData = (
  formData: any,
  originalData: any,
  exclude?: string[],
): boolean => {
  if (exclude) {
    const _formData = { ...formData };
    const _originalData = { ...originalData };
    exclude.forEach((field) => {
      delete _formData?.[field];
      delete _originalData?.[field];
    });
    return JSON.stringify(_formData) === JSON.stringify(_originalData);
  }
  return JSON.stringify(formData) === JSON.stringify(originalData);
};

export const getDiffFormData = (
  oldForm: Record<string, unknown>,
  newForm: Record<string, unknown>,
  fields?: string[], //If the data are constrained to each other, then taking all
) => {
  const differences = {} as Record<string, unknown>;
  for (const key in oldForm) {
    if (JSON.stringify(oldForm[key]) !== JSON.stringify(newForm[key])) {
      differences[key] = newForm[key];
    }
  }
  if (fields?.length) {
    let isInGroup = false;
    for (const key of fields) {
      if (differences[key]) {
        isInGroup = true;
        break;
      }
    }
    if (isInGroup) {
      const groupDifferences = Object.fromEntries(
        fields.map((key) => [key, newForm[key]]),
      );
      Object.assign(differences, groupDifferences);
    }
  }
  return differences;
};

export const formatDateString = (ds: string, format: string): string => {
  return dayjs(ds).format(format);
};

// remove undefined/null items of array, if not have item return undefined
export const removeEmptyValue = (arrays: any[]) => {
  const result: any[] = [];
  arrays?.forEach((item) => {
    if (item) {
      result.push(item);
    }
  });
  return result.length ? result : undefined;
};

export const scrollToIdElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function formatPhoneNumber(phoneNumber: string): string {
  const cleaned: string = ('' + phoneNumber).replace(/\D/g, '');
  const formatted: string = cleaned.replace(/(\d{4})(\d{3})(\d{4})/, '$1-$2-$3');
  return formatted;
}
export const formatNumberWithCommas=(value:string)=> {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
