import {reactive} from 'vue';

export const store = reactive({
  movie: 'https://api.themoviedb.org/3/search/movie?api_key=b35e5259fc80aa97841e519ada2e3d64&language=it-IT&query=',
  tv: 'https://api.themoviedb.org/3/search/tv?api_key=b35e5259fc80aa97841e519ada2e3d64&language=it-IT&query=',
  list: 'https://api.themoviedb.org/3/genre/movie/list?api_key=b35e5259fc80aa97841e519ada2e3d64',
  pop: 'https://api.themoviedb.org/3/movie/popular?api_key=b35e5259fc80aa97841e519ada2e3d64&language=it-IT',
  genre: 'https://api.themoviedb.org/3/discover/movie?api_key=b35e5259fc80aa97841e519ada2e3d64&language=it-IT&with_genres=28',
  api: '',
  urlImg: 'https://image.tmdb.org/t/p/',
  page: 1,
  totalPage: 0,
  list: [],
  value: '',
  select: '',
  load: false,
  homePop: []
})