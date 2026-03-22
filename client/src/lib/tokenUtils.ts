const TOKEN_KEY = "auth_token";

export const tokenUtils = {
  get: () => localStorage.getItem(TOKEN_KEY),

  set: () => localStorage.setItem(TOKEN_KEY, token),

  remove: () => localStorage.removeItem(TOKEN_KEY),

  decode: (token) => {
    try {
      const payload = token.split(".")[1];
      return JSON.parse(atob(payload));
    } catch {
      return null;
    }
  },
  isExpired: (token) => {
    const decoded = tokenUtils.decode(token);
    if (!decoded?.exp) return true;
    // exp is in seconds, Date.now() is ms
    return decoded.exp * 1000 < Date.now();
  },
};
