function l(e) {
  return e.replace(/-a([a-z])/g, (o) => o[1].toUpperCase());
}
function s(e) {
  const o = {
    example: async () => {
      console.log("Hello");
      const { default: t } = await import("./example.mando-ui-D-zQbTYI.mjs");
      t(), console.log(`${e} Loaded`);
    }
  };
  try {
    return o[e]();
  } catch {
    throw { errorCode: 404, message: `Module ${e} not found` };
  }
}
function d(e) {
  if (!e.length) return;
  const o = [];
  for (const t of e)
    try {
      const n = t.dataset.module;
      if (!n)
        continue;
      const a = JSON.parse(n.replace(/'/g, '"'));
      for (const c of a) {
        const r = l(c);
        o.indexOf(r) === -1 && o.push(r);
      }
    } catch (n) {
      console.error("JS Name format incorrect in data attribute"), console.log(n);
    }
  o.forEach((t) => {
    s(t);
  });
}
document.addEventListener(
  "DOMContentLoaded",
  () => {
    const e = Array.from(document.querySelectorAll(".js-module"));
    d(e);
  },
  !1
);
Symbol.toStringTag,{value:"Module"}))});
