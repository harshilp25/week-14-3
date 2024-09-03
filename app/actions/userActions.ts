"use server"; // server action runs on the server , because it might have the db calls and as we know that db calls cannot made from the client/frontend thats why

import client from "../db";

// the advantgae of the serverActions
// 1) we can call this function from the client and server components both :)
// 2) we will get the type of the function response :)

export async function SignUpAction(username: string, password: string) {
  try {
    // db call

    await client.user.create({
      data: {
        username,
        password,
      },
    });
    return true;
  } catch (error: any) {
    console.error("error occured while singing up " + error.message);
    return false;
  }
}
