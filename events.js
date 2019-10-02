'use strict';

import store from './store.js';
import api from './api.js';
import list from './list.js';

// triggers New button
function handleBtnNew() {
	$('.container').on('click', '.new', function() {
		const obj = new store.genBookmark('Title 1', 4, 'https://www.google.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
		api.addItem(obj);
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

// triggers Delete button
function handleBtnDelete() {
	$('.container').on('click', '.btn-delete', function() {
		const id = $(this).parent().attr('id');
		api.deleteItem(id);
	});
}

// toggles detail view
function togglePanel() {
	$('.container').on('click', 'li', function() {
		const toggle = store.findById(this.id);
		if (toggle !== undefined) {
			toggle.expanded = !toggle.expanded;
			list.renderMain();
		};
	});
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