import { getToastStore } from '@skeletonlabs/skeleton';

export const addToast = (options: any) => {
	const toastStore = getToastStore();
	const icon = '';
	const { message, type } = options;
	const background = type ? `variant-filled-${type}` : `variant-filled`;
	toastStore.trigger({
		...options,
		message: `<p class="flex space-between"><span class="mr-1">${icon}</span> <span>${message}</span></p>`,
		background
	});
};
