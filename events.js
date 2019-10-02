'use strict';

import store from "./store.js";
import list from "./list.js";

// triggers New button
function handleBtnNew() {
	$('.container').on('click', '.new', function() {
		store.addItem();
		// console.log(store.STORE);
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
function toggleDetail() {

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
	toggleDetail();
	handleBtnDelete();
	handleCancel();
	handleBtnSubmit();
}

export default {
	initEvents
}