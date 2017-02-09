import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable() 
export class GithubService {
	private username: string;
	private client_id = 'ac681828642f6c9742a6';
	private client_secret = '2e178f524a8340056ef2fcad9d2fa446da893f08'

	constructor(private http: Http) {
		console.log('Github service ready')
		this.username = 'bigless27';
	}

	getUser() {
		return this.http.get('http://api.github.com/users/' + this.username + '?clinet_id=' + this.client_id + '&client_secret=' + this.client_secret)
			.map(res => res.json());
	}

	getRepos() {
		return this.http.get('http://api.github.com/users/' + this.username + '/repos?clinet_id=' + this.client_id + '&client_secret=' + this.client_secret)
			.map(res => res.json());
	}

	updateUser(username:string) {
		this.username = username;
	}
}