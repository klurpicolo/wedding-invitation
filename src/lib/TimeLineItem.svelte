<script lang="ts">
    export let image: string
    export let time: string
    export let desc: string
    export let additionalClass: string
</script>

<div class="h-fit w-fit text-lg text-black flex flex-col justify-center items-center mb-4 p-4 {additionalClass}">
    <img class="object-scale-down" src={image}>
    <p>{time} น.</p>
    <p class="text-base text-center">{desc}</p>
</div>