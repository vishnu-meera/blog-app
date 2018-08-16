const ROOT_URL  = `https://reduxblog.herokuapp.com/api`;
const Pkey      = `?key=ayaan0624`;
import axios from 'axios';

export const FETCH_POSTS = 'fecth_posts'

export function fecthPosts(){
    const request = axios.get(`${ROOT_URL}/posts${Pkey}`);
    return {
        type:FETCH_POSTS,
        payload:request
    }
}