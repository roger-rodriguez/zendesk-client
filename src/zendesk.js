import Tickets from "./tickets";
import Search from "./search";
import Attachments from "./attachments";
import Users from "./users";
import OauthTokens from "./oauthtokens";

export default class Zendesk {
  constructor(options = {}) {
    this.settings = options;
    this.tickets = new Tickets(this.settings);
    this.search = new Search(this.settings);
    this.attachments = new Attachments(this.settings);
    this.users = new Users(this.settings);
    this.oauthtokens = new OauthTokens(this.settings);
  }
}
