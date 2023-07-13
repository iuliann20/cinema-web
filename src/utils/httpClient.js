/**
 * Perform a GET operation
 * @param {string} url relative to the host name
 */
const httpGet = (url) => {
    return fetch(`${window.location.protocol}//${window.location.host}${url}`, {
      credentials: 'include'
    });
  };
  
  /**
   * Perform a POST operation
   * @param {string} url relative to the host name
   * @param {object} content the data to send
   */
  const httpPost = (url, content = {}) => {
    return fetch(`${window.location.protocol}//${window.location.host}${url}`, {
      method: 'POST', // GET, *POST, PUT, DELETE, etc.
      credentials: 'include', // *include, same-origin, omit
      headers: {
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
   const httpDelete = (url, content = {}) => {
    return fetch(`${window.location.protocol}//${window.location.host}${url}`, {
      method: 'DELETE', // GET, *POST, PUT, DELETE, etc.
      credentials: 'include', // *include, same-origin, omit
      headers: {
        'Content-Type': 'application/json', // *application/json, application/x-www-form-urlencoded
      },
      body: JSON.stringify(content)
    });
  }
  
  const httpUpload = (url, content = {}) => {
    return fetch(`${window.location.protocol}//${window.location.host}${url}`, {
      method: 'POST', // GET, *POST, PUT, DELETE, etc.
      credentials: 'include', // *include, same-origin, omit
      body: content
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
  