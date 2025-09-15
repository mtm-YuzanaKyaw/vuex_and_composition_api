import { createStore } from 'vuex';
import Post from './modules/Post';

export default new createStore({
    modules: { Post }
})