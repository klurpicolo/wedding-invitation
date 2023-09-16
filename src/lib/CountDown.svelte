<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	let timerId: number;

	// Please replace with the actual birthday.
	let birthday: Date = new Date('2023-11-12');
	let now: Date = new Date();

	let remainingDays: number;
	let remainingHours: number;
	let remainingMinutes: number;
	let remainingSeconds: number;

	const calculateCountdown = (): void => {
		now = new Date();

		// Check if the birthday has passed
		if (now >= birthday) {
			clearInterval(timerId); // Stop the interval
		} else {
			var diff: number = (birthday.getTime() - now.getTime()) / 1000;

			remainingDays = Math.floor(diff / (60 * 60 * 24));
			diff -= remainingDays * 60 * 60 * 24;

			remainingHours = Math.floor(diff / 3600);
			diff -= remainingHours * 60 * 60;

			remainingMinutes = Math.floor(diff / 60);
			diff -= remainingMinutes * 60;

			remainingSeconds = Math.round(diff);
		}
	};

	onMount((): void => {
		timerId = window.setInterval(calculateCountdown, 1000); // Tick every second
	});

	onDestroy((): void => {
		clearInterval(timerId); // Clean up the interval when the component is destroyed
	});
</script>

<div class="">
	{#if now >= birthday}
		<p>It's time. Let's go</p>
	{:else}
		<div class="flex flex-row justify-center text-center text-white">
			<div class="h-20 w-20 bg-[#819171] mx-2">
				<div class="mt-3 text-2xl">{remainingDays}</div>
				<div>Days</div>
			</div>
			<div class="h-20 w-20 bg-[#819171] mx-2">
				<div class="mt-3 text-2xl">{remainingHours}</div>
				<div>Hours</div>
			</div>
			<div class="h-20 w-20 bg-[#819171] mx-2">
				<div class="mt-3 text-2xl">{remainingMinutes}</div>
				<div>Minutes</div>
			</div>
			<div class="h-20 w-20 bg-[#819171] mx-2">
				<div class="mt-3 text-2xl">{remainingSeconds}</div>
				<div>Seconds</div>
			</div>
		</div>
	{/if}
</div>
