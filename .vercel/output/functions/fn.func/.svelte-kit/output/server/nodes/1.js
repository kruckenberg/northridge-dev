

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.xpEyeOWp.js","_app/immutable/chunks/scheduler.Hj8WpivC.js","_app/immutable/chunks/index.M0TSPs4J.js","_app/immutable/chunks/singletons.uwlpQIgX.js"];
export const stylesheets = [];
export const fonts = [];
