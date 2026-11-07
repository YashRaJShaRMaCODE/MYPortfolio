"use client";

import { useState } from "react";
import { Copy, Share2 } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button aria-live="polite" className="utility-button" onClick={copyEmail} type="button">
      <Copy aria-hidden="true" size={15} /> {copied ? "Email copied" : "Copy email"}
    </button>
  );
}

export function SharePortfolio() {
  const [message, setMessage] = useState("");

  async function share() {
    const data = { title: document.title, url: window.location.href };
    try {
      if (navigator.share) await navigator.share(data);
      else {
        await navigator.clipboard.writeText(data.url);
        setMessage("Link copied");
        window.setTimeout(() => setMessage(""), 1800);
      }
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") setMessage("Could not share right now");
    }
  }

  return (
    <button aria-live="polite" className="utility-button" onClick={share} type="button">
      <Share2 aria-hidden="true" size={15} /> {message || "Share portfolio"}
    </button>
  );
}
