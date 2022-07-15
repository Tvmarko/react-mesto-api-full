import { apiSettings } from "./utils.js";
class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    _checkErrors(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    };

    getProfileInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: {authorization: `Bearer ${localStorage.getItem('jwt')}`, ...this._headers}
    })
    .then(this._checkErrors);
  } 

    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
        headers: {authorization: `Bearer ${localStorage.getItem('jwt')}`, ...this._headers}
    })
    .then(this._checkErrors);
  } 

    editProfile(user) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {authorization: `Bearer ${localStorage.getItem('jwt')}`, ...this._headers},
        body: JSON.stringify({
          name: user.name,
          about: user.about
        })
      })
      .then(this._checkErrors);
    }

   editAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {authorization: `Bearer ${localStorage.getItem('jwt')}`, ...this._headers},
      body: JSON.stringify({
        avatar
      })
    })
    .then(this._checkErrors);
  }

    addCard(card) {
      return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: {authorization: `Bearer ${localStorage.getItem('jwt')}`, ...this._headers},
        body: JSON.stringify({
          name: card.name,
          link: card.link
        })
      })
      .then(this._checkErrors);
    }

    deleteCard(card) {
      return fetch(`${this._baseUrl}/cards/${card._id}`, {
        method: 'DELETE',
        headers: {authorization: `Bearer ${localStorage.getItem('jwt')}`, ...this._headers}
      })
      .then(this._checkErrors);
    }

    handleLikeCardStatus(card, likeCardStatus) {
      return fetch(`${this._baseUrl}/cards/${card}/likes`, {
        method: (likeCardStatus ? 'PUT': 'DELETE'),
        headers: {authorization: `Bearer ${localStorage.getItem('jwt')}`, ...this._headers}
      })
      .then(this._checkErrors);
    }
 }
   
const api = new Api(apiSettings); 
export default api;