<header class="mb-16 group">
	<h1 class="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
		hi, I'm <br class="block md:hidden" />
		<span
			class="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
		>
			vanntile 👋
		</span>
		<span
			class="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"
		/>
	</h1>
	<div class="text-xl font-semibold md:text-3xl">developer by choice and designer for fun</div>
</header>

<style>
	.cursor::after {
		display: block;
		content: '';
		position: absolute;
		width: 4px;
		height: 100%;
		background-color: #fff;
		animation: cursor 0.6s linear infinite alternate;
		will-change: opacity;
	}

	@keyframes cursor {
		0%,
		40% {
			opacity: 1;
		}

		60%,
		100% {
			opacity: 0;
		}
	}
</style>
