<template>
    <article id="lyrics">
        <div class="content">
            <div v-if="song.lyrics">{{{ song.lyrics }}}</div>
            <p class="none" v-else>No lyrics found. Are you not listening to Bach?</p>
        </div>
    </article>
</template>

<script>
    export default {
        replace: false,
        props: ['song'],

        methods: {
            resetState() {},
        },
    };
</script>

<style lang="sass">
    @import "../../../../sass/partials/_vars.scss";
    @import "../../../../sass/partials/_mixins.scss";
</style>
