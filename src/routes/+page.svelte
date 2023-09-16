<script>
	import weddingLogo from '$lib/assets/signature3.svg';
	import bg from '$lib/assets/bg1_com.png';

	import KlurAndDao from '$lib/KlurAndDao.svelte';
	import bg4 from '$lib/assets/bg4_com.png';
	import bg5 from '$lib/assets/bg5_com.jpeg';

	import Gal from '$lib/Gal2.svelte';

	import TimeLine from '$lib/TimeLine.svelte';

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

	<div class="scroll-area flex-col p-4">
		<div class="h-full w-full max-w-md p-4 bg-[#819171]/50 rounded-t-full text-white">
			<div class="h-1/6 p-4 text-center">
				<p class="font-kanit">Timeline</p>
			</div>
			<div class="h-5/6 w-full">
				<TimeLine />
			</div>
		</div>
	</div>

	<div class="scroll-area flex flex-col md:flex-row py-2 font-kanit">
		<div class="left-top flex-col h-1/2 md:h-3/4 w-full">
			<div class="h-full w-4/5 m-auto text-black flex flex-col">
				<div class="text-center text-3xl md:text-4xl">Location</div>
				<div class="text-base h-16 w-fit text-center flex flex-col mx-auto">
					<div class="flex">
						<div
							class="h-12 w-24 bg-[#819171] rounded-xl m-auto p-2 hover:scale-110 transition-all delay-75 ease-in-out relative text-white"
						>
							<a
								class="h-full w-full m-auto"
								target="_blank"
								href="https://www.google.com/maps/place/155-Camp+%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B8%99%E0%B8%B2+155+%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5+%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B8%99%E0%B8%B2+%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87+%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5+70000/@13.6099959,99.7975365,17z/data=!4m6!3m5!1s0x30e3250d8f1e5909:0x54d6a4e0440e274e!8m2!3d13.6099959!4d99.7975365!16s%2Fg%2F11pb8c7ggm"
								>Direction</a
							>
							<span class="absolute flex h-3 w-3 -top-1 left-0">
								<span
									class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#819171]/50 opacity-75"
								/>
								<span class="relative inline-flex rounded-full h-3 w-3 bg-[#819171]/80" />
							</span>
						</div>
						<div
							class="h-12 m-2 pl-2 lg:px-8 text-base md:text-lg flex flex-col justify-center items-start"
						>
							<div class="text-left">155-Camp หนองกลางนา จังหวัดราชบุรี</div>
						</div>
					</div>
				</div>
				<div class="h-full max-h-96 flex-1">
					<Map />
				</div>
			</div>
		</div>

		<div
			class="right-buttom h-1/2 md:h-3/4 w-screen md:w-3/4 py-4 text-black text-center flex flex-col justify-between"
		>
			<div class="w-11/12 md:w-10/12 mx-auto">
				<h1 class="text-center text-3xl md:text-4xl">Let’s Celebrate In…</h1>
				<div class="h-0.5 w-full bg-gray-600 my-2" />
				<div class="text-base">
					<CountDown />
				</div>
				<div class="h-0.5 w-full bg-gray-600 my-2" />
			</div>

			<div class="h-fit px-6 text-xl flex-1 flex flex-col justify-center">
				<div class="">Please don't ware high heel</div>
				<div class="">Thank you for being an important part of our story</div>
			</div>
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
