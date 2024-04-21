import { useToast } from 'vue-toastification';

export function useGlobalToast() {
    const toast = useToast();

    const showToast = (type, message) => {
        if (typeof toast[type] === 'function') {
            toast[type](message);
        } else {
            console.error('Invalid toast type: ', type);
        }
    };

    return { showToast };
}
