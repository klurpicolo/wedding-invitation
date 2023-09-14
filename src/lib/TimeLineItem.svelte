<script lang="ts">
	export let image: string;
	export let time: string;
	export let desc: string;
	export let additionalClass: string;
</script>

<div
	class="h-full w-full text-lg font-kanit flex flex-col justify-center items-center p-4 {additionalClass}"
>
	<img class="object-cover" src={image} />
	<p>{time} น.</p>
	<p class="text-base text-center">{desc}</p>
</div>
