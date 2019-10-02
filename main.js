'use strict';

import api from './api.js';
import store from './store.js';
import list from './list.js';
import events from './events.js';

// Load bookmarks and update store, initialize event handlers, render
function main() {
	console.log('Loaded!');

	api.getItems()
		.then((items) => {
			items.forEach((item) => store.STORE.bookmarks.push(item));
			list.renderMain();
		});
	events.initEvents();
	list.renderMain();
}

$(main());