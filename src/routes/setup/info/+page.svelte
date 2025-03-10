<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="text" style:font-family="Tomorrow">
	<p>We'd like to hear about your interests...</p>
	<p>So we can find people similar to you.</p>
	<a href="/setup/collect">Continue-&gt; </a>
	<br />
	<br />
	<a class="back" href="/">&lt;- Back</a>
</div>

<style>
	.text {
		font-size: large;
		font-weight: 400;
		text-align: center;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.back {
		font-size: medium;
	}
</style>
