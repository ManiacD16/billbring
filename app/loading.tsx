export default function Loading() {
  return (
    <div className="min-h-[72vh] pb-24 pt-24 sm:pt-28" role="status" aria-live="polite" aria-busy="true">
      <p className="sr-only">Loading BillBring page</p>
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr]">
        <div>
          <div className="skeleton-shimmer h-4 w-40 rounded-full" />
          <div className="skeleton-shimmer mt-7 h-14 w-[94%] rounded-2xl sm:h-16" />
          <div className="skeleton-shimmer mt-3 h-14 w-[74%] rounded-2xl sm:h-16" />
          <div className="skeleton-shimmer mt-8 h-4 w-[86%] rounded-full" />
          <div className="skeleton-shimmer mt-3 h-4 w-[64%] rounded-full" />
          <div className="mt-9 flex gap-3">
            <div className="skeleton-shimmer h-12 w-40 rounded-2xl" />
            <div className="skeleton-shimmer h-12 w-36 rounded-2xl" />
          </div>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-[34px] border border-slate-200/[.70] bg-slate-100/[.60] p-6 dark:border-white/[.10] dark:bg-white/[.025] sm:min-h-[430px]">
          <div className="skeleton-shimmer absolute inset-6 rounded-[28px] sm:inset-9" />
          <div className="absolute inset-x-12 bottom-12 grid grid-cols-3 gap-3 sm:inset-x-16">
            {[0, 1, 2].map((item) => <div key={item} className="h-16 rounded-2xl bg-white/[.55] dark:bg-white/[.045]" />)}
          </div>
        </div>
      </div>
    </div>
  );
}
