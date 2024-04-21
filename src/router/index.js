import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        // Since we only have one page, I set the feedback page as the default page.
        path: '/',
        name: 'feedback',
        component: () =>
            import(/* webpackChunkName: "feedback" */ '../pages/feedback/Feedback.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
