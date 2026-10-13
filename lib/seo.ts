export const siteUrl = "https://seinmuwana.netlify.app"

export const absoluteUrl = (path = "/") => new URL(path, siteUrl).toString()
