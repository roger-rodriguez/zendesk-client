import fetch from './fetch';

export default (options) =>{

  return {
    create : create.bind(null, options),
    list   : list.bind(null, options),
  }

}

/**
 * Create
 * @param config
 * @param ticket
 * @returns {Promise.<TResult>|*}
 */
function create(config, ticket){
  const {url, token} = config;
  let options        = {
    domain    : url,
    path      : `tickets`,
    method    : "POST",
    authToken : token,
    body      : JSON.stringify(ticket),
  };

  return fetch(options).then((res) =>{
    return res;
  });

};

/**
 * List Tickets
 * @param options
 * @param b
 */
const list = (options, b) =>{
  console.log('Tickets list()');
  console.log(options, b);
};