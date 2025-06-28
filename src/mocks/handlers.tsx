// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";

type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  comment?: string;
};

const roles = ["admin", "editor", "viewer"] as const;

function generateUser(): User {
  return {
    id: faker.string.uuid(),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(roles),
    comment: faker.lorem.paragraph(),
  };
}

const USERS = Array.from({ length: 157 }, generateUser); // Simulate 157 users

export const handlers = [
  http.get("http://dash-starter.com/api/users", () => {
    const page = 1;
    const limit = 5;

    const start = (page - 1) * limit;
    const end = start + limit;

    const paginated = USERS.slice(start, end);

    return HttpResponse.json({
      total: USERS.length,
      page,
      limit,
      data: paginated,
    });
  }),
];
