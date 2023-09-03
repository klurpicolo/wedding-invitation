<script lang="ts">
    export let image: string
    export let time: string
    export let desc: string
</script>

<div class="h-48 w-fit mx-auto text-lg text-black flex flex-col justify-center items-center mb-16">
    <img class="object-scale-down" src={image}>
    <p>{time} น.</p>
    <p class="text-base text-center">{desc}</p>
</div>