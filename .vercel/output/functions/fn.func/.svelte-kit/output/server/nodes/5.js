

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/game-dev/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.Qf17bkLY.js","_app/immutable/chunks/scheduler.CJ2Vb8ZA.js","_app/immutable/chunks/index.8TvxO4YG.js"];
export const stylesheets = ["_app/immutable/assets/3.xEA4IIv1.css"];
export const fonts = [];
