import store from './store.js';
import api from './api.js';
import list from './list.js';

// triggers New button and switches view to form
function handleBtnNew() {
	$('.container').on('click', '.new', function() {
		store.STORE.adding = true;
		list.render();
		$('#url').focus();
	});
}

// triggers Filter fx
function handleFilter() {
	$('.container').on('change', '.filter', function() {
		store.STORE.filter = Number(this.value);
		list.render();
	});
}

// Triggers Delete button
function handleBtnDelete() {
	$('.container').on('click', '.btn-delete', function() {
		const id = $(this).parent().attr('id');
		api.deleteItem(id);
	});
}

// Triggers toggle by click
function handleToggleClick() {
	$('.container').on('click', 'li', function() {
		const toggle = store.findById(this.id);
		if (toggle !== undefined) {
			toggle.expanded = !toggle.expanded;
			list.render();
		};
	});
}
// Triggers toggle by key
function handleToggleKey() {
	$('.container').on('keypress', 'li', function() {
		const thisMark = this.id
		if (event.keyCode === 13 || 32) {
			const toggle = store.findById(thisMark);
			if (toggle !== undefined) {
				toggle.expanded = !toggle.expanded;
				list.render();
			};
		$(`#${thisMark}`).focus();
		}
	});
}

// triggers Visit button
function handleBtnVisit() {
	$('.container').on('click', '.btn-visit', function() {
		window.open($(this).attr('id'));
	});
}

// triggers Cancel button
function handleCancel() {
	$('.container').on('click', '.cancel', function() {
		store.STORE.adding = false;
		list.render();
	});
}

// triggers Submit
function handleBtnSubmit() {
	$('.container').on('submit', 'form', function() {
		event.preventDefault();
		const obj = {
			title: this.name.value,
			rating: this.rating.value,
			url: this.url.value,
			desc: this.description.value
		}
		api.addItem(obj);

		store.STORE.adding = false;
		list.render();
	});
}

// Initializes event handlers
function initEvents() {
	handleBtnNew();
	handleFilter();
	handleToggleClick();
	handleToggleKey();
	handleBtnDelete();
	handleCancel();
	handleBtnSubmit();
	handleBtnVisit();
}

export default {
	initEvents
}