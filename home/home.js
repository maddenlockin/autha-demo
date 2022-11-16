import { checkAuth, fetchPosts, logout } from '../fetch-utils.js';

checkAuth();

const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', async () => {
    await logout();
});

window.addEventListener('load', async () => {
    const posts = await fetchPosts();
    console.log('posts', posts);
});
