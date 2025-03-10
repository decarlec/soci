<script lang="ts">
	const mobileX = '375px';
	const mobileY = '667px';
	let clicked = false;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Tomorrow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<div class="mobile-container" style="width: {mobileX}; height: {mobileY};">
	<div class="message-container" on:click={() => (clicked = !clicked)} class:active={clicked}>
		<div class="message main">Welcome to Soci<br />-&gt;</div>
		<div class="shadow ms1 message">Welcome to Soci<br />-&gt;</div>
		<div class="shadow ms2 message">Welcome to Soci<br />-&gt;</div>
		<div class="shadow ms3 message">Welcome to Soci<br />-&gt;</div>
		<div class="shadow ms4 message">Welcome to Soci<br />-&gt;</div>
	</div>
</div>

<style lang="scss">
	.mobile-container {
		border: 2px solid #ccc;
		position: relative;

		.message-container:hover .shadow {
			opacity: 1;
		}

		.message-container.active {
			color: white;
		}

		.message {
			animation: flicker 3s linear infinite;
			color: black;
			font-size: x-large;
			font-weight: 500;
			font-family: 'Tomorrow';
			text-align: center;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			filter: drop-shadow(-1px 1px 1px white) drop-shadow(-2px 2px 2px white)
				drop-shadow(-1px 1px 1px white);
		}

		.shadow {
			opacity: 0;
		}

		.main {
			z-index: 100;
		}

		.ms1 {
			font-size: x-large;
			font-weight: 700;
			position: absolute;
			transform: scale(1.1) translate(-49%, -46%);
			color: white;
			z-index: 5;
		}
		.ms2 {
			font-size: x-large;
			position: absolute;
			transform: translate(-50%, -42%) skewY(-1deg);
			color: rgb(37, 94, 218);
			z-index: 4;
		}
		.ms3 {
			font-size: x-large;
			position: absolute;
			transform: translate(-51%, -40%) skewY(-8deg);
			color: rgb(233, 20, 127);
			z-index: 3;
		}
		.ms4 {
			font-size: x-large;
			position: absolute;
			transform: translate(-55%, -35%) skewY(-13deg) scale(0.9);
			color: rgb(75, 234, 245);
			z-index: 2;
		}

		@keyframes flicker {
			0%,
			19%,
			22%,
			62%,
			64%,
			70%,
			100% {
				opacity: 0.99;
				text-shadow:
					-1px -1px 0 rgba(255, 255, 255),
					1px -1px 0 rgba(255, 255, 255),
					-1px 1px 0 rgba(255, 255, 255),
					1px 1px 0 rgba(255, 255, 255);
			}
			20%,
			21%,
			63%,
			65%,
			69.9% {
				opacity: 0.4;
				text-shadow: none;
			}
		}
	}
</style>
