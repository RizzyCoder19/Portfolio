import { siteConfig } from "@/config/site";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
