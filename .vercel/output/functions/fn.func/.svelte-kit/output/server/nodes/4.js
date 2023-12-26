

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dev-log/new/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.8sZiTz2b.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.exryL9J8.js"];
export const stylesheets = ["_app/immutable/assets/4.hjpbcKoR.css"];
export const fonts = [];
