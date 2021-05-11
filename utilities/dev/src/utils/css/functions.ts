function prop(identifier: string, component: string) {
  const prefix = component ? `${component}-` : ``;
  return `--isometric-${prefix}${identifier}`;
}

function setprop(identifier: string, component: string, value: string) {
  return `${prop(identifier, component)}: ${value}`;
}

export { prop, setprop };
