export const parseCookies = (cookieString: string): Record<string, string> => {
  const cookies: Record<string, string> = {};

  cookieString.replace(/([^=;]+)=([^;]+)/g, (_, name, value) => {
    cookies[name.trim()] = decodeURIComponent(value.trim());
    return '';
  });

  return cookies;
};
