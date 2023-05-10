

function makeHTTPRequest(method,url){
  const xhr = new XMLHttpRequest
  xhr.responseType = 'json'

  const promise = new Promise((resolve, reject) => {
    xhr.addEventListener('load', () => {
      resolve(xhr.response)
    })
    xhr.addEventListener('error', () => {
      reject('promise rejected')
    })
    
  })


  xhr.open(method,url)
  xhr.send()

  return promise
}

makeHTTPRequest('GET','https://dummyjson.com/users')
  .then((userData) => makeHTTPRequest('GET', `https://dummyjson.com/posts/user/${userData.users[0].id}`))
  .then((postsData) => makeHTTPRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
  .then((commentsData) => makeHTTPRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
  .then((userData) => {
    console.log(userData);
  })
  .catch((err) => {
    console.log(err);
  })

// makeHTTPRequest('GET','https://dummyjson.com/users', (userData) => {
//   console.log('userData: ', userData);
//   makeHTTPRequest('GET', `https://dummyjson.com/posts/user/${userData.users[0].id}`, (postsData) => {
//     console.log('postsData: ', postsData);
//     makeHTTPRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
//     console.log('commentsData: ', commentsData);
//       makeHTTPRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData)=> {
//         console.log(userData);
//       })
//     })
//   })
// })