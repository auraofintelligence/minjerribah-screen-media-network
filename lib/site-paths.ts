const basePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "";

export function sitePath(path: string): string {
  const cleanPath = path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
  return `${basePath}${cleanPath}`;
}

export function assetPath(path: string): string {
  return `${basePath}/${path.replace(/^\/+/, "")}`;
}
