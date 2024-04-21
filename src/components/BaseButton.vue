<template>
    <button
        :disabled="props.disabled"
        class="bg-blue-700 hover:disabled:bg-blue-700 border border-blue-700 hover:bg-blue-800 text-sm text-white font-medium rounded-md outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 px-2.5 py-2"
        :class="{ 'flex justify-center min-h-[38px]': loading }"
    >
        <BaseLoading small v-if="loading" />
        <span v-else>{{ label }}</span>
    </button>
</template>

<script setup>
import BaseLoading from '@/components/BaseLoading.vue';

const props = defineProps({
    label: {
        type: String,
        default: 'Click me',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
});
</script>
