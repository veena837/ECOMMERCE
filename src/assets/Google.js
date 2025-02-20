document.getElementById('searchButton').addEventListener('click', function () {
    const query = document.getElementById('searchInput').value;
  
    // Check if there's a search query
    if (query) {
      displaySearchResults(query);
    } else {
      alert("Please enter a search term!");
    }
  });
  
  function displaySearchResults(query) {
    const resultContainer = document.getElementById('searchResult');
    
    // Clear previous search results
    resultContainer.innerHTML = "";
  
    // Simulate search result display (you can customize this as per need)
    const resultHeading = document.createElement('h2');
    resultHeading.textContent = "Search results for: " + query;
    
    const resultDescription = document.createElement('p');
    resultDescription.textContent = "Here are some results for your search on '" + query + "'.";
  
    // Simulate a few result links
    const resultLink1 = document.createElement('a');
    resultLink1.href = "#";
    resultLink1.textContent = "Result 1 - More info about " + query;
    
    const resultLink2 = document.createElement('a');
    resultLink2.href = "#";
    resultLink2.textContent = "Result 2 - Explore further on " + query;
  
    resultContainer.appendChild(resultHeading);
    resultContainer.appendChild(resultDescription);
    resultContainer.appendChild(resultLink1);
    resultContainer.appendChild(document.createElement('br'));  // Break line
    resultContainer.appendChild(resultLink2);
  }
  