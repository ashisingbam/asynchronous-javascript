

function makeHTTPRequest(method,url, callback){
  const xhr = new XMLHttpRequest
  xhr.responseType = 'json'
  xhr.addEventListener('load', () => {
    callback(xhr.response)
  })
  
  xhr.open(method,url)
  xhr.send()
}

makeHTTPRequest('GET','https://dummyjson.com/users', (userData) => {
  makeHTTPRequest('GET', `https://dummyjson.com/posts/user/${userData.users[0].id}`, (postsData) => {
    makeHTTPRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
      makeHTTPRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData)=> {
        console.log(userData);
      })
    })
  })
})