<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let interests = ['skiing', 'diving', 'EPL', 'nascar'];
	let searchTerm = $state('');
	let filtered = $derived(interests.filter((a) => a.includes(searchTerm) && !selected.includes(a)));
	let selected: Array<string> = $state([]);
</script>

<div class="text" style:font-family="Tomorrow">
	<div id="search-input-container">
		<input
			type="text"
			id="search-field"
			placeholder="What do you like to talk about?"
			bind:value={searchTerm}
		/>
	</div>
	<ul>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		{#each filtered as interest}
			<li
				onclick={() => {
					selected = selected.concat(interest);
				}}
			>
				{interest}
			</li>
		{/each}
	</ul>

	<h3>Interests:</h3>
	<ul>
		{#each selected as select}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<li
				onclick={() => {
					delete selected[selected.indexOf(select)];
				}}
			>
				{select}
			</li>
		{/each}
	</ul>
</div>

<style>
	#search-field {
		text-align: center;
		width: 100%;
	}
</style>
