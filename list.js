import store from './store.js';

// Generate HTML for the list
function genList() {
	let bookmarks = store.STORE.bookmarks;
	let output = '';
	for (let i = 0; i < bookmarks.length; i++) {
		if (bookmarks[i].rating >= store.STORE.filter) {
			if (bookmarks[i].expanded === false) {
				output += `<li tabindex='0' class='bookmark' id='${bookmarks[i].id}'>${bookmarks[i].title} - ${bookmarks[i].rating} stars</li>`;
			}
			else {output += `
				<li tabindex='0' class='bookmark' id='${bookmarks[i].id}'>${bookmarks[i].title}
					<button type='button' role='button' name='delete' class='btn-delete'>Delete</button>
				</li>
				<div class='expansion'>
					<button type='button' role='button' name='visit site' class='btn-visit'>Visit Site</button>
					<span>${bookmarks[i].rating} stars</span>
					<article>${bookmarks[i].desc}</article>
				</div>
			`;}
		}
	};
	return output;
}

// Render bookmark list
function renderList() {
	$('.container').html(`
		<button type='button' role='button' name='new bookmark' class='new top-btn'>New Bookmark</button>
		<select name='rating filter' class='filter top-btn'>
			<option value=0>Rating Filter</option>
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
	$('.container').html(`
		<form>
			<label for='url'>New Bookmark URL:</label>
			<input type='url' name='url' id='url' required>
			<label for='name'>New Bookmark Name:</label>
			<input type='text' name='name' id='name' required>
			<label for='rating'>Rating:</label>
				<label for='star1' class='radioLabel'>1</label>
				<input type='radio' name='rating' value='1' class='radio' id='star1' required></input>
				<label for='star2' class='radioLabel'>2</label>
				<input type='radio' name='rating' value='2' class='radio' id='star2' required></input>
				<label for='star3' class='radioLabel'>3</label>
				<input type='radio' name='rating' value='3' class='radio' id='star3' required></input>
				<label for='star4' class='radioLabel'>4</label>
				<input type='radio' name='rating' value='4' class='radio' id='star4' required></input>
				<label for='star5' class='radioLabel'>5</label>
				<input type='radio' name='rating' value='5' class='radio' id='star5' required></input>
			<textarea rows='6' cols='80' name='description' placeholder='Link description (optional)'></textarea>
			<button type='button' role='button' name='cancel' class='cancel bottom-btn'>Cancel</button>
			<input type='submit' value='Create' class='bottom-btn'>
		</form>	
	`)
}

// Render container according to the current state
function render() {
	if (store.STORE.adding === false) renderList();
	else renderForm();
}

export default {
	render,
};