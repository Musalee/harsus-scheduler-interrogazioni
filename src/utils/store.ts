import { writable } from "svelte/store"

export const students = writable<Student[]>([])
export const results = writable<Student[]>([])

export const shuffling = writable(false)
