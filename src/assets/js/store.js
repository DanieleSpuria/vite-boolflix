import {reactive} from 'vue';

export const store = reactive({
  Movie: 'https://api.themoviedb.org/3/search/movie?api_key=b35e5259fc80aa97841e519ada2e3d64&language=it-IT&query=',
  Tv: 'https://api.themoviedb.org/3/search/tv?api_key=b35e5259fc80aa97841e519ada2e3d64&language=it-IT&query=',
  api: '',
  page: 1,
  totalPage: 0,
  list: [],
  value: '',
  select: ''
})