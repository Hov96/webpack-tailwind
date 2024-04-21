<template>
    <div class="w-full relative">
        <label class="block mb-1 text-xs font-xs font-medium text-blackBlue">
            {{ label }}
            <span class="text-secondary" v-if="optional"> (Optional) </span>
        </label>
        <textarea
            class="block p-2.5 w-full text-sm text-blackBlue outline-none bg-white rounded-md border border-grey-200 focus:ring-blue-500 focus:border-blue-500 placeholder:text-grey-250"
            :class="{
                '!border-semantic !focus:border-semantic !ring-semantic': error,
                '!bg-grey-100': disabled,
            }"
            :maxlength="TEXTAREA_MAX_LENGTH"
            :placeholder="placeholder"
            :value="modelValue"
            :disabled="disabled"
            rows="8"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <div class="flex justify-between gap-2 mt-1">
            <p
                class="text-xs text-semantic font-medium flex items-center gap-1 whitespace-nowrap"
                v-if="error && errorMessage"
            >
                <img class="w-3 h-3" src="@/assets/icons/attention.png" alt="Attention" />
                {{ errorMessage }}
            </p>
            <p
                v-else-if="maxChars"
                class="w-full flex justify-end text-xs text-[#878080] leading-normal"
            >
                Remaining Characters: {{ maxChars }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { TEXTAREA_MAX_LENGTH } from '@/constants/constants.js';

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
    },
    maxChars: {
        type: Number,
    },
    optional: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    error: {
        type: Boolean,
        default: false,
    },
    errorMessage: {
        type: String,
        default: '',
    },
});
</script>
