import Actions from './actions';

export default class Tickets extends Actions {

  constructor(settings){
    super(settings);
  }

  list(){
    return super.list('GET', 'tickets')
  }

  listByOrganization(orgId){
    return super.list('GET', `organizations/${orgId}/tickets`)
  }

  listByUserRequested(userId){
    return super.list('GET', `users/${userId}/tickets/requested`)
  }

  listByUserCCD(userId){
    return super.list('GET', `users/${userId}/tickets/ccd`)
  }

  listByAssigned(userId){
    return super.list('GET', `users/${userId}/tickets/assigned`)
  }

  listRecent(){
    return super.list('GET', `tickets/recent`)
  }

  show(ticketId){
    return super.list('GET', `tickets/${ticketId}`)
  }

  showMany(ticketIds){
    return super.query('GET', `tickets/show_many`, {ids : ticketIds.toString()})
  }

  create(ticket){
    return super.create('POST', 'tickets', ticket)
  }

  createMany(tickets){
    return super.create('POST', 'tickets/create_many', tickets)
  }

  update(ticketId, ticket){
    return super.update('PUT', `tickets/${ticketId}`, ticket)
  }

  updateMany(ticketIds, ticket){
    return super.update('PUT', `tickets/update_many`, ticket, {ids : ticketIds.toString()})
  }

  delete(ticketId){
    return super.delete('DELETE', `tickets/${ticketId}`)
  }

  deleteMany(ticketIds){
    return super.delete('DELETE', `tickets/destroy_many`, {ids : ticketIds.toString()})
  }

  getComments(ticketId){
    return super.list('GET', `tickets/${ticketId}/comments`)
  }

}