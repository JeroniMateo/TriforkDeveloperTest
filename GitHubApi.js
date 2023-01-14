let organization = document.getElementById('OrgazinationInput').value;
let token = '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'
/**The user choose on the input select one of the GitHub organizatins */
document.getElementById('OrgazinationInput').innerHTML += `
<option value="${organization}">${organization}</option>
      
      `

/* /We create a fetch of our github acount where we get the data off all inside
We can get the repos we have, our name, followers among others.
*/


// TODO: 1. Given an organization return the number of repositories.

/* Then we create an other fetch of our repositories to get the data that we need */


  const repos = `https://api.github.com/orgs/${organization}/repos`
  
  
  fetch(repos, {
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${token}`
  }
})
.then((response) => response.json()) //Converting the response to a JSON object
/* The Data that we have when we make the fetch is an array, 
so to know how many repos we have we want to know how long is it, where every position of the array is 1 repo */
  .then((data) => {
    console.log(data)
    const root = document.querySelector('#ReposNum')
    
    root.innerHTML = ` 
    
    <p><label>Number of Repositories:</label> ${data.length}</p>
    `
    
    
  })
  
  .catch((error) => console.error(error))
  
  // Init - Contains request body and headers and other configurations such as the request method.
  
  // TODO: 2. Given an organization return the biggest repository (in bytes).
  
  
  
  
  fetch(repos, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${token}`
    }
  })
  .then((response) => response.json()) //Converting the response to a JSON object
  /* The Data that we have when we make the fetch is an array, 
  so to know how many repos we have we want to know how long is it, becouse every position of the array is 1 repo */
  .then((data) => {
    console.log(data)
    const SizesArray =[];
    
    for (let i = 0; i < data.length; i++) {
        SizesArray.push(data[i].size); 
      
    }
   
    console.log(SizesArray)
    document.getElementById('BiggestRepo').innerHTML = `
    <label>Biggest Repo: </label> <p>${SizesArray.reduce((prev, current) => (prev.y > current.y) ? prev : current)}<small>bytes</small></p>`
  })
  .catch((error) => console.error(error))
  
  
  // TODO: 3. Return the number of organizations that are currently on Github.
  
  /**If we have the array of the git hub organizations, to know how many they are, we have to do the same as we do on the first TODO;
   * we want to know the length of the array where every position of the array is 1 oranization */
  

  fetch('https://api.github.com/organizations', {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${token}`
    }
  })
  .then((response) => response.json()) //Converting the response to a JSON object
  /* The Data that we have when we make the fetch is an array, 
so to know how many repos we have we want to know how long is it, becouse every position of the array is 1 repo */
.then((data) => {
  console.log(data)
  const root = document.querySelector('#OrganizationsNum')
  
  root.innerHTML = ` 
  <p><label>Number of Organizations:</label> ${data.length}</p>  
  `
  

  })
  
  .catch((error) => console.error(error))
  


