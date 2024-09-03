"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import axios from "axios";
import { SignUpAction } from "@/app/actions/userActions";
import { copyFileSync } from "fs";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const redirect = useRouter();
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <a
          href="/"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
        >
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">Sign in</div>
            </div>
            <div className="pt-2">
              <LabelledInput
                label="Username"
                placeholder="harkirat@gmail.com"
                onchange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <LabelledInput
                label="Password"
                type={"password"}
                placeholder="123456"
                onchange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button
                title={"Sign up"}
                onclick={async () => {
                  const response = await SignUpAction(username, password);
                  console.log(response);
                  redirect.push("/");
                }}
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({
  label,
  placeholder,
  type,
  onchange,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        // required
        onChange={onchange}
      />
    </div>
  );
}
