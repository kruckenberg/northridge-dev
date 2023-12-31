

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dev-log/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.e9GFbIcz.js","_app/immutable/chunks/scheduler.Hj8WpivC.js","_app/immutable/chunks/index.M0TSPs4J.js"];
export const stylesheets = ["_app/immutable/assets/3.xEA4IIv1.css"];
export const fonts = [];
