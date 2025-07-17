"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [backendStatus, setBackendStatus] = useState<null | boolean>(null);
  const [dbStatus, setDbStatus] = useState<null | boolean>(null);

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`);
        if (res.ok) {
          setBackendStatus(true);
        } else {
          setBackendStatus(false);
        }
      } catch (error) {
        setBackendStatus(false);
      }
    };

    checkBackend();
  }, []);

  useEffect(() => {
    const checkDb = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/db`);
        if (res.ok) {
          setDbStatus(true);
        } else {
          setDbStatus(false);
        }
      } catch (error) {
        setDbStatus(false);
      }
    };

    checkDb();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold mb-2">🚀 CodeLoom</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        Weave code together in real-time.
      </p>
      {backendStatus === null && (
        <p className="text-blue-500">Checking backend connection...</p>
      )}
      {backendStatus === true && (
        <p className="text-green-500">✅ Backend Connected</p>
      )}
      {backendStatus === false && (
        <p className="text-red-500">❌ Backend Unreachable</p>
      )}
      {dbStatus === null && (
        <p className="text-blue-500">Checking DB connection...</p>
      )}
      {dbStatus === true && (
        <p className="text-green-500">✅ DB Connected</p>
      )}
      {dbStatus === false && (
        <p className="text-red-500">❌ DB Unreachable</p>
      )}
      <footer className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        Made with ❤️ by CodeLoom contributors.{" "}
        <a
          href="https://github.com/codeloomhq/codeloom"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub
        </a>
      </footer>
    </main>
  );
}

