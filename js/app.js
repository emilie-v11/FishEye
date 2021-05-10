'use strict';

class Utils {
	// Render ID by URL
	static getIdByUrl() {
		let urlId = new URLSearchParams(document.location.search).get('id');
		return urlId;
	}

	static getTagByUrl() {
		let urlTag = new URLSearchParams(document.location.search).get('tag');
		return urlTag;
	}

	// Render all datas JSON
	static getAllDatas = async url => {
		try {
			let response = await fetch(url);
			if (response.ok) {
				let photographers = await response.json();
				return photographers;
			} else {
				console.log("La requête n'a pas abouti : " + response.status);
			}
		} catch (e) {
			console.error(e);
		}
	};
}
