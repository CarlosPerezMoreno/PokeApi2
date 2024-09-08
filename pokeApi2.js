// Function to fetch and display Pokémon information
/*Declare the function */
    /* Getting and storing data from HTML */ = document.getElementById('pokemon-name').value.toLowerCase();
    /* Getting and storing data from HTML */

    // Clear previous results
    pokemonInfoDiv.innerHTML = '';

    // Fetch data from PokéAPI
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            // Display Pokémon info
            const pokemonHTML = `
                <h2>${capitalizeFirstLetter(data.name)} (#${data.id})</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <div class="stat"><strong>Type:</strong> ${data.types.map(type => capitalizeFirstLetter(type.type.name)).join(', ')}</div>
                <div class="stat"><strong>Height:</strong> ${data.height / 10} m</div>
                <div class="stat"><strong>Weight:</strong> ${data.weight / 10} kg</div>
                <div class="stat"><strong>Abilities:</strong> ${data.abilities.map(ability => capitalizeFirstLetter(ability.ability.name)).join(', ')}</div>
                <div class="stat"><strong>Base Experience:</strong> ${data.base_experience}</div>
                <div class="stat"><strong>Stats:</strong>
                    <ul>
                        ${data.stats.map(stat => `<li>${capitalizeFirstLetter(stat.stat.name)}: ${stat.base_stat}</li>`).join('')}
                    </ul>
                </div>
            `;
            /* Store your Pokemon Info here */
        })
        .catch(error => {
            pokemonInfoDiv.innerHTML = `<p class="error">Error: ${error.message}</p>`;
        });
/*Declare the function */

// Helper function to capitalize the first letter
/*Create a function that capitalizes the First Letter of a string here */
