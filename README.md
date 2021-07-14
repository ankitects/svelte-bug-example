
# Svelte bug regarding bindings across compilation units

Build with `yarn build`.
Open `dist/index.html`.

Upon first opening (as expected):

<img width="499" alt="Screenshot 2021-07-14 at 03 54 49" src="https://user-images.githubusercontent.com/7188844/125548322-73fb2072-678c-4a25-9c8d-3f93116c56e6.png">

When modifying values via number input (notice that the span from `AddOn.svelte` is not updated):

<img width="494" alt="Screenshot 2021-07-14 at 03 55 03" src="https://user-images.githubusercontent.com/7188844/125548326-5dd2245e-5b0a-4117-9759-f4cff4567407.png">
