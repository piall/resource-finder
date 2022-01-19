export function getFromLocalStorage(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

export function setInLocalStorage(key, value) {
  JSON.stringify(window.localStorage.setItem(key, JSON.stringify(value)));
}

export function clearLocalStorage() {
  window.localStorage.clear();
}

export function deleteInLocalStorage(key) {
  window.localStorage.removeItem(key);
}
