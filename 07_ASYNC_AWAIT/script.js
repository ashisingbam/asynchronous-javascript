async function makeAsyncRequest() {
  // return 'hello'
  // throw new Error("promise rejected - error")
  const url = 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=4000'
  const responseData = await fetch(url)
  console.log(responseData);
  const data = await responseData.json()
  console.log(data);
  console.log('hi');
}

// function makeAsyncRequest() {
  // return 'hello'
  // throw new Error("promise rejected - error")
  // const url = 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=4000'
  // const responseData = await fetch(url)
  // console.log(responseData);
  // const data = await responseData.json()
  // console.log(data);
  // console.log('hi');
// }
// makeAsyncRequest()





// function addTwoNumbers() {
//   return 5 + 8
// }

// function handleResponse(data) {
//   // Handle the response data here
// }

// const script = document.createElement('script');
// script.src = 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=5000&callback=handleResponse';
// document.body.append(script);


// function hi() {
//   throw new Error("this is error")
//   console.log("hello ji")
// }

