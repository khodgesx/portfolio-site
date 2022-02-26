
async function searchGifs(event){
    event.preventDefault();
    const gif = $('#search-text').val();
    const urlString = `https://api.giphy.com/v1/gifs/search?api_key=NNDJHOgLo49VEV54gVeyLcah1e60BH0L&q=${gif}`;
    const response = await fetch(urlString);
    const results = await response.json();

    for (let i=0; i<results.data.length; i++){
        let images = results.data[i].images.fixed_width.url;
        $('#giphy-results').append(`<img src="${images}">`)
    }
}


$('#search-form').on('submit', searchGifs);