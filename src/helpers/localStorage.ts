export const setItem = <T extends unknown>(key: string, value: T): void =>
  localStorage.setItem(`@TrincaChallenge::${key}`, JSON.stringify(value));

export const getItem = <T extends unknown>(key: string): T =>
  JSON.parse(localStorage.getItem(`@TrincaChallenge::${key}`) as string) as T;

export const removeItem = (key: string): void =>
  localStorage.removeItem(`@TrincaChallenge::${key}`);
