// function createNode(h2) {
// 	return document.createElement("h2");
// }

// function append(parent, h2) {
// 	return parent.appendChild("h2");
// }




fetch('http://api.open-notify.org/iss-now.json')
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		appendData(data);
	})

function appendData(data) {
	const main = document.getElementById("myData");
	const divvy = document.createElement("div");
	divvy.innerHTML = data.iss_position.latitude + ", " + data.iss_position.longitude;
	//try the for loop here, using i instead of this specific 0 position
	main.appendChild(divvy);
	divvy.classList.add("results");
}

// appendData();

// appendData();

	// catch((error) => console.error("fetch error:", error));

// function displayPosition(data) {
// 	const position = data
// 	const coordinates = document.getElementById("coordinates");
// 	const heading = document.createElement("h3");
// 	heading.innerHTML = position
// 	coordinates.appendChild(heading);
// }

// displayPosition()

