const resolveBtn = document.querySelector('#resolve-btn')
const rejectBtn = document.querySelector('#reject-btn')

const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener('click', () => {
    resolve('promise resolveddd')
  })
  rejectBtn.addEventListener('click', () => {
    reject('promise rejeeeected')
  })
})

const p2 = p.then((data) => {
  console.log(data);
  return 155
})
p2.then((data) => {
  console.log(data);
  if(data) {
    throw 'Reject my promise'
  }
  return 30
}).then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
  return 40
}).then((data) => {
  console.log(data);
})
// }).catch((err) => {
//   console.log(err);
// })

// setTimeout(() => {
//   console.log('times up');
// })