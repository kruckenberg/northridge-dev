

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.KwROSqkE.js","_app/immutable/chunks/scheduler.Hj8WpivC.js","_app/immutable/chunks/index.M0TSPs4J.js"];
export const stylesheets = ["_app/immutable/assets/2.Dnwx2oLQ.css"];
export const fonts = [];
