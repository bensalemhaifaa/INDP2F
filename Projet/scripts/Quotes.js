fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "58f656ac63mshb10613b87798f03p1861bdjsn85cc140eb7e8",
		"x-rapidapi-host": "quotes15.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
	document.getElementById('quote').innerHTML = response.content;
    document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';

})
.catch(err => {
	console.error(err);
});