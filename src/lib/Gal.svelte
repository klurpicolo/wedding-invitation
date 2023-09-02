<script>
  import couple13 from '$lib/assets/couple/pic13.jpg';
  import couple14 from '$lib/assets/couple/pic14.jpg';
  import couple15 from '$lib/assets/couple/pic15.jpg';
  import couple16 from '$lib/assets/couple/pic16.jpg';
  import couple17 from '$lib/assets/couple/pic17.jpg';
  import couple18 from '$lib/assets/couple/pic18.png';
  import couple19 from '$lib/assets/couple/pic19.png';
  import couple20 from '$lib/assets/couple/pic20.png';

</script>

<div class="row justify-center">
  <div class="column">
    <img src={couple19} alt="" />
    <img src={couple14} alt="" />
  </div>
  <div class="column">
    <img src={couple16} alt="" />
    <img src={couple18} alt="" />
  </div>
  <div class="column">
    <img src={couple20} alt="" />
    <img src={couple17} alt="" />
  </div>
  <div class="column">
    <img src={couple13} alt="" />
    <img src={couple15} alt="" />

  </div>
</div>

<style>

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  /* filter: grayscale(1) brightness(0.5); */
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s linear;
}

.column img:hover {
  filter: grayscale(0);
}

@media screen and (max-width: 700px) {
  .column {
    flex: 100%;
    max-width: 40%;
  }
  .column img {
    filter: grayscale(0) brightness(1);
  }
}

</style>
