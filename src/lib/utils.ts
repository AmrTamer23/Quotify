import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Ref, camelize, getCurrentInstance, toHandlerKey } from "vue";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const copyQuote = (
  copy: (text: string) => Promise<void>,
  toBeCopied: Ref<string | null>
) => {
  return copy(toBeCopied.value!);
};
