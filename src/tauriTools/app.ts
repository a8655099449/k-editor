import { getName } from "@tauri-apps/api/app";

export const getAppName = async () => {
  return getName();
};
