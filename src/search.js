import Actions from './actions';

export default class Search extends Actions {

  constructor(settings){
    super(settings);
  }

  query(searchTerm){
    return super.query('GET', 'search', {query : searchTerm})
  }

}