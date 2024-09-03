import { PrismaClient } from "@prisma/client";
// import axios from "axios";
import client from "./db"; // only initlize the prisma client once

const fetchdataDetails = async () => {
  // APPROACH 1 ---> BAD ONE
  //   const response = await axios.get("http://localhost:3000/api/user");
  // here the porblem is we are making the HTTP request on the nextjs server itself which we shouldn't done that :)
  //   return response.data;

  // GOOD APPROACH
  // as we are using nextjs to utilize its SSR means since all the components will be first run on the server itself so we didnt' need to re-make a request on the server instead we should directly make an call to the db :) as below
  const user = await client.user.findFirst();
  return user;
};

export default async function Home() {
  const data = await fetchdataDetails();
  return (
    <div>
      {data?.username}
      <br />
      {data?.password}
    </div>
  );
}
