'use strict';

import list from './list.js';
import api from './api.js';

let error;
const STORE = {
	bookmarks: [],
	adding: false,
	error: null,
	filter: 0
};

// find specific bookmark by ID
function findById(id) {
	return this.STORE.bookmarks.find(item => item.id === id);
}

// generate bookmark object
function genBookmark(id, title, rating, url, desc) {
	return {
		id,
		title,
		rating,
		url,
		desc,
		expanded: false
	}
}

// adds bookmark to list
function addItem() {
	let obj = new genBookmark(1, 'Title 1', 4, 'https://www.google.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
	api.addItem(obj);
	STORE.bookmarks.push(obj);

	list.renderMain();
}

// removes bookmark from list
function deleteItem() {

}

// toggles expansion view
function toggleExp() {

}

export default {
	STORE,
	findById,
	genBookmark,
	addItem,
	deleteItem,
	toggleExp,
}