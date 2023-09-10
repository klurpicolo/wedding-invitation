<script lang="ts">
    export let img1: string
    export let img2: string

	import { onMount } from "svelte";
	let showDao = false;
	let isSelected: boolean = false;

    console.log(img1)

	onMount(() => {
		setInterval(() => {
			if (!isSelected) {
				showDao = !showDao;
			}
		}, 5000);
	});
</script>


<div class="h-full w-screen absolute buttom-0 bg-cover bg-center transition-opacity duration-1000 {showDao ? 'opacity-100 delay-0' : 'opacity-0 delay-300'}" style="background-image: url({img1})">
    <div class="h-fit w-fit backdrop-blur-xl bg-white/30 rounded-3xl p-4 m-8 md:ml-64">
        <div class="text-teal-600 text-2xl first-letter:uppercase first-letter:text-4xl">
            Warit
        </div>
        <div class="text-teal-600 text-2xl first-letter:uppercase first-letter:text-4xl">
            Boonmasiri
        </div>
        <div class="text-teal-600 text-2xl first-letter:uppercase first-letter:text-4xl text-right">
            Klur
        </div>
    </div>
    
</div>
<div class="h-full w-screen absolute buttom-0 bg-cover bg-center transition-opacity duration-1000 {showDao ? 'opacity-0 delay-300' : 'opacity-100 delay-0'}" style="background-image: url({img2})">
    <div class="h-fit w-fit backdrop-blur-xl bg-white/30 rounded-3xl p-4 m-8 md:ml-64">
        <div class="text-teal-600 text-2xl first-letter:uppercase first-letter:text-4xl">
            Pattaraporn
        </div>
        <div class="text-teal-600 text-2xl first-letter:uppercase first-letter:text-4xl">
            Suwannachak
        </div>
        <div class="text-teal-600 text-2xl first-letter:uppercase first-letter:text-4xl text-right">
            Dao
        </div>
    </div>
</div>


<div class="h-fit w-full absolute bottom-8 mx-auto flex justify-evenly">
    <div class="h-4 w-16 rounded-xl bg-teal-400 transition-all duration-300 ease-in-out delay-300 {showDao ? 'scale-125': 'scale-100'}"
        on:click={() => {
            console.log("click on klur")
            showDao = true
            isSelected = true
        }}
        style="cursor:pointer">
    </div>
    <div class="h-4 w-16 rounded-xl bg-orange-400 transition-all duration-300 ease-in-out delay-300 {showDao ? 'scale-100' : 'scale-125'}"
        on:click={() => {
            console.log("click on dao")
            showDao = false
            isSelected = true
        }}
        style="cursor:pointer">
    </div>
</div>