document.getElementById('openBook').addEventListener('click', openBook)

let checkFetch = function(response) {
    if (!response.ok) {
        throw Error(response + " - " + response.url)
    }
    return response;
}

function openBook() {
    // console.log("is this working?")
    fetch("https://randomuser.me/api/?results=5")
    .then(checkFetch)
        .then((res) => res.json())
            .then((data) => {
                let output = '<h2>Addresses</h2>'
                data.results.forEach(function(user) {
                    output +=`
                        <div>
                            <img src="${user.picture.large}">
                        </div>
                        <ul>
                            <li>Name: ${user.name.first}</li>                        
    						<li><strong>Age:</strong> ${user.dob.age}</li>
							<li><strong>Email:</strong> ${user.email}</li>
                        </ul>
                    `;
                })
                document.getElementById("input").innerHTML = output;
            })
            .catch(function(err) {
                console.log("Error")
                console.log(err)
            })
}