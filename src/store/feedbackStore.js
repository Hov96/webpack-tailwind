import { defineStore } from 'pinia';
import { useGlobalToast } from '@/utils/useGlobalToast.js';

const { showToast } = useGlobalToast();

export const useFeedbackStore = defineStore('feedbackStore', {
    state: () => ({
        feedback: {
            data: {},
            loading: false,
            error: false,
        },
    }),
    getters: {
        getFeedbackData: (state) => state.feedback.data,
        getFeedbackLoading: (state) => state.feedback.loading,
        getFeedbackError: (state) => state.feedback.error,
    },
    actions: {
        async handleSubmitFeedback(payload) {
            this.feedback.loading = true;

            // Imitate asynchronous request
            await new Promise((resolve) => {
                setTimeout(() => {
                    this.feedback.data = payload;
                    showToast('success', 'Your feedback sent successfully');
                    this.feedback.loading = false;
                    resolve();
                }, 2000);
            });
        },
    },
});
