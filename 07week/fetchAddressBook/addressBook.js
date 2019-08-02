// document.getElementById("openBook").addEventListener('click', openBook)

// function openBook() {
//     fetch("https://randomuser.me/api/?results=5")
//         .then(function(data) {
//             return data.text();
//         }).then(function(print) {
//             document.getElementById("input").innerHTML = print;
//         }).catch((err) => console.log(err));
// }

document.getElementById("openBook").addEventListener('click', openBook)

function openBook() {
    console.log("is this working?")
    fetch("https://randomuser.me/api/?results=5")
        .then((res) => res.json())
            .then((data) => {
                let output = '<h2>Addresses</h2>'
                data.results.forEach(function(user) {
                    output +=
                        <ul>
                            <li>Name: $(user.name}</li>
                            
                        </ul>
                    ;
                })
                document.getElementById("input").innerHTML = output;
            })
}