'use struct'

const API_KEY = 'AIzaSyB-19hH73F7TTsc0u9o7Dp4HZzpYfgb3Rk';

// getVideo("popo")


function getVideo(value) {
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet
    &videoEmbeddable=true&type=video&key=${API_KEY}&q=${value}`);      
}