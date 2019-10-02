'use strict';

import store from './store.js';
import api from './api.js';
import list from './list.js';

// triggers New button
function handleBtnNew() {
	$('.container').on('click', '.new', function() {
		let obj = new store.genBookmark('Title 1', 4, 'https://www.google.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
		api.addItem(obj);
		console.log('click!');
		console.log(store.STORE.bookmarks);
	});
}

// triggers Filter fx
function handleFilter() {
	$('.container').on('change', '.filter', function() {
		store.STORE.filter = Number(this.value);
		// console.log(store.STORE.filter);
	});
}

// toggles detail view
function togglePanel() {
	$('.container').on('click', 'li', function() {
		console.log(this.id);
	})
}

// triggers Delete button
function handleBtnDelete() {

}

// triggers Cancel button
function handleCancel() {

}

// triggers Submit
function handleBtnSubmit() {

}

// Initializes event handlers
function initEvents() {
	handleBtnNew();
	handleFilter();
	togglePanel();
	handleBtnDelete();
	handleCancel();
	handleBtnSubmit();
}

export default {
	initEvents
}