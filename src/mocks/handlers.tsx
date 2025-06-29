// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import type { IUser } from "@/pages/dashboard/users/list";
import USERS from "../db.json";

export const handlers = [
  http.get("https://dash-starter.com/api/users", ({ request }) => {
    const url = new URL(request.url);

    const filter = url.searchParams.get("filter");

    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "5");

    const start = (page - 1) * limit;
    const end = start + limit;
    let FilteredUsers: typeof USERS = [];

    if (filter) {
      FilteredUsers = USERS.filter((user) =>
        `${user.firstname} ${user.lastname}`.toLowerCase().includes(filter)
      );
      console.log({ FilteredUsers });
    }

    const paginated = (filter ? FilteredUsers : USERS).slice(start, end);
    const totalPages = Math.ceil(
      (filter ? FilteredUsers : USERS).length / limit
    );

    return HttpResponse.json({
      total: USERS.length,
      totalPages,
      hasNextPage: totalPages > page,
      page,
      limit,
      data: paginated,
    });
  }),

  http.post(
    "https://dash-starter.com/api/users/create",
    async ({ request }) => {
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
    }
  ),

  http.put("https://dash-starter.com/api/users/update", async ({ request }) => {
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
