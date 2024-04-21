<template>
    <div class="w-full">
        <label :for="`select-${unique}`" class="block mb-1 text-xs font-medium text-blackBlue">
            {{ label }}
            <span class="text-secondary font-normal" v-if="optional"> (Optional) </span>
        </label>
        <select
            :id="`select-${unique}`"
            :disabled="disabled"
            class="bg-white border border-grey-200 placeholder:text-grey-250 text-blackBlue outline-none text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-3"
            :class="{
                '!border-semantic !focus:border-semantic !ring-semantic': error,
                '!bg-grey-100': disabled,
            }"
            @change="$emit('onChange', $event.target.value)"
        >
            <option
                :value="option.value"
                :selected="option.value?.toString() === value?.toString()"
                v-for="option in options"
                :key="option.value"
                :disabled="option.disabled"
            >
                {{ option.label }}
            </option>
        </select>
        <span
            class="text-xs text-semantic flex items-center gap-1 mt-2"
            v-if="error && errorMessage"
        >
            <img class="w-3 h-3" src="@/assets/icons/attention.png" alt="Attention" />
            {{ errorMessage }}
        </span>
    </div>
</template>

<script setup>
const props = defineProps({
    options: {
        type: Array,
        default: () => [],
    },
    label: {
        type: String,
        default: 'Default label',
    },
    value: {
        type: String,
        default: '',
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
const unique = Date.now();
</script>
