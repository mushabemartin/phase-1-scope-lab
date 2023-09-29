// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newFavorite) {
  bestCustomer = newFavorite;
}

const leastFavoriteCustomer = 'unwanted';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'unwanted'; // This will throw an error as you cannot reassign a constant.
}
