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
    <section className="py-20 bg-[#0F2A5F] text-white relative overflow-hidden">
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[#1557A6]/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#F97316]/15 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-white/10 text-amber-400 border border-white/20 mb-6">
            <Mail className="h-7 w-7" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get Travel Inspiration in Your Inbox
          </h2>

          <p className="mt-3 text-base text-slate-200 max-w-xl mx-auto font-normal">
            Subscribe for seasonal tour announcements, South India pilgrimage circuit schedules, and group charter specials.
          </p>

          {subscribed ? (
            <div className="mt-8 p-4 rounded-2xl bg-white/15 border border-white/25 text-white flex items-center justify-center gap-3">
              <CheckCircle className="h-6 w-6 text-amber-400 shrink-0" />
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
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-slate-300 focus-visible:ring-[#F97316] focus-visible:border-[#F97316] rounded-xl px-4"
                  />
                  {error && (
                    <span className="absolute -bottom-6 left-1 text-xs text-rose-300">
                      {error}
                    </span>
                  )}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-xl px-6 shrink-0 shadow-md cursor-pointer transition-all duration-150 hover:scale-[1.01]"
                >
                  Subscribe
                  <Send className="h-4 w-4 ml-2" />
                </Button>
              </div>
              <p className="mt-4 text-xs text-slate-300">
                We respect your privacy. No spam. Unsubscribe anytime with one click.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
