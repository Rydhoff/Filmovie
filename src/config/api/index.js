const apiKey = '4ac20ef10ad2d1cf5725fecfd31eded8';

const API = {
    fetchMovie: (page) => `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=true&page=${page ? page : 1}&with_watch_monetization_types=flatrate`,
    fetchTv: (page) => `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=${page ? page : 1}&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    fetchImage: (src) => `https://image.tmdb.org/t/p/original${src}`,
    fetchTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`,
    fetchVideo: (id) => `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=null`,
    youtube: 'https://www.youtube.com/watch?v=',
    fetchDetail: (type ,id) => `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`,
    fetchSearch: (query) => `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
}

export default API;