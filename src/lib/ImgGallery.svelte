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

<div class="row">
	<div class="column">
		<img src={pic01} style="width:100%" />
		<img src={pic02} style="width:100%" />
	</div>

	<div class="column">
		<img src={pic03} style="width:100%" />
		<img src={pic04} style="width:100%" />
	</div>

	<div class="column">
		<img src={pic01} style="width:100%" />
		<img src={pic02} style="width:100%" />
	</div>

	<div class="column">
		<img src={pic03} style="width:100%" />
		<img src={pic04} style="width:100%" />
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		padding: 0 20px;
	}

	/* Create four equal columns that sits next to each other */
	.column {
		flex: 25%;
		max-width: 25%;
		padding: 0 4px;
	}

	.column img {
		margin-top: 8px;
		vertical-align: middle;
	}

	/* Responsive layout - makes a two column-layout instead of four columns */
	@media (max-width: 800px) {
		.column {
			flex: 50%;
			max-width: 50%;
		}
	}

	/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
	@media (max-width: 600px) {
		.column {
			flex: 100%;
			max-width: 100%;
		}
	}
</style>
