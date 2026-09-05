import * as React from "react";
import { Loader2, AlertCircle, Inbox, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/common/BrandLogo";

interface LoadingStateProps {
  message?: string;
  className?: string;
}

export function LoadingState({
  message = "Loading Sri Murugan Holidays experiences...",
  className,
}: LoadingStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-12 text-center text-slate-500 min-h-[220px]",
        className
      )}
    >
      <div className="mb-4">
        <BrandLogo variant="icon-only" />
      </div>
      <Loader2 className="h-6 w-6 animate-spin text-amber-500 mb-3" />
      <p className="text-sm font-medium text-slate-600">{message}</p>
    </div>
  );
}

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  title = "No tours found",
  description = "We couldn't find any tour packages matching your search criteria. Try selecting another destination or date.",
  actionLabel,
  onAction,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-12 text-center bg-slate-50/70 rounded-2xl border border-dashed border-slate-200 min-h-[240px]",
        className
      )}
    >
      <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4 border border-amber-500/20">
        <Inbox className="h-6 w-6" />
      </div>
      <h4 className="text-base font-semibold text-slate-900 mb-1">{title}</h4>
      <p className="text-sm text-slate-500 max-w-md mb-4">{description}</p>
      {actionLabel && onAction && (
        <Button variant="outline" size="sm" onClick={onAction} className="border-amber-500/40 text-slate-900 hover:bg-amber-50">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorState({
  title = "Something went wrong",
  description = "Failed to load tour details. Please try again or refresh the page.",
  onRetry,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-12 text-center bg-rose-50/50 rounded-2xl border border-rose-100 min-h-[240px]",
        className
      )}
    >
      <div className="h-12 w-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
        <AlertCircle className="h-6 w-6" />
      </div>
      <h4 className="text-base font-semibold text-slate-900 mb-1">{title}</h4>
      <p className="text-sm text-slate-500 max-w-md mb-4">{description}</p>
      {onRetry && (
        <Button
          variant="outline"
          size="sm"
          onClick={onRetry}
          className="border-rose-200 text-rose-700 hover:bg-rose-50"
        >
          <RefreshCw className="h-4 w-4 mr-1.5" />
          Try Again
        </Button>
      )}
    </div>
  );
}
