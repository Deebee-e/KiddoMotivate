"use client"
import React from 'react';
import Link from 'next/link';
export default function NavBar() {



  return (
    <div className="fixed top-0 left-0 w-full bg-white/40 backdrop-blur-lg border-b border-gray-300/30 z-50">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <h4 className="text-xl font-semibold">Kiddo Motivate</h4>

        </div>
        <div>
          <Link href="/register">
            <button className="px-4 py-2  text-white rounded-md hover:bg-zinc-80 hover:text-black">
              Sign Up
            </button>
          </Link>
          <Link href="/login">
            <button className="px-4 py-2  text-white rounded-md hover:bg-zinc-80 hover:text-black">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
