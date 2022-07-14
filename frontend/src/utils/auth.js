export const BASE_URL = 'http://localhost:3001';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка ${res.status}`);
  }
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ 
      "email": email,
      "password": password
    })
  })
  .then((res) => {
    return checkResponse(res)
  })
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ 
      "email": email,
      "password": password
    })
  })
  .then((res) => {
    return checkResponse(res)
  })
}

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  })
  .then((res) => {
    return checkResponse(res)
  })
} 