export async function increment(previousState: number): Promise<number> {
  return previousState + 1;
}
