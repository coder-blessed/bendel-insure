import postcss from "postcss";
import tw from "@tailwindcss/postcss";
import { readFileSync } from "node:fs";
const css = readFileSync(new URL("in.css", import.meta.url), "utf8");
const r = await postcss([tw()]).process(css, { from: new URL("in.css", import.meta.url).pathname });
for (const m of r.css.matchAll(/\.bg-(aaa|bbb)\s*\{[^}]*\}/g)) console.log(m[0]);
