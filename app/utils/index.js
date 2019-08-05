import config from '../../config/constants';
//import Cookies from 'universal-cookie';
//const cookies = new Cookies();

export const setCookie = (name, value, options = {}) => {
    return window.localStorage.setItem(name, value);
};

export const getCookie = name => {
    return window.localStorage.getItem(name);
}

export const deleteCookie = name => {
    return window.localStorage.removeItem(name);
}

export const buildUrl  = path => `${config.API_HOST}${path}`;
