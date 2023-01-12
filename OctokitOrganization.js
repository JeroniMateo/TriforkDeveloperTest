/* /We create a fetch of our github acount where we get the data off all inside
  We can get the repos we have, our name, followers among others.
*/
fetch('https://api.github.com/users/JeroniMateo', { 

headers: {

     'Accept' : 'application/vnd.github.v3+json'

 }})

.then(response => response.json()) //Converting the response to a JSON object

.then( data => {
  console.log(data)
   const root = document.querySelector('#root');

   root.innerHTML = ` 

     <a href=${data.html_url}>Name: ${data.name}</a>

    <p>Followers : ${data.followers}</p>

 `

})

.catch( error => console.error(error));



// TODO: 1. Given an organization return the number of repositories.

/* Then we create an other fetch of our repositories to get the data that we need */

fetch('https://api.github.com/users/JeroniMateo/repos', { 

                 headers: {

                      'Accept' : 'application/vnd.github.v3+json'

                  }})

		.then(response => response.json()) //Converting the response to a JSON object
                  
		.then( data => {

                    const root = document.querySelector('#root');
                  
                    root.innerHTML = ` 

                      <a href=${data.html_url}>Name: ${data.name}</a>

                     <p>Number of repos : ${data.length}</p>
                     <p>Followers : ${data.bio}</p>
                     <p>Repositories : ${data.repositories}</p>

                  `

                })

		.catch( error => console.error(error));





// Init - Contains request body and headers and other configurations such as the request method.
// TODO: 2. Given an organization return the biggest repository (in bytes).
// TODO: 3. Return the number of organizations that are currently on Github.