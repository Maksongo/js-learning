// Weather API

const key = 'Miz1PBG3gbDUqWkG8RMo4UNr1Og2EIAO';

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

getCity('manchester')
    .then(data => console.log(data))
    .catcg(err => console.log(err));