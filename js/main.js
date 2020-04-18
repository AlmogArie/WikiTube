'use strict'

var gVideoList;


function onSearch() {
    let input = document.querySelector('input').value;
   return gVideoList = getVideo(input)
        .then(res => {
            let firstVideoId = res.data.items[0].id.videoId
            renderVideo(firstVideoId)
        })
        
}

function renderVideo(videoId) {
    let elVideo = document.querySelector('.video');
    elVideo.innerHTML = `
    <iframe width="420" height="315"
src="https://www.youtube.com/embed/${videoId}">
</iframe>
    `
}

function renderVideoList(videoList){
    console.log(videoList);
    
}