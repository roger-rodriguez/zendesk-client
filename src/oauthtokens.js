import Actions from './actions';

export default class OauthTokens extends Actions {

  constructor(settings){
    super(settings);
  }

  list(){
    return super.list('GET', 'oauth/tokens')
  }

  show(id){
    return super.list('GET', `oauth/tokens/${id}`)
  }

  current(){
    return super.list('GET', `oauth/tokens/current`)
  }

}