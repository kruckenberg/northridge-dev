import * as server from '../entries/pages/dev-log/new/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dev-log/new/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dev-log/new/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.VwEJbWSw.js","_app/immutable/chunks/scheduler.Hj8WpivC.js","_app/immutable/chunks/each.1DToKkaM.js","_app/immutable/chunks/index.M0TSPs4J.js"];
export const stylesheets = ["_app/immutable/assets/4.Z9zi0LqQ.css"];
export const fonts = [];
