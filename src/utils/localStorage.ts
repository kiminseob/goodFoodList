class LocalStorage {
  get(key: string) {
    const item = localStorage.getItem(key);
    return item;
  }

  save(key: string, item: string) {
    localStorage.setItem(key, item);
  }
}

export default new LocalStorage();
