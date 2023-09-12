<script>
	import TimeLineItem from '$lib/TimeLineItem.svelte';

	import item1 from '$lib/assets/timeline/1.png';
	import item2 from '$lib/assets/timeline/2.png';
	import item3 from '$lib/assets/timeline/3.png';
	import item4 from '$lib/assets/timeline/4.png';
</script>

<div class="flex flex-row h-5/6 w-full max-w-3xl mb-10">
	<div class="w-1/2 mb-auto ml-auto">
		<div class="flex relative mb-4">
			<TimeLineItem image={item1} time="07.09" desc="พิธีตักบาตรเช้า" additionalClass="mx-auto" />
			<!-- <div class="h-4 w-4 absolute -right-[10px] top-1/2 rounded-full bg-slate-600" /> -->
		</div>
		<div class="flex relative">
			<TimeLineItem image={item3} time="09.39" desc="พิธีหลั่งน้ำสังข์" additionalClass="mx-auto" />
			<div class="h-4 w-4 absolute -right-[10px] top-1/2 rounded-full bg-slate-600" />
		</div>
	</div>
	<div class="h-5/6 w-fit relative my-auto py-4 flex flex-col items-center">
		<div class="h-4 w-4 absolute top-0 rounded-full bg-slate-600" />
		<div class="w-1 h-full bg-black" />
		<div class="h-4 w-4 absolute bottom-0 rounded-full bg-slate-600" />
	</div>
	<div class="w-1/2 my-auto pt-24 mr-auto">
		<div class="relative">
			<TimeLineItem image={item2} time="08.09" desc="พิธีแห่ขันหมาก" additionalClass="mx-auto" />
			<div class="h-4 w-4 absolute -left-[10px] top-1/2 rounded-full bg-slate-600" />
		</div>
		<div class="relative">
			<TimeLineItem
				image={item4}
				time="11.00"
				desc="ร่วมรับประทานอาหาร"
				additionalClass="mx-auto"
			/>
			<!-- <div class="h-4 w-4 absolute -left-[10px] top-1/2 rounded-full bg-slate-600" /> -->
		</div>
	</div>
</div>
