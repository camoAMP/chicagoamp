export function withBasePath(src: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

  if (!basePath) {
    return src
  }

  if (src.startsWith("http") || src.startsWith("//") || src.startsWith("data:")) {
    return src
  }

  if (src.startsWith("/")) {
    return `${basePath}${src}`
  }

  return src
}
