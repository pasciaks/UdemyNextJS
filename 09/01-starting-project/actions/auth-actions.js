"use server";

import { createUser } from "@/lib/user";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { redirect } from "next/navigation";
import { createAuthSession } from "@/lib/auth";
import { getUserByEmail } from "@/lib/user";
import { destroySession } from "@/lib/auth";

export default async function signup(prevState, formData) {
  const email = formData.get("email");

  let password = formData.get("password");

  // validate

  let errors = {};
  if (!email || !email.includes("@")) {
    errors.email = "A Valid Email is required.";
  }
  if (!password || password.length < 8) {
    errors.password = "Password of 8 or more characters is required.";
  }

  if (Object.keys(errors).length) {
    return { errors };
  }

  let hashedPassword = hashUserPassword(password);

  // create user

  let userId;

  try {
    userId = createUser(email, hashedPassword);
    console.log("New user created with id:", userId);
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return { errors: { email: "Email already exists." } };
    }
    throw error;
  }

  await createAuthSession(userId);

  redirect("/training");
}

export async function login(prevState, formData) {
  // login user
  const email = formData.get("email");
  const password = formData.get("password");

  const existingUser = getUserByEmail(email);
  if (!existingUser) {
    return {
      errors: {
        email: "Could not authenticate, please check your credentials",
      },
    };
  }

  const isValidPassword = verifyPassword(existingUser.password, password);
  if (!isValidPassword) {
    return {
      errors: {
        password: "Could not authenticate, please check your credentials",
      },
    };
  }

  await createAuthSession(existingUser.id);
  redirect("/training");
}

export async function auth(mode, prevState, formData) {
  if (mode === "login") {
    return login(prevState, formData);
  } else {
    return signup(prevState, formData);
  }
}

export async function logout() {
  await destroySession();
  redirect("/");
}
