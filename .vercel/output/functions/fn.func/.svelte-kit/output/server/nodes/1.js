

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.hMBvu8cT.js","_app/immutable/chunks/scheduler.CJ2Vb8ZA.js","_app/immutable/chunks/index.8TvxO4YG.js","_app/immutable/chunks/singletons.aMoCn3G7.js"];
export const stylesheets = [];
export const fonts = [];
