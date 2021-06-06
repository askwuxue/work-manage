import { User } from "./components/search/index";

const localStorageKey = "__auth_provider_token";

const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

// 退出登录
export const logout = () => window.localStorage.removeItem(localStorageKey);
