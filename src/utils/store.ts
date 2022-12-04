import { writable } from "svelte/store"
import { StudentKey } from "./keyScheduler"

export const students = writable<Student[]>([
  {
    id: StudentKey.new(),
    name: "Harsus 1",
    index: 1,
  },
  {
    id: StudentKey.new(),
    name: "Harsus 2",
    index: 2,
  },
  {
    id: StudentKey.new(),
    name: "Harsus 3",
    index: 3,
  },
  {
    id: StudentKey.new(),
    name: "Harsus 4",
    index: 4,
  },
])
export const results = writable<Student[]>([])

export const shuffling = writable(false)
