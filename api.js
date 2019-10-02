import store from './store.js';

const base_url = 'https://thinkful-list-api.herokuapp.com/zac/bookmarks'

function myFetch(url, obj) {
	let error;
	return fetch(url, obj)
	  .then(res => {
		if (!res.ok) {
		  error = {code: res.status};
		}
		return res.json();
	  })
	  .then(data => {
		if (error) {
		  error.message = data.message;
		  store.STORE.error = error.message;
		  return Promise.reject(error);
		}
		else store.STORE.error = null;
		console.log(data);
		return data;
	  });
  };

// Reads the list from the API and updates the store
function getItems() {
	return myFetch(base_url);
}

// Adds an item to the API list and updates the store
function addItem(obj) {
	let newItem = JSON.stringify(obj);
	myFetch(`${base_url}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: newItem })
		.then(res => store.addItem(res));
}

// Removes an item from the API and updates the store
function deleteItem(id) {
	myFetch(`${base_url}/${id}`, {method: 'DELETE'});
	store.deleteItem(id);
}

export default {
	getItems,
	addItem,
	deleteItem,
};