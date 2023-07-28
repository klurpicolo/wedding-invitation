<div class="support-scrollsnap" />

<div class="scroll-container">
	<div class="scroll-area">1</div>
	<div class="scroll-area">2</div>
	<div class="scroll-area">3</div>
	<div class="scroll-area">4</div>
</div>

<style>
	html {
		background: #f2f2f2;
	}

	.scroll-container,
	.scroll-area {
		width: 100vw;
  		height: 100vh;
		font-size: 60px;
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

	.scroll-area:nth-of-type(1) {
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
	}
</style>
