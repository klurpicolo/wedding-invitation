<script>
	import TimeLineItem from '$lib/TimeLineItem.svelte';

	import item1 from '$lib/assets/timeline/1.png';
	import item2 from '$lib/assets/timeline/2.png';
	import item3 from '$lib/assets/timeline/3.png';
	import item4 from '$lib/assets/timeline/4.png';
</script>

<div class="h-full w-full flex flex-col max-w-3xl relative">
	<div class="h-full w-0.5 bg-white absolute left-1/2">
		<div class="h-full w-full relative">
			<div class="h-4 w-4 absolute top-[12.5%] -left-2 bg-white rounded-full" />
			<div class="h-4 w-4 absolute top-[35.5%] -left-2 bg-white rounded-full" />
			<div class="h-4 w-4 absolute top-[58.5%] -left-2 bg-white rounded-full" />
			<div class="h-4 w-4 absolute top-[81.5%] -left-2 bg-white rounded-full" />
		</div>
	</div>
	<div class="h-1/4 w-1/2 object-scale-down absolute top-0 left-0">
		<TimeLineItem image={item1} time="07.09" desc="พิธีตักบาตรเช้า" additionalClass="mx-auto" />
	</div>
	<div class="h-1/4 w-1/2 object-scale-down absolute top-[23%] left-1/2">
		<TimeLineItem image={item2} time="08.09" desc="พิธีแห่ขันหมาก" additionalClass="mx-auto" />
	</div>
	<div class="h-1/4 w-1/2 object-scale-down absolute top-[46%] left-0">
		<TimeLineItem image={item3} time="09.39" desc="พิธีหลั่งน้ำสังข์" additionalClass="mx-auto" />
	</div>
	<div class="h-1/4 sm: w-1/2 object-scale-down absolute top-[69%] left-1/2">
		<TimeLineItem image={item4} time="11.00" desc="ร่วมรับประทานอาหาร" additionalClass="mx-auto" />
	</div>
</div>
