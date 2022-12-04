export class StudentKey {
  private static key = 1

  static new() {
    return this.key++
  }
}
