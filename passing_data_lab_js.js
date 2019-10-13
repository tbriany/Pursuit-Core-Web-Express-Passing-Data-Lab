document.addEventListener('DOMContentLoaded', () => {
    listenToGifBtn();
    listenToImgBtn();
})

const listenToGifBtn = () => {
  let gifBtn = document.querySelector("#gifBtn")
   gifBtn.addEventListener('click', getGifs)
}

const listenToImgBtn = () => {
    let imgBtn = document.querySelector("#imgBtn")
    imgBtn.addEventListener('click', getImgs)
}

const getGifs = () => {
  let userSearch = document.querySelector('#text').value 
  let url = `http://localhost:3000/gif/?search=${userSearch}`
  fetch(url)
  .then(response => response.json())
  .then(data => displayResults(data))
}

const getImgs = () => {
    let userSearch = document.querySelector('#text').value 
  let url = `http://localhost:3000/image/?search=${userSearch}`
  fetch(url)
  .then(response => response.json())
  .then(data => displayResults(data))
}

const displayResults = (data) => {
  console.log(data)
  let dataArr = data 
  
  for (let i = 0; i < dataArr.length; i++){
     let results = dataArr[i]
     let newImg = document.createElement('img')
     newImg.src = results 
     let resultsDiv = document.querySelector("#results")
     resultsDiv.append(newImg)
  }
}