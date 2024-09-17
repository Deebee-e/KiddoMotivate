"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function Register() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form className="flex flex-col gap-4">
          <div>
            <Label htmlFor="username" value="Username" className="mb-1 text-sm font-medium" />
            <TextInput
              id="username"
              type="text"
              placeholder="Choose a username"
              required
              className="w-full p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-300"
            />
          </div>
          <div>
            <Label htmlFor="email1" value="Email Address" className="mb-1 text-sm font-medium" />
            <TextInput
              id="email1"
              type="email"
              placeholder="name@example.com"
              required
              className="w-full p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-300"
            />
          </div>
          <div>
            <Label htmlFor="password1" value="Password" className="mb-1 text-sm font-medium" />
            <TextInput
              id="password1"
              type="password"
              placeholder="Create a password"
              required
              className="w-full p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm font-medium">Remember me</Label>
          </div>
          <Button type="submit" className="w-full py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-300 mt-6">
            Sign Up
          </Button>
        </form>
      </div>
    </main>
  );
}

