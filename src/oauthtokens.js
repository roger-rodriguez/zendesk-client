import Actions from "./actions";

export default class OauthTokens extends Actions {
  constructor(settings) {
    super(settings);
  }

  list() {
    return super.list("GET", "oauth/tokens");
  }

  show(id) {
    return super.list("GET", `oauth/tokens/${id}`);
  }

  current() {
    return super.list("GET", `oauth/tokens/current`);
  }

  /**
   * {"token": {"client_id": 1234, "scopes": ["read", "write"]}}
   * @param token
   * @returns {POST}
   */
  create(token) {
    return super.create("POST", `oauth/tokens`, token);
  }

  delete(id) {
    return super.delete("DELETE", `oauth/tokens/${id}`);
  }
}
