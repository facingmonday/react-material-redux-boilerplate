import config from '../../config/constants';

export const buildUrl = path => `${config.API_HOST}${path}`;

export default buildUrl;
