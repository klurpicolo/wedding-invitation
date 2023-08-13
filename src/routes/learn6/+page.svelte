<script>
	import Gal from '$lib/Gal.svelte';

	import weddingLogo from '$lib/assets/wedding-Icon.svg';
	import couple1 from '$lib/assets/couple/pic15.jpg';
	import klurBio from '$lib/assets/bio/bio-klur.png';
	import daoBio from '$lib/assets/bio/bio-dao.png';
	import bg from '$lib/assets/bg01.png';

	import locationLogo from '$lib/assets/location/location-sign-svgrepo-com.svg'
	import Map from '$lib/Map.svelte';

	import CountDown from "$lib/CountDown.svelte";

</script>

<div class="support-scrollsnap" />

<div class="scroll-container">
	<!-- <div class="background-img" style="background-image: url({bg})"> -->
	<div class="background-img">
		<div class="scroll-area flex-col md:flex-row">
			<div class="left-top">
				<img class="object-top max-h-screen" src={weddingLogo} alt="" />
			</div>
			<div class="right-buttom">
				<div
					class="text-center mx-auto font-montserrat font-light motion-safe:animate-fadeIn text-black"
				>
					<div class="text-3xl">Join us to celebate the wedding of</div>
					<div class="text-6xl">Pattaraporn</div>
					<div class="text-2xl">and</div>
					<div class="text-6xl">Warit</div>
				</div>
			</div>
		</div>
		
		<div class="scroll-area flex-col md:flex-row">
			<div class="left-top h-3/5 md:h-full">
				<div class="h-1/2 w-1/2 mr-auto ml-8 overflow-hidden mt-8">
					<div class="relative"> 
						<img src={daoBio} />
						<p class="text-xl text-black text-center font-montserrat">Pattaraporn Suwannachak(Dao)</p>
					</div>
				</div>
				<div class="h-1/2 w-1/2 ml-auto mr-8 overflow-hidden">
					<div class=""> 
						<img class="" src={klurBio} />
						<p class="text-xl text-black text-center">Warit Boonmasiri(Klur)</p>
					</div>
				</div>
			</div>
			<div class="right-buttom h-2/5 m-8">
				<div class="m-auto text-black text-xl text-center">
					<img class="h-1/2 w-4/5 m-auto mt-8 mx-auto" src={couple1} />
					<div>Save the date</div>
					<div>November 12, 2023</div>
				</div>
			</div>
		</div>

		<div class="scroll-area">
			<div class="m-8">
				<Gal />
			</div>
		</div>

		<div class="scroll-area flex-col md:flex-row py-8">
			<div class="left-top flex-col h-1/3 md:h-full w-full mx-auto">
				<div class="text-xl text-center w-fit text-black flex flex-col mx-auto">
					<img class="h-12 w-12 mx-auto" src={locationLogo}>
					<p>ณ 155-Camp หนองกลางนา</p>
					<p>อำเภอเมือง จังหวัดราชบุรี</p>
				</div>
				<div class="h-3/4 md:h-1/2 w-4/5 mx-auto shadow-xl">
					<Map></Map>
				</div>
			</div>
			<div class="right-buttom text-black text-center m-auto w-screen md:w-3/4">
				<div class="text-lg w-11/12 md:w-10/12 mx-auto">		
					<h1 class="text-center">Let’s Celebrate In…</h1>
					<div class="h-0.5 w-full bg-gray-600 my-4"></div>
					<CountDown></CountDown>
				</div>
				
				<p>Remark</p>
				<p>Thanks</p>
			</div>
		</div>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}
	.scroll-container,
	.scroll-area {
		/* width: 100vw; */
		height: 100vh;
		font-size: 60px;
		/* w-full max-w-xl */
	}

	/* refactor to md:??? instead */
	@media only screen and (min-width: 600px) {

		.left-top {
			max-width: 50%;
		}

		.right-buttom {
			max-width: 50%;
		}
	}

	.scroll-container {
		overflow: auto;
		-webkit-scroll-snap-type: y mandatory;
		-ms-scroll-snap-type: y mandatory;
		scroll-snap-type: y mandatory;
	}

	.scroll-area {
		scroll-snap-align: start;
	}

	.scroll-container,
	.scroll-area {
		margin: 0 auto;
	}

	.scroll-area {
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
	}

	/* .scroll-area:nth-of-type(1) {
		background: #49b293;
	}

	.scroll-area:nth-of-type(2) {
		background: #c94e4b;
	}

	.scroll-area:nth-of-type(3) {
		background: #4cc1be;
	}

	.scroll-area:nth-of-type(4) {
		background: #8360a6;
	} */
</style>
