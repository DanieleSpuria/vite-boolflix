import {reactive} from 'vue';

export const store = reactive({
  api: 'https://api.themoviedb.org/3/search/movie?api_key=b35e5259fc80aa97841e519ada2e3d64&language=it-IT&query=',
  page: 1,
  listFilm: [],
  valueFilm: ''
})