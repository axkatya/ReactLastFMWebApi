let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname.includes('localhost')) {
  backendHost = 'https://localhost:44334';
} else {
  backendHost = 'https://lastfmreactwebapi.azurewebsites.net';
}

export const API_ROOT = backendHost;