import noteApp from './missKeep/pages/note-app.cmp.js';

const routes = [
    { path: '/', component: noteApp }
];

export const router = new VueRouter({ routes });