import { StudentKey } from "./keyScheduler"
import { students } from "./store"

export const loadFromStorage = () => {
  const list: Student[] = JSON.parse(localStorage.getItem("students"))

  if (list && list.length > 0) {
    let maxKey = list[0].id
    list.forEach((e) => {
      if (e.id > maxKey) maxKey = e.id
    })

    StudentKey.setCurrentKey(maxKey + 1)
    students.update((_) => list)
  }
}

export const registerUpdates = () => {
  students.subscribe((value) => {
    localStorage.setItem("students", JSON.stringify(value))
  })
}
