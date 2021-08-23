import App from "./App.svelte";
import Component from "./Component.svelte";
import * as svelte_internal from "svelte/internal";

globalThis.svelte_internal = svelte_internal;
globalThis.components = { App, Component };
