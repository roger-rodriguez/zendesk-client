import fetch from './fetch';

export default (options) =>{

  return {
    query : query.bind(null, options),
  }

}


const query = (config, query) =>{

  const {url, token} = config;
  let options        = {
    domain    : url,
    path      : `search`,
    query     : {
      query : query,
    },
    method    : "GET",
    authToken : token,
  };

  return fetch(options).then((res) =>{
    return res;
  });

};