"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("7f779491-5473-408f-9a1c-40ec5b30de25");
  }, []);

  return null;
};