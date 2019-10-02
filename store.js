import list from './list.js';

// Bookmark keys:
// {
// 	id,
// 	title,
// 	rating,
// 	url,
// 	desc,
// 	expanded
// }

let error;
const STORE = {
	bookmarks: [],
	adding: false,
	error: null,
	filter: 0
};

// find specific bookmark by ID
function findById(num) {
	return STORE.bookmarks.find(obj => obj.id === num);
}

// adds bookmark to list
function addItem(obj) {
	obj.expanded = false;
	STORE.bookmarks.push(obj);
	list.render();
}

// removes bookmark from list
function deleteItem(id) {
	STORE.bookmarks.splice(findById(id), 1);
	list.render();
}

// toggles expansion view
function toggleExp() {

}

export default {
	STORE,
	findById,
	addItem,
	deleteItem,
	toggleExp,
}