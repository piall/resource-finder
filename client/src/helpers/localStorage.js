export function getFromLocalStorage(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

export function setInLocalStorage(key) {
  JSON.stringify(window.localStorage.setItem(key, JSON.stringify(value)));
}

export function clearLocalStorage() {}

export function deleteInLocalStorage() {}
