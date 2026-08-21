"use client";

import * as React from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-emerald-600/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-sky-600/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-6">
            <Mail className="h-7 w-7" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get Travel Inspiration in Your Inbox
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            Subscribe to our weekly newsletter for secret deal alerts, curated travel guides, and exclusive itinerary releases.
          </p>

          {subscribed ? (
            <div className="mt-8 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 flex items-center justify-center gap-3 animate-pulse-subtle">
              <CheckCircle className="h-6 w-6 text-emerald-400 shrink-0" />
              <span className="text-sm font-semibold">
                Thank you for subscribing! You will receive our next curated travel digest.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Input
                    type="email"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus-visible:ring-emerald-400 focus-visible:border-emerald-400 rounded-xl px-4"
                  />
                  {error && (
                    <span className="absolute -bottom-6 left-1 text-xs text-rose-400">
                      {error}
                    </span>
                  )}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl px-6 shrink-0 shadow-lg shadow-emerald-950/40"
                >
                  Subscribe
                  <Send className="h-4 w-4 ml-2" />
                </Button>
              </div>
              <p className="mt-4 text-xs text-slate-400">
                We respect your privacy. Unsubscribe anytime with one click.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
