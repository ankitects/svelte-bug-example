<script>
    import Component from "./Component.svelte";

    let components = [{ component: Component }];

    export function addComponent(comp) {
        components.push({ component: comp })
        components = components;
    }
</script>

<div>the app</div>

{#each components as elem}
    <svelte:component this={elem.component} />
{/each}

