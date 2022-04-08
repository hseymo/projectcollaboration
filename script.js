// super awesome efficient code goes here

console.log('we are working')

var requestURL = 'https://www.loc.gov/search/?q=baseball&fo=json'

fetch(requestURL)
.then(function (response) {
    return response.json()
})
.then (function (data) {
    console.log(data)
})