<script lang="ts">
	export let img1: string;
	export let img2: string;

	import { onMount } from 'svelte';
	let showKlur = false;
	let isSelected: boolean = false;

	const klurDao = {
		klur: {
			firstName: 'Warit',
			lastName: 'Boonmasiri',
			nickName: 'Klur'
		},
		dao: {
			firstName: 'Pattaraporn',
			lastName: 'Suwannachak',
			nickName: 'Dao'
		}
	};

	onMount(() => {
		setInterval(() => {
			if (!isSelected) {
				showKlur = !showKlur;
			}
		}, 5000);
	});
</script>

<div class="h-full w-full font-calligraphy">
	<div
		class="h-full w-full absolute flex flex-col buttom-0 bg-cover bg-center transition-opacity duration-1000 {showKlur
			? 'opacity-0 delay-300'
			: 'opacity-100 delay-0'}"
		style="background-image: url({img1})"
	>
		<div class="h-fit w-1/2 relative flex ml-auto justify-start mt-4 md:mt-10">
			<div
				class="h-44 w-36 absolute -bottom-6 -left-6 bg-white/70 opacity-90 rounded-tl-full rounded-tr-full rounded-br-full"
			/>
			<div
				class="h-fit w-fit backdrop-blur-xl bg-[#819171]/70 rounded-tl-full rounded-tr-full rounded-br-full px-4 pt-12"
			>
				<div class="text-white text-2xl first-letter:uppercase first-letter:text-4xl">
					{klurDao.klur.firstName}
				</div>
				<div class="text-white text-2xl first-letter:uppercase first-letter:text-4xl">
					{klurDao.klur.lastName}
				</div>
				<div class="text-white text-4xl text-left mt-6">
					- {klurDao.klur.nickName} -
				</div>
			</div>
		</div>
	</div>
	<div
		class="h-full w-full absolute flex flex-col buttom-0 bg-cover bg-center transition-opacity duration-1000 {showKlur
			? 'opacity-100 delay-0'
			: 'opacity-0 delay-300'}"
		style="background-image: url({img2})"
	>
		<div class="h-fit w-1/2 relative flex mr-auto justify-end mt-4 md:mt-10">
			<div
				class="h-44 w-36 absolute -bottom-6 -right-6 bg-white/70 opacity-90 rounded-tl-full rounded-tr-full rounded-bl-full"
			/>
			<div
				class="h-fit w-fit backdrop-blur-xl bg-[#bf935c]/70 rounded-tl-full rounded-tr-full rounded-bl-full px-4 pt-12"
			>
				<div class="text-white text-2xl first-letter:uppercase first-letter:text-4xl">
					{klurDao.dao.firstName}
				</div>
				<div class="text-white text-2xl first-letter:uppercase first-letter:text-4xl">
					{klurDao.dao.lastName}
				</div>
				<div class="text-white text-4xl text-right mt-6">
					- {klurDao.dao.nickName} -
				</div>
			</div>
		</div>
	</div>

	<div class="h-fit w-full absolute bottom-8 mx-auto flex justify-evenly">
		<div
			class="h-4 md:h-8 w-16 md:w-32 rounded-xl bg-[#819171] transition-all duration-300 ease-in-out delay-300 {showKlur
				? 'scale-100 opacity-100'
				: 'scale-125 opacity-75'}"
			on:click={() => {
				showKlur = false;
				isSelected = true;
			}}
			style="cursor:pointer"
		/>
		<div
			class="h-4 md:h-8 w-16 md:w-32 rounded-xl bg-[#bf935c] transition-all duration-300 ease-in-out delay-300 {showKlur
				? 'scale-125 opacity-75'
				: 'scale-100 opacity-100'}"
			on:click={() => {
				showKlur = true;
				isSelected = true;
			}}
			style="cursor:pointer"
		/>
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
</style>
