'use strict';

//import api from './api';
//import store from './store';
//import list from './list';

// Load bookmarks and update store, initialize event handlers, render
function main() {
	console.log('Locked and loaded!');
	$('h1').text('IMPORT SUCCESSFUL');

	api.getItems();
		// take data and update store

	list.initializeEvents();
	list.render();
}

$(main());