

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/ms-course/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.vWFK15lw.js","_app/immutable/chunks/scheduler.CJ2Vb8ZA.js","_app/immutable/chunks/index.8TvxO4YG.js"];
export const stylesheets = ["_app/immutable/assets/3.xEA4IIv1.css"];
export const fonts = [];
