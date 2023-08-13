<script>
    import daoBio from '$lib/assets/bio/bio-dao.png';
</script>

<div class="div-container">
    <div class="l3-div1">
        <img src={daoBio} class="div1-img" alt="">
        <p>div p1</p>
    </div>
    <div class="l3-div2">
        div2
    </div>
    <div class="l3-div3">
        div3
    </div>
</div>

<style>

    .div-container {
        display: flex;
        flex-wrap: wrap;
    }
    .l3-div1 {
        text-align: right;
        background-color: aqua;
        width: 30rem;
        /* display: flex; */
        /* float: right; */
        /* clear: right; */
    }

    .div1-img {
        background-color: blueviolet;
        float: right;
    }
    .l3-div2 {
        background-color: greenyellow;
        width: 20rem;
    }
    .l3-div3 {
        background-color: red;
        width: 20rem;
    }
</style>
