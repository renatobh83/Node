const selectElement = document.querySelector('#view');

selectElement.addEventListener('change', (event) => {
 
//  fetch(`/viewFilter/${event.target.value}`).then(response => {
//     response.json().then(function(data) {
//         console.log(data);
//       });
//  })
    window.location.replace(`/viewFilter/${event.target.value}`)
});