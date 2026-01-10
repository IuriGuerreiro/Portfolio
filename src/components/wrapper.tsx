'use client';

import React from "react";

import { useLanguage } from "@/context/LanguageContext";

export function Wrapper({ children }: { children: React.ReactNode }) {
  const { mounted } = useLanguage();

  if (!mounted) {
    return (<></>
    );
  }

  return <>{children}</>;
}