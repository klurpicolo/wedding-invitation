<script>
    import cardFront from '$lib/assets/card-front.jpg';
    import cardBack from '$lib/assets/card-back.jpg';
    let flipped = false;
</script>

<div class="container">
    <button
		class="card"
		class:flipped={flipped}
		on:click={() => flipped = !flipped}
	>
        <div class="front">
            <img alt="" src={cardFront}/>
        </div>
        <div class="back">
            <img alt="" src={cardBack}/>
        </div>
    </button>
</div>

<style>
    /* .container {
		display: flex;
		flex-direction: column;
		gap: 1em;
		height: 100%;
		align-items: center;
		justify-content: center;
		perspective: 100vh;
	} */

    .card {
		position: relative;
		aspect-ratio: 2.5 / 3.5;
		/* font-size: min(1vh, 0.25rem); */
		height: 80em;
		/* background: var(--bg-1); */
		/* border-radius: 2em; */
		transform: rotateY(0deg);
		transition: transform 1s;
		transform-style: preserve-3d;
		padding: 0;
		user-select: none;
		cursor: pointer;
	}
    .card.flipped {
		transform: rotateY(180deg);
	}

    .front, .back {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		backface-visibility: hidden;
		border-radius: 2em;
		border: 1px solid var(--fg-2);
		box-sizing: border-box;
		padding: 2em;
	}

    .back {
		transform: rotateY(180deg);
	}
</style>