// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import type { IUser } from "@/pages/dashboard/users/list";

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
  http.get("http://dash-starter.com/api/users", ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "10");

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

  http.post("http://dash-starter.com/api/users/create", async ({ request }) => {
    const body = (await request.json()) as IUser;

    const newUser: IUser = {
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      role: body.role,
      comment: body.comment || "",
    };

    return HttpResponse.json({
      message: "User added successfully",
      user: newUser,
    });
  }),

  http.put("http://dash-starter.com/api/users/update", async ({ request }) => {
    const body = (await request.json()) as IUser;

    const newUser: IUser = {
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      role: body.role,
      comment: body.comment || "",
    };

    return HttpResponse.json({
      message: "User updated successfully",
      user: newUser,
    });
  }),
];
