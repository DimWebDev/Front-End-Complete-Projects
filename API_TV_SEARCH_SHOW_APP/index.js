const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const userInput = form.elements.query.value; // in this way
    //I am extacting the user input into a variable
    //----API request with axios
    
    // In the following line an asyncrhonous API request is made to this end point
    // which is complemented by the user input, in order to match
    // the search of the user
    const config = {params: {q: userInput}} //this will be added to the axios.get request as parameter
    const res = await axios.get('https://api.tvmaze.com/search/shows?', config);
    //In this object (res.data)  there are available the items(tv shows) that we are interested in.
    makeImage(res.data);
    
})

//Function to loop through the data of the API response, in order to 
// display their content on the browser
const makeImage = (shows) => {
    for (let result of shows) {
        if(result.show.image) {
        const img =document.createElement('img')
        img.src = result.show.image.medium;//this line of code assigns the a source to the src attribute of the img element
        document.body.append(img)
        }
    }
}



