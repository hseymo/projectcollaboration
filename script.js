// super awesome efficient code goes here

function getApi() { 

    var requestUrl = 'https://www.loc.gov/search/?q= ';
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    console.log(requestUrl);
}