import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { faStar} from '@fortawesome/free-regular-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
library.add(faStar, farStar)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
