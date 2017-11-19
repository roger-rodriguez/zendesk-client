import warning from 'warning';
import attachments from './attachments';
import tickets from './tickets';
import search from './search';


export default function createClient(options = {}){

  if(!options.token){
    console.error('token is required');
  }

  warning(
    !options.token,
    'A valid token is required: createClient({token: xxxxxx})'
  );

  const resources = {
    attachments : attachments,
    tickets     : tickets,
    search      : search
  };

  return Object.keys(resources).reduce(
    (acc, resource) =>
      Object.assign(acc, {
        [resource] : {
          ...resources[resource].call(null, options),
        }
      }),
    {}
  );


}
