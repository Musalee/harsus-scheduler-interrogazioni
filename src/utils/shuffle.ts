import { StudentKey } from "./keyScheduler"
import { students } from "./store"

export class Shuffle {
  private static interval

  static run() {
    this.interval = setInterval(() => {
      let element: Student

      students.update((oldState) => {
        element = oldState.shift()
        return oldState
      })

      if (!element) return

      element.id = StudentKey.new()

      students.update((oldState) => [...oldState, element])
    }, 200)
  }

  static stop() {
    clearInterval(this.interval)
    students.update((oldState) => oldState.sort((a, b) => a.index - b.index))
  }
}
