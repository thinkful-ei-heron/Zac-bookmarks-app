'use strict';

import list from './list.js';

const STORE = {
	bookmarks: [],
	adding: false,
	error: null,
	filter: 0
};

// find specific bookmark by ID
function getId() {

}

// generate bookmark object
function genBookmark(id, title, rating, url, description) {
	return {
		id,
		title,
		rating,
		url,
		description,
		expanded: false
	}
}

// adds bookmark to list
function addItem() {
	let obj = new genBookmark(1, 'Title 1', 4, 'url', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
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
	getId,
	genBookmark,
	addItem,
	deleteItem,
	toggleExp,
}