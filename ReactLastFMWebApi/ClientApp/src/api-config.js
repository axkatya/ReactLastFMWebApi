
const backendHost = (process.env.NODE_ENV === 'development') 
    ? 'https://localhost:44334'
    : 'https://lastfmreactwebapi.azurewebsites.net';

export const API_ROOT = backendHost;