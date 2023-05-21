export class ChromeStorage {
  public static async get<T>(key: keyof T): Promise<string> {
    if (typeof key !== 'string') {
      throw new Error('Wrong key name');
    }

    const storageRes = await chrome.storage.local.get(key);
    return storageRes[key];
  }

  public static set<T>(key: keyof T, value: string): Promise<void> {
    if (typeof key !== 'string') {
      throw new Error('Wrong key name');
    }

    return chrome.storage.local.set({ [key]: value });
  }
}
