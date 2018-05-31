import fetch from "./fetch";

export default class Actions {
  constructor(settings) {
    this.settings = settings;
  }

  list(method = "GET", path) {
    let options = {
      domain: this.settings.url,
      path: path,
      method: method,
      authToken: this.settings.token
    };
    return fetch(options).then(res => {
      return res;
    });
  }

  create(method = "POST", path, payload) {
    let options = {
      domain: this.settings.url,
      path: path,
      method: method,
      authToken: this.settings.token,
      body: JSON.stringify(payload)
    };
    return fetch(options).then(res => {
      return res;
    });
  }

  update(method = "PUT", path, payload, query) {
    let options = {
      domain: this.settings.url,
      path: path,
      method: method,
      authToken: this.settings.token,
      body: JSON.stringify(payload)
    };

    if (query) {
      options["query"] = query;
    }

    return fetch(options).then(res => {
      return res;
    });
  }

  delete(method = "DELETE", path, query) {
    let options = {
      domain: this.settings.url,
      path: path,
      method: method,
      authToken: this.settings.token
    };

    if (query) {
      options["query"] = query;
    }

    return fetch(options).then(res => {
      return res;
    });
  }

  query(method = "GET", path, searchTerm) {
    let options = {
      domain: this.settings.url,
      path: path,
      query: searchTerm, // obj
      method: method,
      authToken: this.settings.token
    };
    return fetch(options).then(res => {
      return res;
    });
  }
}
