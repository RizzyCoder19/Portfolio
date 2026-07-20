export function formatDate(
  value: Date | string,
  options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  },
  locale = "en-US",
) {
  return new Intl.DateTimeFormat(locale, options).format(new Date(value));
}
