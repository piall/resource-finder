import { getFromLocalStorage } from './localStorage';

export function getAccountID() {
  const data = getFromLocalStorage('user');
  if (data) {
    return data._id;
  }
}
