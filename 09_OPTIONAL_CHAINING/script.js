const user = {
  firstName: 'Ashi',
  lastName: 'Singh',
  age: 23,
  address: {
    input: 'string city'
  },
  // getFullName: function() {
    // return `${user.firstName} ${user.lastName}`
  // }
}
const cityName = 'input'
// console.log(user.address?.city);
console.log(user.address?.[cityName]);
console.log(user.getFullName?.());

// function printCustomerCity(customer) {
//   const customerCity = customer?.city ?? "Unknown city";
//   console.log(customerCity);
// }

// printCustomerCity({
//   name: "Nathan",
//   city: "Paris",
// }); // "Paris"
// printCustomerCity({
//   name: "Carl",
//   details: { age: 82 },
// }); // "Unknown city"