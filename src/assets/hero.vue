<template>
    <div class="vue-hero-app">
        <div class="hero-wrapper" >
            <h1 class="hero-title">Lorem ipsum dolor sit amet.</h1>
            <p class="hero-copy"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, vitae a. Commodi eius vel maxime? Quam suscipit amet architecto eligendi corrupti. Neque fugit veniam, repellat perspiciatis sequi modi. Quasi, sed.</p>
            <div class="hero-CTA">
                <a class="hero-CTA-link"> 
                read More
            </a>
            </div>
            
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            settings: Object,
            blocks: Array
        }
    }
</script>