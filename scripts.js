let url = 'https://jsonplaceholder.typicode.com/users?userId=1';


function fetchData() {
	fetch(url)
		.then(response => response.json())
		.then(json => document.write(json))
}



