import Actions from './actions';

export default class Users extends Actions {

  constructor(settings){
    super(settings);
  }

  list(){
    return super.list('GET', 'users')
  }

  listByGroup(groupId){
    return super.list('GET', `groups/${groupId}/users`)
  }

  listByOrganization(orgId){
    return super.list('GET', `organizations/${orgId}/users`)
  }

  show(userId){
    return super.list('GET', `users/${userId}`)
  }

  showMany(userIds){
    return super.query('GET', `users/show_many`, {ids : userIds.toString()})
  }

  me(){
    return super.list('GET', `users/me`)
  }

}