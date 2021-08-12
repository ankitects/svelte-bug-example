<script>
    import { writable } from "svelte/store";

    const { Component }  = components;
    let value = 10;

    let store = writable(10);
</script>

<strong>From add-on: {value}</strong>
<strong>From add-on (store): {$store}</strong>

<Component bind:value {store} />
