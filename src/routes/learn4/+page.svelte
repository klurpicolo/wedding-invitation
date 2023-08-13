<script lang="js">
	import Map from '$lib/Map.svelte';
	// export let ready;
</script>

<svelte:head>
	<script defer async
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwLN5E7HR0cLJriWyt_ckQWb-xtdFC9CU">
	</script>
</svelte:head>

<style>
:global(body) {
	padding: 0;
}
</style>

<Map></Map>

