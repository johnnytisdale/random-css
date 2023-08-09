export default class RandomCssUtils {
  public static reducer<T>(state: T, newState: Partial<T>): T {
    return { ...state, ...newState };
  }
}
