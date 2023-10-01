// "use client"
import { faker } from "@faker-js/faker"



const generateFakeUser = () => {
  return {
    id: faker.string.uuid(),
    fullName: faker.person.fullName(),
    job: faker.person.jobTitle(),
    avatar: faker.image.avatar(),
    firstName: faker.person.firstName(),
  }
}

export const generateFakeUsers = (length) => {
  const users = []

  Array.from({ length: length }).forEach(() => {
    users.push(generateFakeUser())
  })

  return users
}