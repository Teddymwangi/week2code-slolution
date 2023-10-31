document.addEventListener("DOMContentLoaded", () => {
    const animalList = document.getElementById("animal-list");
    const animalDetails = document.getElementById("animal-details");

    // Fetch animal data from the server
    fetch("https://my-json-server.typicode.com/Teddymwangi/week2code-solution")
        .then(response => response.json())
        .then(animals => {
            // Display animal names in the list
            animals.forEach(animal => {
                const listItem = document.createElement("li");
                listItem.textContent = animal.name;
                listItem.addEventListener("click", () => {
                    // Display animal details when clicked
                    showAnimalDetails(animal);
                });
                animalList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching animal data:", error));

    // Function to display animal details
    function showAnimalDetails(animal) {
        animalDetails.innerHTML = `
            <h2>${animal.name}</h2>
            <img src="${animal.image}" alt="${animal.name}">
            <p>Votes: <span id="votes">${animal.votes}</span></p>
            <button id="vote-btn">Vote</button>
        `;

        // Add event listener to vote button
        const voteBtn = document.getElementById("vote-btn");
        voteBtn.addEventListener("click", () => {
            animal.votes++;
            document.getElementById("votes").textContent = animal.votes;
        });
    }
});
