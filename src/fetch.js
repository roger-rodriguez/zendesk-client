import isomorphicFetch from "isomorphic-fetch";
import Promise from 'bluebird';

export default ({domain, path, query, method, authToken, headers, body}) =>{

  const options = {
    method,
    headers : headers || getDefaultHeaders(authToken),
    body    : body || null,
  };

  const url = [
    `${domain}/api/v2/`,path,`.json`,
    query ? `?${joinQuery(query)}` : ``,
  ].join('');

  return isomorphicFetch(url, options)
    .then(res => parseStatus(res.status, res.json()));
};

function joinQuery(query){
  return Object.keys(query).map(function(k){
    return [k, encodeURIComponent(query[k] || '')].join('=')
  }).join("&");
}

function parseStatus(status, res){
  return new Promise((resolve, reject) =>{
    if(status >= 200 && status < 300){
      res.then(response => resolve(response));
    } else{
      res.then(response => {
        const error = new Error(response.description);
        reject(error)
      });
    }
  });
}

function getDefaultHeaders(authToken){
  const headers = {
    'Content-Type'  : "application/json",
    'Accept'        : "application/json",
  };
  if(authToken){
    headers['Authorization'] = `Bearer ${authToken}`
  }
  return headers
}