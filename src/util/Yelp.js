const apiKey = 'qdLsUMZi7gWTEkxrjP9wFw';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`);
    }
}