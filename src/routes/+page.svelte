<script>
	import Gal from '$lib/Gal.svelte';

	import weddingLogo from '$lib/assets/wedding-Icon.svg';
	import couple1 from '$lib/assets/couple/pic15.jpg';
	import klurBio from '$lib/assets/bio/bio-klur.png';
	import daoBio from '$lib/assets/bio/bio-dao.png';
	import bg from '$lib/assets/bg01.png';

	import locationLogo from '$lib/assets/location/location-sign-svgrepo-com.svg';
	import Map from '$lib/Map.svelte';

	import item1 from '$lib/assets/timeline/1.png'
	import item2 from '$lib/assets/timeline/2.png'
	import item3 from '$lib/assets/timeline/3.png'
	import item4 from '$lib/assets/timeline/4.png'

	import CountDown from '$lib/CountDown.svelte';
	import TimeLineItem from '$lib/TimeLineItem.svelte';
</script>

<div class="support-scrollsnap" />

<div class="scroll-container">
	<!-- <div class="background-img" style="background-image: url({bg})"> -->
	<div class="background-img">
		<div class="scroll-area flex-col md:flex-row">
			<div class="h-2/3 w-full left-top ">
				<img class="object-contain h-full w-full" src={weddingLogo} alt="" />
			</div>
			<div class="h-1/3 right-buttom mb-16">
				<div
					class="h-full text-center flex flex-col justify-center items-center font-montserrat font-light motion-safe:animate-fadeIn text-black"
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
				<div class="h-1/2 w-1/2 mr-auto ml-8 mt-8">
					<div class="relative"> 
						<img class="" src={daoBio} />
						<p class="text-xl text-black text-center font-montserrat">Pattaraporn Suwannachak(Dao)</p>
					</div>
				</div>
				<div class="h-1/2 w-1/2 ml-auto mr-8">
					<div class=""> 
						<img class="stroke-orange-50 stroke-2" src={klurBio} />
						<p class="text-xl text-black text-center">Warit Boonmasiri(Klur)</p>
					</div>
				</div>
			</div>
			<div class="right-buttom h-2/5 m-8 mb-16">
				<div class="m-auto text-black text-xl text-center">
					<img class="h-1/2 w-4/5 m-auto mt-8 mx-auto font-montserrat rounded-xl" src={couple1} />
					<p>Save the date</p>
					<p>November 12, 2023</p>
				</div>
			</div>
		</div>

		<div class="scroll-area">
			<div class="h-full mx-4 md:mx-32 flex justify-center items-center">
				<Gal />
			</div>
		</div>

		<div class="scroll-area flex-col">
			<div class="h-1/6 w-fulltext-center">
				<p class="my-auto text-black">Timeline</p>
			</div>
			<div class="flex flex-row h-5/6 w-full max-w-3xl mb-16">
				<div class="w-1/2 my-auto">
					<TimeLineItem image={item1} time="07.09" desc="พิธีตักบาตรเช้า"></TimeLineItem>
					<TimeLineItem image={item2} time="08.09" desc="พิธีแห่ขันหมาก"></TimeLineItem>
				</div>
				<div class="h-3/4 my-auto flex flex-col items-center">
					<div class="h-4 w-4 rounded-lg bg-slate-600"></div>
					<div class="w-1 h-full bg-black" />
					<div class="h-4 w-4 rounded-lg bg-slate-600"></div>
				</div>
				<div class="w-1/2 my-auto pt-28">
					<TimeLineItem image={item3} time="09.39" desc="พิธีหลั่งน้ำสังข์"></TimeLineItem>
					<TimeLineItem image={item4} time="11.00" desc="ร่วมรับประทานอาหาร"></TimeLineItem>
				</div>
			</div>
		</div>

		<div class="scroll-area flex-col md:flex-row py-8">
			<div class="left-top flex-col h-1/3 md:h-full w-full mx-auto">
				<div class="text-xl text-center w-fit text-black flex flex-col mx-auto my-4">
					<img class="h-12 w-12 mx-auto" src={locationLogo} />
					<p>ณ 155-Camp หนองกลางนา</p>
					<p>อำเภอเมือง จังหวัดราชบุรี</p>
				</div>
				<div class="h-3/4 md:h-1/2 w-4/5 mx-auto shadow-xl">
						<Map />
						<div class="w-24 bg-slate-400 text-base px-8 py-2 my-8 rounded-lg shadow-lg hover:scale-125 transition-all delay-100">
							<a class="h-full w-full m-auto" target="_blank" href="https://www.google.com/maps/place/155-Camp+%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B8%99%E0%B8%B2+155+%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5+%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B8%99%E0%B8%B2+%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87+%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5+70000/@13.6099959,99.7975365,17z/data=!4m6!3m5!1s0x30e3250d8f1e5909:0x54d6a4e0440e274e!8m2!3d13.6099959!4d99.7975365!16s%2Fg%2F11pb8c7ggm">Direction</a>
						</div>
				</div>
			</div>
			<div class="right-buttom text-black text-center m-auto w-screen md:w-3/4">
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
</div>

<style>
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
			height: 100vh;
		}

		.right-buttom {
			max-width: 50%;
			height: 100vh;
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
