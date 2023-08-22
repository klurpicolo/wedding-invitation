<script lang="ts">
    export let image: string
    export let time: string
    export let desc: string
</script>

<div class="h-48 w-2/3 mx-auto text-lg text-black flex flex-col justify-center items-center mb-48">
    <img class="object-scale-down" src={image}>
    <p>{time} น.</p>
    <p>{desc}</p>
</div>