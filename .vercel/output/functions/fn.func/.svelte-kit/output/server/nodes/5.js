

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/game-dev/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5._vwrWpnH.js","_app/immutable/chunks/scheduler.Hj8WpivC.js","_app/immutable/chunks/index.M0TSPs4J.js"];
export const stylesheets = ["_app/immutable/assets/3.xEA4IIv1.css"];
export const fonts = [];
