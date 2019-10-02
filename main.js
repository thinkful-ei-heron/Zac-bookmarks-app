'use strict';

import api from './api.js';
import store from './store.js';
import list from './list.js';
import events from './events.js';

// Load bookmarks into store, initialize event handlers, render
function main() {
	api.getItems()
		.then((items) => {
			items.forEach((obj) => store.addItem(obj));
		});
	events.initEvents();
}

$(main());