const BASE_URL = 'http://127.0.0.1:8000/api';

function getAccessToken() {
  console.log(localStorage.getItem('accessToken'));
  return localStorage.getItem('accessToken');
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      'Accept': 'application/json',
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function register({ name, email, password }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true };
  }

  return { error: false };
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/user`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function addThread({ title, body }) {
  const response = await fetchWithToken(`${BASE_URL}/thread`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ title, body }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getAllThreads(page = 1) {
  const response = await fetchWithToken(`${BASE_URL}/threads?=page${page}`);
  
  const responseJson = await response.json();

  return { error: false, data: responseJson.data, current_page: responseJson.current_page};
}

async function getMentionThreads() {
  const response = await fetchWithToken(`${BASE_URL}/comment/metion/me`);
  const responseJson = await response.json();
  
  return { error: false, data: responseJson };
}

async function getThread(id) {
  const response = await fetchWithToken(`${BASE_URL}/thread/${id}`);
  const responseJson = await response.json();
  
  return { error: false, data: responseJson.data };
}

async function getComment(id) {
  const response = await fetchWithToken(`${BASE_URL}/comment/${id}`);
  const responseJson = await response.json();
  
  return { error: false, comments: responseJson };
}

async function MentionThread(id) {
  const response = await fetchWithToken(`${BASE_URL}/thread/${id}/Mention`, {
    method: 'POST',
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function unMentionThread(id) {
  const response = await fetchWithToken(`${BASE_URL}/thread/${id}/unMention`, {
    method: 'POST',
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function deleteThread(id) {
  const response = await fetchWithToken(`${BASE_URL}/thread/${id}`, {
    method: 'DELETE',
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getUserMention(name) {
  const response = await fetchWithToken(`${BASE_URL}/find/pepole`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ name }),
  });
  const responseJson = await response.json();

  if (!responseJson.success) {
    return { error: true, data: responseJson.message };
  }
  return { error: false, data: responseJson.data };
}

async function makeComment({threads_id, comment, comment_id, mentions}) {
  const response = await fetchWithToken(`${BASE_URL}/comment/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ threads_id, comment, comment_id, mentions }),
  });

  const responseJson = await response.json();

  
  if (!responseJson.success) {
    return { error: true, data: responseJson.data };
  }

  return { error: false, data: responseJson.data };
}

export {
  getUserMention,
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  addThread,
  getAllThreads,
  getMentionThreads,
  getThread,
  MentionThread,
  unMentionThread,
  deleteThread,
  getComment,
  makeComment,
};
