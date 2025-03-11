<script>
	let { children } = $props();
</script>

{@render children()}
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="back"
	onclick={() => {
		history.back();
	}}
>
	&lt;- Back
</div>

<style>
	.back {
		bottom: 1rem;
		left: 1rem;
		position: absolute;
		font-size: medium;
	}
</style>
