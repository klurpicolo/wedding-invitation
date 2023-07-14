<script>
  import { Gallery } from "flowbite-svelte";
  import image_1 from '$lib/assets/couple/Kodak20001.jpg'
  import image_2 from '$lib/assets/couple/Kodak20002.jpg'
  import image_3 from '$lib/assets/couple/Kodak20003.jpg'
  const images1 = [
    {alt: 'erbology', src: image_1},
    {alt: 'shoes', src: image_2},
    {alt: 'small bag', src: image_3},
  ]
   const images2 = [
    {alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'},
    {alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'},
    {alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'},
   ]
   const images3 = [
    {alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'},
    {alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'},
    {alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'},
   ]
   const images4 = [
    {alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'},
    {alt: 'playstation', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'},
    {alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'}
  ]

</script>

<!-- <Gallery class="gap-4 grid-cols-2 md:grid-cols-4"> -->

<Gallery class="gap-4 grid-cols-3 md:grid-cols-4">
  <Gallery items={images1} />
  <Gallery items={images1} />
  <Gallery items={images3} />
  <Gallery items={images4} />
</Gallery>