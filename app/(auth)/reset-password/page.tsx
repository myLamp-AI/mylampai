"use client";
import { Suspense } from "react";
import ResetComp from "./resetComp";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetComp />
    </Suspense>
  );
}
