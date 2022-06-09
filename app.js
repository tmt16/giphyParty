function appendImage(res) {
    arrLength = res.data.length;

    function getRandomInt(num) {
        return Math.floor(Math.random() * num)
    }

    if (arrLength) {
        randomInt = getRandomInt(arrLength);
        let randomGif = $('<img>').attr('src', res.data[getRandomInt(arrLength)].images.original.url);
        $('#image-div').append(randomGif)
    }
}

async function getGiphy() {
    let searchWord = $("#searchWord").val();
    $("#searchWord").val("");
    const res = await axios.get('https://api.giphy.com/v1/gifs/search',
        {params: {
        q: searchWord,
        api_key : "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" 
        } });

    console.log(res.data);    
    appendImage(res.data);
}

$('#submit').on("click", function(event) {
    event.preventDefault();
    if(!$("#searchWord").val()) {
        alert("Enter a search term.")
    } else{
        getGiphy()
    }
})

$( "#delete" ).click(function() {
    $( "div" ).remove();
  });