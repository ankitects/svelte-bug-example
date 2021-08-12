<script>
    import { writable } from "svelte/store";

    export let value = 5;
    export let store = writable(0);
</script>

<span style="color: red">From Component: {value}</span>
<br>
<span style="color: red">From Component (store): {$store}</span>
<br>

<input type="number" bind:value />
<br>
<input type="number" bind:value={$store} />
<br>
