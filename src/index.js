console.log('%c HI', 'color: firebrick')

function getImageApi(){
fetch('https://dog.ceo/api/breeds/image/random/4')
.then(resp => resp.json())
.then(json => { 
  for( const imgUrl in json.message){
  console.log(json.message[imgUrl])
  const images = document.querySelector("#dog-image-container")
    
    images.innerHTML = images.innerHTML + `<img src=${json.message[imgUrl]}>`
    
    }
  })
}
getImageApi()
