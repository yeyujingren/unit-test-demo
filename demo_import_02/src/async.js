import axios from 'axios';

export function getUser() {
	return axios.get('http://localhost:9520')
		.then(res => res.data)
		.catch(error => console.log(error));
}

