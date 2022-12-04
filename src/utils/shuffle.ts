import { StudentKey } from "./keyScheduler"
import { students } from "./store"

export class Shuffle {
  private static interval

  static run() {
    this.interval = setInterval(() => {
      // const randNum = Math.floor(Math.random() * this.originalArray.length)
      let element: Student

      students.update((oldState) => {
        element = oldState.at(0)
        return oldState.filter((e, index) => index != 0)
      })

      console.log(element)
      element.id = StudentKey.new()

      students.update((oldState) => [...oldState, element])
    }, 200)
  }

  static stop() {
    clearInterval(this.interval)
    students.update((oldState) => oldState.sort((a, b) => a.index - b.index))
  }
}
