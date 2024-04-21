<template>
    <div class="w-full relative">
        <label class="block mb-1 text-xs font-xs font-medium">
            {{ label }}
            <span class="text-secondary" v-if="optional"> (Optional) </span>
        </label>
        <input
            class="bg-white border border-grey-200 placeholder:text-grey-250 text-blackBlue outline-none text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-3"
            :class="{
                '!border-semantic !focus:border-semantic !ring-semantic': error,
                'pr-8': type === 'password',
                '!bg-grey-100': disabled,
            }"
            :type="inputType"
            :placeholder="placeholder"
            :value="modelValue"
            :disabled="disabled"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <img
            v-if="type === 'password'"
            class="text-secondary absolute top-4 right-3 cursor-pointer w-6 h-6"
            src="@/assets/icons/eye.svg"
            alt="Security Icon"
            @click="onChangeInputType"
        />
        <span
            class="text-xs text-semantic font-medium flex items-center gap-1 mt-2"
            v-if="error && errorMessage"
        >
            <img class="w-3 h-3" src="@/assets/icons/attention.png" alt="Attention" />
            {{ errorMessage }}
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'text',
    },
    label: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    modelValue: {
        type: String,
        required: true,
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

const inputType = ref(props.type);

const onChangeInputType = () => {
    inputType.value = inputType.value === 'text' ? 'password' : 'text';
};
</script>
