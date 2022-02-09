/*for calculating how many pages are needed to be included (For example, if there are 33 students there
must be 3 pages shown, if there are 85 students, there will be 8 pages, etc.)*/

var arrFullPage = Array.from(document.querySelectorAll(".contact-item"))

var numberOfContacts= arrFullPage.length;
var contactsPerPage = 10;
var numberOfPages = (numberOfContacts/contactsPerPage);
var remainderContacts = numberOfContacts%contactsPerPage;
/*
const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 10;

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('div');
		//item_element.classList.add('item');
		item_element.innerText = item;
        arrFullPage[item].style.display = "block";

		
		wrapper.appendChild(item_element);
	}
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

DisplayList(arrFullPage, list_element, rows, current_page);
SetupPagination(arrFullPage, pagination_element, rows);*/
