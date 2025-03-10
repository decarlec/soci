<script lang="ts">
	let { children } = $props();
	const mobileX = '375px';
	const mobileY = '667px';
</script>

<svelte:head>
	<!-- add google font reference -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Tomorrow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="mobile-container" style="width: {mobileX}; height: {mobileY};">
	{@render children()}
</div>

<style>
	.mobile-container {
		border: 2px solid #ccc;
		position: relative;
	}
</style>
