/* /We create a fetch of our github acount where we get the data off all inside
We can get the repos we have, our name, followers among others.
*/

//We create our personal github token
let token = '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'

/**We create this function after the user select the organization.
 * When the user click to choose the organization we call the function get Organization that makes 2 fetch's
 * 1. return the number of repositories that have the organization
 * 2. Return the repo that have more bytes*/
function getOrganization() {
  //We get the value of the selection of the Organization
  let organization = document.getElementById('OrganizationsListSelect').value

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
      /*This fetch we serch the size ot every repo and we store in Array, and we get the biggest one */
      const SizesArray = []

      for (let i = 0; i < data.length; i++) {
        SizesArray.push(data[i].size)
      }

      document.getElementById('BiggestRepo').innerHTML = `
    <p><label>Biggest Repo: </label> ${SizesArray.reduce((prev, current) =>
      prev.y > current.y ? prev : current
    )}<small> bytes</small></p>`
    })
    .catch((error) => console.error(error))

  // TODO: 3. Return the number of organizations that are currently on Github.

  /*If we have the array of the git hub organizations, to know how many they are, we have to do the same as we do on the first TODO;
   * we want to know the length of the array where every position of the array is 1 oranization */
}
/*This fetch return the number of organizations of github, and we inner every organization on each select option*/
let organization = document.getElementById('OrganizationsListSelect').value
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
    const root = document.querySelector('#OrganizationsNum')

    root.innerHTML = ` 
    <p><label>Number of Organizations:</label> ${data.length}</p>  
    `

    for (let i = 0; i < data.length; i++) {
      document.getElementById(
        'OrganizationsListSelect'
      ).innerHTML += `<option value="${data[i].login}">${data[i].login}</option>`
    }
  })

  .catch((error) => console.error(error))
