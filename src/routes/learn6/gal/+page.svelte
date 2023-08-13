<script>
	import qr from '$lib/assets/location/qr.svg';
	import locationIcon from '$lib/assets/location/location-sign-svgrepo-com.svg';
	import Map from '$lib/Map.svelte';

	import AudioPlayer, { stopAll } from './AudioPlayer.svelte'
  
  let audioTracks = [
	'https://sveltejs.github.io/assets/music/strauss.mp3',
	'https://sveltejs.github.io/assets/music/holst.mp3',
	'https://sveltejs.github.io/assets/music/satie.mp3'
  ]
</script>

<svelte:head>
	<script defer async
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwLN5E7HR0cLJriWyt_ckQWb-xtdFC9CU">
	</script>
</svelte:head>

  
  <button on:click={stopAll}>
	Stop all!
  </button>
  
  {#each audioTracks as src}
	<AudioPlayer {src} />
  {/each}

<div class="scroll-container">
	<div class="scroll-area bg-red-500 flex flex-col">
		<div>
			Dress code
			<div class="flex">
				<div class="bg-green-500 rounded-full w-16 h-16"></div>
				<div class="bg-green-500 rounded-full w-16 h-16"></div>
				<div class="bg-green-500 rounded-full w-16 h-16"></div>
				<div class="bg-green-500 rounded-full w-16 h-16"></div>
				<div class="bg-green-500 rounded-full w-16 h-16"></div>
			</div>
			
		</div>
		<div>
			<img class="w-16 items-center" src={locationIcon} alt=""/>
			<div class="text-sm w-80">
				ณ 155-Camp หนองกลางนา
				อำเภอเมือง จังหวัดราชบุรี
				วันอาทิตย์ที่ 12 พฤศจิกายน พ.ศ. 2566
			</div>
			<button class="bg-yellow-300 border-solid border-2 border-zinc-200 rounded-md text-sm">
				<a class="w-fit" href="https://goo.gl/maps/mZdSb7zPrU9CNXAZ8" target="_blank">Get the location</a>
			</button>
		</div>
		<Map></Map>
	</div>
	
	<div class="scroll-area bg-emerald-500">
		2
	</div>
</div>


<style>
	.scroll-container,
	.scroll-area {
		/* width: 100vw; */
		height: 100vh;
		font-size: 60px;
		/* w-full max-w-xl */
	}
	.scroll-area {
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
	}
</style>
