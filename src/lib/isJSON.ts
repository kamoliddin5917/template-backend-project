export function isJSON(data: string): boolean {
  try {
    return JSON.parse(data) && !!data;
  } catch (error) {
    return false;
  }
}
