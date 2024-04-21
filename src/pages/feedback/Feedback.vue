<template>
    <div
        class="w-full max-w-container mx-auto min-h-screen flex flex-col items-center p-4 md:p-8"
    >
        <h1 class="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl mb-4 font-bold">
            Share your feedback
        </h1>

        <p class="text-center md:max-w-[70%] text-sm md:text-base mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate ab quasi
            obcaecati autem eum, aliquid maxime, molestiae sunt molestias saepe.
        </p>

        <FeedbackForm />
    </div>
</template>

<script setup>
/* The Components folder inside Feedback should contain components specific
    to the Feedback page only. Global components should be located in @/components.
*/
import FeedbackForm from '@/pages/feedback/components/FeedbackForm.vue';
</script>
