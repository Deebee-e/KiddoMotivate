"use client"
import React from 'react';
import Link from 'next/link';
export default function NavBar() {



  return (
    <div className="navbar fixed top-0 left-0 w-full bg-white/40 backdrop-blur-lg border-b border-gray-300/30 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <h4>Kiddo Motivate</h4>
        </a>
      </div>
      <div className="flex-none">
        <div className="menu menu-horizontal px-1">
          <Link href="/"><button className="btn btn-active btn-ghost">
            Logout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
