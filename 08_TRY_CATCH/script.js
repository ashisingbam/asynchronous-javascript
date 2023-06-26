const user = {
  name: 'Ashi', 
  age: 23
}

try {
  console.log(user.address.city);
  // console.log(a);
} catch(err) {
  console.dir(err);
} finally {
  console.log('hello world');
}
// console.log(3+7);
// console.log('hello');