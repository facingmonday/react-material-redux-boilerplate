import { API_HOST } from '../../config/constants';

// import Cookies from 'universal-cookie';
// const cookies = new Cookies();

export const setCookie = (name, value) => window.localStorage.setItem(name, value);

export const getCookie = name => window.localStorage.getItem(name);

export const deleteCookie = name => window.localStorage.removeItem(name);

export const buildUrl = path => `${API_HOST}${path}`;

export const formatFilterAndSortOptions = options => {
  const obj = { ...options };
  try {
    if (obj.sort && obj.sort instanceof Array && obj.sort.length) {
      obj.sort.forEach(sortObject => {
        obj[`sort.${sortObject.field}`] = sortObject.direction;
        return true;
      });
      delete obj.sort;
    }
    if (obj.filter && obj.filter instanceof Array && obj.filter.length) {
      obj.filter.forEach(filterObject => {
        obj[`filter.${filterObject.field}`] = filterObject.value;
        return true;
      });
      delete obj.filter;
    }
  } catch (e) {
    console.log('e', e);
  }
  return obj;
};
