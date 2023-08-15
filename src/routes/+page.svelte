<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import { addToast } from '$lib/utils/index.js';

	let email = 'asd';

	const handleLogin = async () => {
		let loading = true;

		try {
			addToast({ message: 'Check your email for the login link!', type: 'success' });
		} catch (error) {
			if (error instanceof Error) {
				const { message } = error;
				addToast({ message, type: 'error' });
			}
		} finally {
			loading = false;
			email = '';
		}
	};
	// import { getToastStore } from '@skeletonlabs/skeleton';

	// const addToast = (options: any) => {
	// 	const toastStore = getToastStore();
	// 	const icon = '';
	// 	const { message, type } = options;
	// 	const background = type ? `variant-filled-${type}` : `variant-filled`;
	// 	toastStore.trigger({
	// 		...options,
	// 		message: 'come',
	// 		background
	// 	});
	// };
</script>

<form on:submit|preventDefault={handleLogin}>
	<button class="btn variant-outline-secondary">Press me</button>
</form>
