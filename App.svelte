<script>
    import Component from "./Component.svelte";

    let components = [Component];

    export function addComponent(comp) {
        components.push(comp)
        components = components;
    }
</script>

<h1>The App</h1>

{#each components as comp}
    <div>
        <svelte:component this={comp} />
    </div>
{/each}

