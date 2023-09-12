<script>
	import weddingLogo from '$lib/assets/signature2.svg';
	import bg from '$lib/assets/bg1_com.png';

	import KlurAndDao from '$lib/KlurAndDao.svelte';
	import bg4 from '$lib/assets/bg4_com.png';
	import bg5 from '$lib/assets/bg5_com.jpeg';

	import Gal from '$lib/Gal2.svelte';

	import TimeLine from '$lib/TimeLine.svelte';

	import locationLogo from '$lib/assets/location/location-sign-svgrepo-com.svg';
	import Map from '$lib/Map.svelte';
	import CountDown from '$lib/CountDown.svelte';
</script>

<div class="support-scrollsnap" />

<div class="scroll-container">
	<div
		class="scroll-area flex-col md:flex-row bg-cover bg-bottom"
		style="background-image: url({bg})"
	>
		<div
			class="h-5/6 w-5/6 rounded-t-full md:rounded-t-3xl md:rounded-b-3xl backdrop-saturate-200 bg-white/50 flex flex-col md:flex-row p-2"
		>
			<div class="h-fit md:h-full w-fit left-top z-10 flex justify-center items-center">
				<img class="object-contain" src={weddingLogo} alt="" />
			</div>
			<div class="right-buttom flex flex-col justify-center mx-auto">
				<div
					class="text-center flex flex-col justify-center items-center motion-safe:animate-fadeIn text-black font-calligraphy"
				>
					<div class="text-3xl md:text-4xl mt-1">Join us to celebate</div>
					<div class="text-3xl md:text-4xl">the wedding of</div>
					<div class="text-4xl md:text-5xl mt-[10%]">Pattaraporn</div>
					<div class="text-xl my-1">&</div>
					<div class="text-4xl md:text-5xl">Warit</div>
				</div>
			</div>
		</div>
	</div>

	<div class="scroll-area bg-white flex flex-row relative">
		<KlurAndDao img1={bg4} img2={bg5} />
	</div>

	<div class="scroll-area">
		<div class="h-full mx-4 md:mx-20 flex justify-center items-center">
			<Gal />
		</div>
	</div>

	<div class="scroll-area flex-col pt-8">
		<div class="h-1/6 w-fulltext-center">
			<p class="my-auto text-black font-kanit">Timeline</p>
		</div>
		<TimeLine></TimeLine>
	</div>

	<div class="scroll-area flex flex-col md:flex-row py-8">
		<div class="left-top flex-col h-1/2 md:h-full w-full mx-auto">
			<!-- <div class="text-base text-center w-fit text-black flex flex-col mx-auto my-4">
				<img class="h-12 w-12 mx-auto" src={locationLogo} />
				<p>ณ 155-Camp หนองกลางนา</p>
				<p>อำเภอเมือง จังหวัดราชบุรี</p>
			</div> -->
			<img class="h-8 w-8 mx-auto" src={locationLogo} />
			<div class="h-3/4 md:h-1/2 w-4/5 mx-auto shadow-xl">
				<Map />
				<div class="text-base text-center w-fit text-black flex flex-col mx-auto my-4">
					<div class="flex backdrop-blur-xl bg-white/50 rounded-3xl shadow-xl pr-4">
						<div class="h-12 w-24 bg-slate-400 rounded-full p-2">
							<a class="h-full w-full m-auto" target="_blank" href="https://www.google.com/maps/place/155-Camp+%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B8%99%E0%B8%B2+155+%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5+%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B8%99%E0%B8%B2+%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87+%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5+70000/@13.6099959,99.7975365,17z/data=!4m6!3m5!1s0x30e3250d8f1e5909:0x54d6a4e0440e274e!8m2!3d13.6099959!4d99.7975365!16s%2Fg%2F11pb8c7ggm">Direction</a>
						</div>
						<div class="text-base">
							<p>ณ 155-Camp หนองกลางนา</p>
							<p>อำเภอเมือง จังหวัดราชบุรี</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="right-buttom text-black text-center w-screen md:w-3/4">
			<div class="text-lg w-11/12 md:w-10/12 mx-auto">
				<h1 class="text-center">Let’s Celebrate In…</h1>
				<div class="h-0.5 w-full bg-gray-600 my-4" />
				<CountDown />
			</div>

			<p>Remark</p>
			<p class="text-lg">Thank you for being an important part of our story</p>
		</div>
	</div>
</div>

<style>
	@font-face {
		font-family: 'Stylish Calligraphy';
		src: url('/fonts/Stylish Calligraphy Demo.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}
	* {
		box-sizing: border-box;
	}
	.scroll-container,
	.scroll-area {
		/* width: 100vw; */
		height: 100dvh;
		font-size: 60px;
		/* w-full max-w-xl */
	}

	/* refactor to md:??? instead */
	@media only screen and (min-width: 600px) {
		.left-top {
			max-width: 50%;
			/* height: 100dvh; */
		}

		.right-buttom {
			max-width: 50%;
			/* height: 100dvh; */
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
</style>
