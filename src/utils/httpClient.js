import Cookies from 'js-cookie';

/**
 * Perform a GET operation
 * @param {string} url relative to the host name
 */
const REACT_APP_API_BASE_URL = "https://localhost:7016";

const httpGet = (url, jwtToken) => {
    return fetch(`${REACT_APP_API_BASE_URL}${url}`, {
      credentials: 'include',
      headers :{
        'Authorization': `Bearer ${jwtToken}`
      }
    });
  };
  
  /**
   * Perform a POST operation
   * @param {string} url relative to the host name
   * @param {object} content the data to send
   */
  const httpPost = (url, content = {}, jwtToken) => {
    return fetch(`${REACT_APP_API_BASE_URL}${url}`, {
      method: 'POST', // GET, *POST, PUT, DELETE, etc.
      credentials: 'include', // *include, same-origin, omit
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': 'application/json', // *application/json, application/x-www-form-urlencoded
      },
      body: JSON.stringify(content)
    });
  }
  
  /**
   * Perform a DELETE operation
   * @param {string} url relative to the host name
   * @param {object} content the data to send
   */
   const httpDelete = (url, content = {}, jwtToken) => {
    return fetch(`${REACT_APP_API_BASE_URL}${url}`, {
      method: 'DELETE', // GET, *POST, PUT, DELETE, etc.
      credentials: 'include', // *include, same-origin, omit
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': 'application/json', // *application/json, application/x-www-form-urlencoded
      },
      body: JSON.stringify(content)
    });
  }
  
  const httpUpload = (url, content = {}, jwtToken) => {
    return fetch(`${REACT_APP_API_BASE_URL}${url}`, {
      method: 'POST', // GET, *POST, PUT, DELETE, etc.
      credentials: 'include', // *include, same-origin, omit
      body: content,
      headers :{
        'Authorization': `Bearer ${jwtToken}`
      }
    });
  }
  
  /**
   * Perform file download operation using an existing blob
   * @param {blob} the file
   * @param {string} name file name
   */
   const httpDownload = (file, name) => {
    let blobUrl = window.URL.createObjectURL(file);
    let a = document.createElement('a');
    a.download = name;
    a.href = blobUrl;
    a.click();
  }
  

  
  export default {
    get: httpGet,
    post: httpPost,
    delete: httpDelete,
    upload: httpUpload,
    download: httpDownload
  };


