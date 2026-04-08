const rawBaseUrl = import.meta.env.BASE_URL;

export const routerBasename =
	rawBaseUrl === "/" ? undefined : rawBaseUrl.replace(/\/$/, "");

export function withBasePath(path: string) {
	return `${rawBaseUrl}${path.replace(/^\//, "")}`;
}