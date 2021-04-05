class Utils {
	// obtenir l'id par l'url

	static getIdByUrl() {
		let urlId = new URLSearchParams(document.location.search).get('id');
		return urlId;
	}

	static getAllPhotographers = async url => {
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
