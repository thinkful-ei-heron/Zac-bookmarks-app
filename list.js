'use strict';

import store from './store.js';

// Generate HTML for the list
function genList() {
	let bookmarks = store.STORE.bookmarks;
	let output = '';
	for (let i = 0; i < bookmarks.length; i++) {
		output += `<li class='bookmark' id='${bookmarks[i].id}'>${bookmarks[i].title} - ${bookmarks[i].rating} stars</li>`;
	}
	return output;
}

// Generate HTML for the detailed view
function genDetail() {

}

// Generate HTML for the new bookmark form
function genForm() {
	
}

// Render bookmark list
function renderList() {
	$('.container').html(`
		<button type='button' role='button' name='new bookmark' class='new top-btn'>New Bookmark</button>
		<select name='rating filter' class='filter top-btn'>
			<option value=0 selected>Filter rating</option>
			<option value=5>5 stars</option>
			<option value=4>4 stars</option>
			<option value=3>3 stars</option>
			<option value=2>2 stars</option>
			<option value=1>1 stars</option>
		</select>
		<ul class='list'>
			${genList()}
		</ul>
	`);
}

// Render new bookmark form
function renderForm() {

}

// Render container according to the current state
function renderMain() {
	if (store.STORE.adding === false) renderList();
	else renderForm();
}

export default {
	genList,
	genDetail,
	genForm,
	renderMain
};