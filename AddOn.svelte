<script>
    import { writable } from "svelte/store";

    const { Component }  = components;
    let value = 10;

    let store = writable(10);
</script>

<strong>From add-on: {value}</strong>
<br>
<strong>From add-on (store): {$store}</strong>
<br>

<Component bind:value {store} />
