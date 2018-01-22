<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by:100, duration:1000})">asyncIncrement</button>
        <button class="btn btn-primary" @click="asyncDecrement({by:10, duration:1000})">asyncDecrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }
</script>