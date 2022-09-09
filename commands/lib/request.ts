const apiBase = "https://api.habitra.io/v1";

export class Request {
  static get(path: string, headers: { [key: string]: string }) {
    return fetch(`${apiBase}/${path}`, { method: "Get", headers });
  }

  static post(path: string, headers: { [key: string]: string }, body?: string) {
    return fetch(`${apiBase}/${path}`, { method: "POST", headers, body });
  }

  static put(path: string, headers: { [key: string]: string }, body: string) {
    return fetch(`${apiBase}/${path}`, { method: "PUT", headers, body });
  }

  static delete(path: string, headers: { [key: string]: string }) {
    return fetch(`${apiBase}/${path}`, { method: "DELETE", headers });
  }
}
