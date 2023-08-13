<script lang="ts">
	let container: HTMLElement;
	let map: google.maps.Map;
    let marker2
	let zoom = 15;
	let center = { lat: 13.6099959, lng: 99.7975365 };

	// const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

	import { onMount } from 'svelte';

	onMount(async () => {
		map = new google.maps.Map(container, {
			zoom,
			center
			//    styles: mapStyles // optional
		});

		marker2 = new google.maps.Marker({
			position: center,
			map,
			title: 'Dao and Klur wedding',
            label: 'Dao and Klur wedding @ Camp155'
		});
	});
</script>

<div class="h-full w-full max-w-screen-md round" bind:this={container} />

<style>
	/* .full-screen {
		width: 100vw;
		height: 100vh;
	} */

    /* .full-screen {
		width: 80%;
		height: 20rem;
        margin: auto;
	} */
</style>
