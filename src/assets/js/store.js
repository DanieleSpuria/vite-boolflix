import {reactive} from 'vue';

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  apiGenresList: 'https://api.themoviedb.org/3/genre/movie/list',
  apiPop: 'https://api.themoviedb.org/3/movie/popular',
  apiImg: 'https://image.tmdb.org/t/p/',
  apiParams: {
    api_key: 'b35e5259fc80aa97841e519ada2e3d64',
    language: 'it-IT',
    query: '',
    page: 1
  },
  // page: 1,
  movie: [],
  tv: [],
  homePop: [],
  // homeGenre: {},
  genres: [],
  totalPages: 0,
  valueSelect: '',
  valueInput: '',
  search: false,
  clickCard: false,
  selectCard: [],






  // movie: 'https://api.themoviedb.org/3/search/movie?api_key=b35e5259fc80aa97841e519ada2e3d64&language=it-IT&query=',
  // tv: 'https://api.themoviedb.org/3/search/tv?api_key=b35e5259fc80aa97841e519ada2e3d64&language=it-IT&query=',
  // genre: 'https://api.themoviedb.org/3/discover/movie?api_key=b35e5259fc80aa97841e519ada2e3d64&language=it-IT&with_genres=',
  
  // api: '',
  // totalPage: 0,
  // list: [],
  // value: '',
  // select: '',
  // load: false,
  // search: false,
})