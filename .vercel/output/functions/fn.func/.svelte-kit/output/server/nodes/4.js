

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dev-log/new/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.lrHqasVs.js","_app/immutable/chunks/scheduler.CJ2Vb8ZA.js","_app/immutable/chunks/index.8TvxO4YG.js"];
export const stylesheets = ["_app/immutable/assets/4.u2ee4HSp.css"];
export const fonts = [];
