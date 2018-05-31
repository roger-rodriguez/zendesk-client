import Actions from "./actions";

export default class Requests extends Actions {
  constructor(settings) {
    super(settings);
  }

  list() {
    return super.list("GET", "requests");
  }

  listOpen() {
    return super.list("GET", "requests/open");
  }

  listSolved() {
    return super.list("GET", "requests/solved");
  }

  listCCD() {
    return super.list("GET", "requests/ccd");
  }

  listByUser(userID) {
    return super.list("GET", `users/${userID}/requests`);
  }

  listByOrganization(orgId) {
    return super.list("GET", `organizations/${orgId}/requests`);
  }

  getRequest(requestID) {
    return super.list("GET", `requests/${requestID}`);
  }

  create(request) {
    return super.create("POST", `requests`, request);
  }

  update(requestID, request) {
    return super.create("UPDATE", `requests/${requestID}`, request);
  }
}
