<template>
    <div class="flex flex-col gap-4 w-full max-w-[400px]">
        <BaseInput
            v-model="payload.name"
            label="Name"
            placeholder="Name"
            :error="v$.name.$error"
            :errorMessage="getNameErrorMessage"
        />
        <BaseInput
            v-model="payload.email"
            label="Email"
            placeholder="Email"
            :error="v$.email.$error"
            :errorMessage="getEmailErrorMessage"
        />
        <BaseSelect
            :value="payload.theme"
            label="Theme"
            :options="themeOptions"
            :error="v$.theme.$error"
            errorMessage="This field is required"
            @onChange="(value) => (payload.theme = value)"
        />
        <BaseTextarea
            v-model="payload.message"
            label="Message"
            placeholder="Message"
            :error="v$.message.$error"
            :errorMessage="getMessageErrorMessage"
            :maxChars="TEXTAREA_MAX_LENGTH - payload.message.length"
        />

        <BaseButton
            label="Send Feedback"
            :disabled="v$.$error || feedbackStore.getFeedbackLoading"
            :loading="feedbackStore.getFeedbackLoading"
            @click="submitData"
        />
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import { themeOptions, TEXTAREA_MAX_LENGTH } from '@/constants/constants.js';
import { useVuelidate } from '@vuelidate/core';
import { required, email, maxLength } from '@vuelidate/validators';
import { useFeedbackStore } from '@/store/feedbackStore.js';

// Components
import BaseInput from '@/components/BaseInput.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseTextarea from '@/components/BaseTextarea.vue';
import BaseButton from '@/components/BaseButton.vue';

const feedbackStore = useFeedbackStore();

const payload = reactive({
    name: '',
    email: '',
    theme: '',
    message: '',
});

const rules = computed(() => ({
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    theme: { required },
    message: { required, maxLength: maxLength(TEXTAREA_MAX_LENGTH) },
}));

const v$ = useVuelidate(rules, payload);

const submitData = async () => {
    v$.value.$touch();
    if (!v$.value.$invalid) {
        await feedbackStore.handleSubmitFeedback(payload);
        resetFields();
        v$.value.$reset();
    }
};

const resetFields = () => {
    for (const key in payload) {
        payload[key] = '';
    }
};

const getNameErrorMessage = computed(() => {
    return v$.value.name.required.$invalid
        ? 'This field is required'
        : 'Maximum 20 characters allowed';
});
const getEmailErrorMessage = computed(() => {
    return v$.value.email.required.$invalid ? 'This field is required' : 'Invalid email';
});
const getMessageErrorMessage = computed(() => {
    return v$.value.message.required.$invalid
        ? 'This field is required'
        : `Maximum ${TEXTAREA_MAX_LENGTH} characters allowed`;
});
</script>
