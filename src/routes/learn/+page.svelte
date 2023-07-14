<script>
	import pic01 from '$lib/assets/couple/pic01.jpg';
	import pic02 from '$lib/assets/couple/pic02.jpg';
	import pic03 from '$lib/assets/couple/pic03.jpg';
	import pic04 from '$lib/assets/couple/pic04.jpg';
	import pic05 from '$lib/assets/couple/pic05.jpg';
	import pic06 from '$lib/assets/couple/pic06.jpg';
	import pic07 from '$lib/assets/couple/pic07.jpg';
	import pic08 from '$lib/assets/couple/pic08.jpg';
</script>

<div class="wrapper">
	<div class="item">
		<div class="polaroid">
			<img src={pic01} />
			<div class="caption">Sea</div>
		</div>
	</div>

	<div class="item">
		<div class="polaroid">
			<img src={pic02} />
			<div class="caption">Art</div>
		</div>
	</div>

	<div class="item">
		<div class="polaroid">
			<img src={pic03} />
			<div class="caption">Art</div>
		</div>
	</div>

	<div class="item">
		<div class="polaroid">
			<img src={pic04} />
			<div class="caption">I Miss London</div>
		</div>
	</div>

	<div class="item">
		<div class="polaroid">
			<img src={pic05} />
			<div class="caption">Love ballons</div>
		</div>
	</div>

	<div class="item">
		<div class="polaroid">
			<img src={pic06} />
			<div class="caption">Vintage life</div>
		</div>
	</div>

	<div class="item">
		<div class="polaroid">
			<img src={pic07} />
			<div class="caption">Summer Day</div>
		</div>
	</div>

	<div class="item">
		<div class="polaroid">
			<img src={pic08} />
			<div class="caption">Art</div>
		</div>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}

	body {
		font-family: 'Poor Story', cursive;
		background: #bdffbd;
	}

	.wrapper {
		width: 100%;
		padding: 0 2rem;
		text-align: center;
	}
	.polaroid {
		background: #fff;
		padding: 1rem;
		box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);
	}
	.polaroid > img {
		max-width: 100%;
		height: auto;
	}
	.caption {
		font-size: 0.8rem;
		text-align: center;
		line-height: 2em;
	}
	.item {
		width: 45%;
		display: inline-block;
		margin-top: 2rem;
		filter: grayscale(100%);
	}
	.item .polaroid:before {
		content: '';
		position: absolute;
		z-index: -1;
		transition: all 0.35s;
	}
	.item:nth-of-type(4n + 1) {
		transform: scale(0.8, 0.8) rotate(5deg);
		transition: all 0.35s;
	}
	.item:nth-of-type(4n + 1) .polaroid:before {
		transform: rotate(6deg);
		height: 20%;
		width: 47%;
		bottom: 30px;
		right: 12px;
		box-shadow: 0 2.1rem 2rem rgba(0, 0, 0, 0.4);
	}
	.item:nth-of-type(4n + 2) {
		transform: scale(0.8, 0.8) rotate(-5deg);
		transition: all 0.35s;
	}
	.item:nth-of-type(4n + 2) .polaroid:before {
		transform: rotate(-6deg);
		height: 20%;
		width: 47%;
		bottom: 30px;
		left: 12px;
		box-shadow: 0 2.1rem 2rem rgba(0, 0, 0, 0.4);
	}
	.item:nth-of-type(4n + 4) {
		transform: scale(0.8, 0.8) rotate(3deg);
		transition: all 0.35s;
	}
	.item:nth-of-type(4n + 4) .polaroid:before {
		transform: rotate(4deg);
		height: 20%;
		width: 47%;
		bottom: 30px;
		right: 12px;
		box-shadow: 0 2.1rem 2rem rgba(0, 0, 0, 0.3);
	}
	.item:nth-of-type(4n + 3) {
		transform: scale(0.8, 0.8) rotate(-3deg);
		transition: all 0.35s;
	}
	.item:nth-of-type(4n + 3) .polaroid:before {
		transform: rotate(-4deg);
		height: 20%;
		width: 47%;
		bottom: 30px;
		left: 12px;
		box-shadow: 0 2.1rem 2rem rgba(0, 0, 0, 0.3);
	}
	.item:hover {
		filter: none;
		transform: scale(1, 1) rotate(0deg) !important;
		transition: all 0.35s;
	}
	.item:hover .polaroid:before {
		content: '';
		position: absolute;
		z-index: -1;
		transform: rotate(0deg);
		height: 90%;
		width: 90%;
		bottom: 0%;
		right: 5%;
		box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
		transition: all 0.35s;
	}
</style>
