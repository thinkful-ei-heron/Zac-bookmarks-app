'use strict';

import api from './api.js';
import store from './store.js';
import list from './list.js';
import events from './events.js';

// Load bookmarks and update store, initialize event handlers, render
function main() {
	console.log('Loaded!');

	api.getItems();
		// take data and update store

	events.initEvents();
	list.renderMain();
}

$(main());