<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result :counter="counter"></app-result>
                <hr>
                <app-counter @updated="counter += $event"></app-counter>
                <app-another-counter></app-another-counter>
                </br>
                <input type="text" v-model="value">
                <p>{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherCounter from './components/anotherCounter.vue'

    export default {
        data() {
            return {
                counter: 0
            }
        },
        computed: {
            value:{
                get () {
                    return this.$store.getters.getValue
                },
                set (value) {
                    this.$store.dispatch('changeValue', value)
                }
            }
        },
        methods: {
            updateValue(event)  {
                this.$store.dispatch('changeValue', event.target.value)
            }
        },
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherCounter: AnotherCounter
        }
    }
</script>

