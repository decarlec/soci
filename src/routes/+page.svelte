<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
<a href="setup/info" class="message-container">
	<div class="message main">Welcome to Soci<br />-&gt;</div>
	<div class="shadow ms2 message">Welcome to Soci<br />-&gt;</div>
	<div class="shadow ms3 message">Welcome to Soci<br />-&gt;</div>
	<div class="shadow ms4 message">Welcome to Soci<br />-&gt;</div>
</a>

<style lang="scss">
	.message {
		//default text settings
		color: black;
		font-size: x-large;
		font-weight: 600;
		font-family: 'Tomorrow';

		//center content
		text-align: center;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		//Provides a soft border seperation for the flicker text
		filter: drop-shadow(-1px 1px 1px white) drop-shadow(-2px 2px 2px white)
			drop-shadow(-1px 1px 1px white);

		//apply clicker animation
		animation: flicker 3s linear infinite;
		animation-play-state: paused;
		&:hover {
			animation-play-state: running;
			transform: translate(-50%, -50%) scale(1.05) rotate(2deg);
		}
	}

	.main {
		z-index: 100;
	}

	//ms* shadows
	.ms2 {
		animation: flicker 3s linear infinite;
		font-size: x-large;
		position: absolute;
		transform: translate(-50%, -42%) skewY(-1deg);
		color: rgb(37, 94, 218);
		z-index: 4;
	}
	.ms3 {
		animation: flicker 1s linear infinite;
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

	//flicker animation
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
</style>
