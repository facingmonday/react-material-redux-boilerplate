import { API_HOST } from '../../config/constants';

// import Cookies from 'universal-cookie';
// const cookies = new Cookies();

export const setCookie = (name, value) => window.localStorage.setItem(name, value);

export const getCookie = name => window.localStorage.getItem(name);

export const deleteCookie = name => window.localStorage.removeItem(name);

export const buildUrl = path => `${API_HOST}${path}`;
