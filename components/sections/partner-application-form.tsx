"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  CreditCard,
  Landmark,
  Layers3,
  Loader2,
  ShoppingCart,
  Sparkles,
  Store,
  UsersRound,
  WalletCards,
  Waypoints,
} from "lucide-react";


const businessTypes = [
  "Retail Shop",
  "Mobile Shop",
  "CSC",
  "Agency",
  "Other",
] as const;

const monthlyBusinessOptions = [
  "Below ₹1 Lakh",
  "₹1–5 Lakhs",
  "₹5–10 Lakhs",
  "₹10–25 Lakhs",
  "₹25 Lakhs+",
] as const;

const serviceOptions = [
  "UPI / QR Payments",
  "Payment Gateway / Collection",
  "AePS",
  "Micro ATM",
  "Money Transfer",
  "BBPS / Bill Payments",
  "Recharge",
  "Cash Withdrawal",
  "Insurance / Financial Services",
  "Other",
] as const;

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
] as const;

const inputClass =
  "mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition placeholder:font-medium placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10 dark:border-white/[.09] dark:bg-white/[.035] dark:text-white dark:placeholder:text-slate-500";

const labelClass = "text-sm font-extrabold tracking-[-.01em] text-slate-800 dark:text-slate-100";

const partnerTypes = [
  { value: "Retailer", icon: Store },
  { value: "Distributor", icon: UsersRound },
  { value: "Merchant", icon: Building2 },
] as const;

function BusinessTypeDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative mt-2">
      <input type="hidden" name="businessType" value={value} />

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className={`group flex min-h-12 w-full items-center justify-between gap-4 rounded-2xl border px-4 text-left text-sm font-semibold outline-none transition-all duration-200 ${
          open
            ? "border-brand-400 bg-brand-500/[.06] shadow-[0_0_0_4px_rgba(18,175,124,.10)] dark:bg-brand-500/[.08]"
            : "border-slate-200 bg-white hover:border-brand-300 dark:border-white/[.09] dark:bg-white/[.035] dark:hover:border-brand-500/35"
        }`}
      >
        <span className={value ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-slate-500"}>
          {value || "Select business type"}
        </span>

        <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl border transition-all ${
          open
            ? "rotate-180 border-brand-500/25 bg-brand-500/10 text-brand-500"
            : "border-slate-200 bg-slate-50 text-slate-500 dark:border-white/[.08] dark:bg-white/[.04] dark:text-slate-300"
        }`}>
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Business Type"
          className="absolute left-0 right-0 top-[calc(100%+10px)] z-[80] overflow-hidden rounded-[20px] border border-slate-200/90 bg-white/95 p-2 shadow-[0_24px_70px_-24px_rgba(2,12,20,.45)] backdrop-blur-2xl dark:border-white/[.10] dark:bg-[#0b151d]/95 dark:shadow-[0_26px_80px_-28px_rgba(0,0,0,.85)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(18,175,124,.12),transparent_34%)]" />

          <div className="relative space-y-1">
            {businessTypes.map((option) => {
              const selected = option === value;
              return (
                <button
                  key={option}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={`group flex w-full items-center justify-between gap-4 rounded-2xl px-3.5 py-3 text-left transition ${
                    selected
                      ? "bg-brand-500/[.10] text-brand-700 dark:bg-brand-500/[.12] dark:text-brand-300"
                      : "text-slate-700 hover:bg-slate-100/80 dark:text-slate-200 dark:hover:bg-white/[.055]"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full ring-4 transition ${
                      selected
                        ? "bg-brand-500 ring-brand-500/10"
                        : "bg-slate-300 ring-slate-300/10 group-hover:bg-brand-400 dark:bg-slate-600"
                    }`} />
                    <span className="text-sm font-bold">{option}</span>
                  </span>

                  <span className={`grid h-7 w-7 place-items-center rounded-lg transition ${
                    selected
                      ? "bg-brand-500 text-white shadow-[0_8px_18px_-8px_rgba(18,175,124,.8)]"
                      : "bg-slate-100 text-transparent dark:bg-white/[.05]"
                  }`}>
                    <Check className="h-3.5 w-3.5" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function ExpectedMonthlyBusinessDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative mt-2">
      <input type="hidden" name="expectedMonthlyBusiness" value={value} />

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className={`group flex min-h-12 w-full items-center justify-between gap-4 rounded-2xl border px-4 text-left text-sm font-semibold outline-none transition-all duration-200 ${
          open
            ? "border-brand-400 bg-brand-500/[.06] shadow-[0_0_0_4px_rgba(18,175,124,.10)] dark:border-brand-400/80 dark:bg-brand-500/[.08]"
            : "border-slate-200 bg-white hover:border-brand-300 dark:border-white/[.09] dark:bg-white/[.035] dark:hover:border-brand-500/35"
        }`}
      >
        <span className={value ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-slate-500"}>
          {value || "Select Range"}
        </span>

        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl border transition-all ${
            open
              ? "rotate-180 border-brand-500/25 bg-brand-500/10 text-brand-500"
              : "border-slate-200 bg-slate-50 text-slate-500 dark:border-white/[.08] dark:bg-white/[.04] dark:text-slate-300"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Expected Monthly Business"
          className="absolute left-0 right-0 top-[calc(100%+10px)] z-[90] overflow-hidden rounded-[20px] border border-slate-200/90 bg-white/95 p-2 shadow-[0_24px_70px_-24px_rgba(2,12,20,.45)] backdrop-blur-2xl dark:border-white/[.10] dark:bg-[#0b151d]/[.98] dark:shadow-[0_28px_90px_-26px_rgba(0,0,0,.90)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_0%,rgba(18,175,124,.16),transparent_38%),radial-gradient(circle_at_12%_100%,rgba(56,189,248,.08),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent" />

          <div className="relative space-y-1">
            {monthlyBusinessOptions.map((option) => {
              const selected = option === value;

              return (
                <button
                  key={option}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={`group flex w-full items-center justify-between gap-4 rounded-2xl px-3.5 py-3 text-left transition ${
                    selected
                      ? "bg-brand-500/[.10] text-brand-700 dark:bg-brand-500/[.14] dark:text-brand-300"
                      : "text-slate-700 hover:bg-slate-100/80 dark:text-slate-200 dark:hover:bg-white/[.055]"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ring-4 transition ${
                        selected
                          ? "bg-brand-500 ring-brand-500/10"
                          : "bg-slate-300 ring-slate-300/10 group-hover:bg-brand-400 dark:bg-slate-600 dark:ring-white/[.03]"
                      }`}
                    />
                    <span className="text-sm font-bold">{option}</span>
                  </span>

                  <span
                    className={`grid h-7 w-7 place-items-center rounded-lg transition ${
                      selected
                        ? "bg-brand-500 text-white shadow-[0_8px_18px_-8px_rgba(18,175,124,.8)]"
                        : "bg-slate-100 text-transparent dark:bg-white/[.05]"
                    }`}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function StepHeading({ number, title, copy }: { number: string; title: string; copy: string }) {
  return (
    <div className="mb-7 flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#07131c] text-sm font-black text-brand-300 shadow-[0_16px_40px_-20px_rgba(18,175,124,.75)] dark:bg-brand-500 dark:text-[#04120d]">
        {number}
      </span>
      <div>
        <h3 className="text-xl font-black tracking-[-.035em] sm:text-2xl">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">{copy}</p>
      </div>
    </div>
  );
}

function PartnerNetworkGraphic() {
  return (
    <div className="relative mt-10 min-h-[330px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[.035] p-5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-3xl" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 330" fill="none" aria-hidden="true">
        <path d="M261 165L112 78M261 165L406 70M261 165L430 238M261 165L112 253" stroke="rgba(118,221,185,.28)" strokeWidth="1.5" strokeDasharray="6 7" />
        <circle cx="261" cy="165" r="58" stroke="rgba(18,175,124,.32)" strokeWidth="1.5" />
        <circle cx="261" cy="165" r="86" stroke="rgba(18,175,124,.12)" strokeWidth="1" />
        <circle cx="112" cy="78" r="4" fill="#76DDB9" />
        <circle cx="406" cy="70" r="4" fill="#76DDB9" />
        <circle cx="430" cy="238" r="4" fill="#76DDB9" />
        <circle cx="112" cy="253" r="4" fill="#76DDB9" />
      </svg>

      <div className="relative z-10 flex h-full min-h-[290px] items-center justify-center">
        <div className="grid h-28 w-28 place-items-center rounded-[28px] border border-brand-300/20 bg-[#07131c]/90 shadow-[0_22px_70px_-28px_rgba(18,175,124,.8)] backdrop-blur-xl">
          <div className="text-center">
            <div className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-brand-500 text-[#04120d]"><WalletCards className="h-5 w-5" /></div>
            <p className="mt-2 text-[10px] font-black uppercase tracking-[.18em] text-brand-300">BillBring</p>
          </div>
        </div>

        <div className="absolute left-3 top-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0b1822]/90 px-3 py-2 text-xs font-bold text-white shadow-xl backdrop-blur-xl sm:left-6">
          <Store className="h-4 w-4 text-brand-300" /> Retailer
        </div>
        <div className="absolute right-2 top-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0b1822]/90 px-3 py-2 text-xs font-bold text-white shadow-xl backdrop-blur-xl sm:right-5">
          <UsersRound className="h-4 w-4 text-brand-300" /> Distributor
        </div>
        <div className="absolute bottom-4 left-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0b1822]/90 px-3 py-2 text-xs font-bold text-white shadow-xl backdrop-blur-xl sm:left-7">
          <CreditCard className="h-4 w-4 text-brand-300" /> Payments
        </div>
        <div className="absolute bottom-3 right-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0b1822]/90 px-3 py-2 text-xs font-bold text-white shadow-xl backdrop-blur-xl sm:right-6">
          <CircleDollarSign className="h-4 w-4 text-brand-300" /> Services
        </div>
      </div>
    </div>
  );
}

export function PartnerApplicationForm() {
  const [partnerType, setPartnerType] = useState("Retailer");
  const [businessType, setBusinessType] = useState("");
  const [expectedMonthlyBusiness, setExpectedMonthlyBusiness] = useState("");
  const [submissionState, setSubmissionState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submissionError, setSubmissionError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!businessType) {
      setSubmissionState("error");
      setSubmissionError("Please select your Business Type before submitting the application.");
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmissionState("error");
      setSubmissionError("EmailJS is not configured. Please add the EmailJS environment variables and restart the app.");
      return;
    }

    const formData = new FormData(form);
    const getValue = (name: string) => String(formData.get(name) ?? "").trim();
    const services = formData.getAll("services").map(String).join(", ");

    const templateParams = {
      partner_type: partnerType,
      full_name: getValue("fullName"),
      mobile: `+91 ${getValue("mobile")}`,
      email: getValue("email") || "Not provided",
      reply_to: getValue("email"),
      business_name: getValue("businessName"),
      business_type: businessType,
      address: getValue("address"),
      city: getValue("city"),
      state: getValue("state"),
      pin_code: getValue("pinCode"),
      district: getValue("district") || "Not provided",
      services: services || "No services selected",
      years_in_business: getValue("yearsInBusiness") || "Not provided",
      customer_base: getValue("customerBase") || "Not provided",
      expected_monthly_business: getValue("expectedMonthlyBusiness") || "Not provided",
      retailer_network: partnerType === "Distributor" ? getValue("retailerNetwork") || "Not provided" : "Not applicable",
      contact_preference: getValue("contactPreference"),
      message: getValue("message") || "No additional message",
      consent: formData.get("consent") ? "Yes" : "No",
      submitted_at: new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    };

    try {
      setSubmissionState("sending");
      setSubmissionError("");

      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });

      form.reset();
      setPartnerType("Retailer");
      setBusinessType("");
      setExpectedMonthlyBusiness("");
      setSubmissionState("success");
    } catch (error) {
      console.error("EmailJS partner application error:", error);
      setSubmissionState("error");
      setSubmissionError(error instanceof Error ? error.message : "We couldn't submit your application. Please try again.");
    }
  }

  return (
    <section id="partner-application" className="relative overflow-hidden border-y border-slate-200/70 bg-[#f7fbf9] py-20 dark:border-white/[.08] dark:bg-[#071019] sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6rem] top-1/3 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="section-shell relative">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-brand-500/[.07] px-3.5 py-2 text-[10px] font-black uppercase tracking-[.18em] text-brand-700 dark:text-brand-300">
            <Sparkles className="h-3.5 w-3.5" /> Partner Network
          </div>
          <h2 className="mt-5 text-[clamp(2.7rem,5vw,5rem)] font-black leading-[.94] tracking-[-.06em]">
            Become a <span className="text-brand-500">BillBring Partner.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-500 dark:text-slate-400 sm:text-lg">
            Join our growing fintech network and offer digital financial services to customers in your area.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[.72fr_1.28fr] xl:items-start">
          <aside className="relative overflow-hidden rounded-[32px] bg-[#06111a] p-6 text-white shadow-[0_35px_100px_-55px_rgba(5,19,31,.9)] sm:p-8 xl:sticky xl:top-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(18,175,124,.22),transparent_30%),radial-gradient(circle_at_90%_90%,rgba(56,189,248,.11),transparent_28%)]" />
            <div className="relative">
              <p className="text-[10px] font-black uppercase tracking-[.19em] text-brand-300">Built for local growth</p>
              <h3 className="mt-4 max-w-sm text-3xl font-black leading-[1.02] tracking-[-.045em] sm:text-4xl">One network. Multiple ways to grow your business.</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">Tell us about your business and the services you want to offer. Our partnership team can then evaluate the right model for your location and customer base.</p>

              <PartnerNetworkGraphic />

              <div className="mt-6 grid gap-3 sm:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">
                {[
                  [Landmark, "Financial", "service ecosystem"],
                  [Waypoints, "Connected", "partner network"],
                  [Layers3, "Multiple", "services in one place"],
                ].map(([Icon, title, copy]) => {
                  const GraphicIcon = Icon as typeof Landmark;
                  return (
                    <div key={String(title)} className="rounded-2xl border border-white/10 bg-white/[.045] p-4">
                      <GraphicIcon className="h-4 w-4 text-brand-300" />
                      <p className="mt-3 text-sm font-black">{String(title)}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">{String(copy)}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          <div className="relative isolate overflow-hidden rounded-[32px] border border-slate-200/80 bg-white p-5 shadow-[0_28px_90px_-55px_rgba(8,18,37,.45)] dark:border-white/[.09] dark:bg-[#0b1118] sm:p-7 lg:p-9">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              <div className="absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full bg-brand-400/[.10] blur-[90px] dark:bg-brand-400/[.08]" />
              <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-cyan-400/[.08] blur-[100px] dark:bg-cyan-400/[.06]" />
              <div
                className="absolute inset-0 opacity-[0.16] dark:opacity-[0.08]"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(18,175,124,.30) 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }}
              />
              <svg viewBox="0 0 900 1100" fill="none" className="absolute right-[-170px] top-[100px] h-[760px] w-[620px] opacity-[0.16] dark:opacity-[0.11]">
                <defs>
                  <linearGradient id="partnerFormNetworkGradient" x1="0" y1="0" x2="900" y2="1100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#12AF7C" />
                    <stop offset="0.5" stopColor="#38BDF8" />
                    <stop offset="1" stopColor="#12AF7C" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                <path d="M100 170C230 60 355 120 430 250C525 410 690 342 810 220" stroke="url(#partnerFormNetworkGradient)" strokeWidth="2" strokeDasharray="8 10" />
                <path d="M75 520C220 395 325 445 420 570C515 690 650 670 800 540" stroke="url(#partnerFormNetworkGradient)" strokeWidth="2" strokeDasharray="7 11" />
                <path d="M160 860C265 760 350 760 450 850C565 955 670 935 785 820" stroke="url(#partnerFormNetworkGradient)" strokeWidth="2" strokeDasharray="9 12" />
                <path d="M430 250C390 375 392 450 420 570" stroke="url(#partnerFormNetworkGradient)" strokeWidth="1.5" />
                <path d="M420 570C405 690 420 760 450 850" stroke="url(#partnerFormNetworkGradient)" strokeWidth="1.5" />
                {[[100,170],[430,250],[810,220],[75,520],[420,570],[800,540],[160,860],[450,850],[785,820]].map(([cx, cy], index) => (
                  <g key={index}>
                    <circle cx={cx} cy={cy} r="15" fill="white" fillOpacity="0.9" stroke="#12AF7C" strokeWidth="2" />
                    <circle cx={cx} cy={cy} r="5" fill="#12AF7C" />
                  </g>
                ))}
              </svg>
            </div>

            <div className="relative z-10 mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-7 dark:border-white/[.08]">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">Partner Application</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-.04em] sm:text-3xl">Tell us about your business.</h3>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-brand-50 px-3 py-2 text-xs font-extrabold text-brand-800 dark:bg-brand-500/10 dark:text-brand-300">
                <CheckCircle2 className="h-4 w-4" /> 5 simple steps
              </div>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-10" noValidate={false}>
              <section>
                <StepHeading number="01" title="Partner Details" copy="Start with your role and basic business information." />

                <fieldset>
                  <legend className={labelClass}>I want to join as:</legend>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {partnerTypes.map(({ value, icon: Icon }) => (
                      <label key={value} className={`group relative cursor-pointer rounded-2xl border p-4 transition ${partnerType === value ? "border-brand-400 bg-brand-50 shadow-[0_14px_40px_-28px_rgba(18,175,124,.7)] dark:bg-brand-500/[.08]" : "border-slate-200 bg-white hover:border-brand-300 dark:border-white/[.09] dark:bg-white/[.025]"}`}>
                        <input className="sr-only" type="radio" name="partnerType" value={value} checked={partnerType === value} onChange={() => setPartnerType(value)} required />
                        <div className="flex items-center justify-between gap-3">
                          <span className={`grid h-10 w-10 place-items-center rounded-xl ${partnerType === value ? "bg-brand-500 text-white" : "bg-slate-100 text-slate-500 dark:bg-white/[.06] dark:text-slate-300"}`}><Icon className="h-[18px] w-[18px]" /></span>
                          <span className={`h-4 w-4 rounded-full border-4 ${partnerType === value ? "border-brand-500 bg-white" : "border-slate-300 dark:border-slate-600"}`} />
                        </div>
                        <p className="mt-4 text-sm font-black">{value}</p>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <label><span className={labelClass}>Full Name<span className="text-brand-500">*</span></span><input className={inputClass} name="fullName" placeholder="Enter your full name" required /></label>
                  <label><span className={labelClass}>Mobile Number<span className="text-brand-500">*</span></span><div className="relative"><span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 border-r border-slate-200 pr-3 text-sm font-extrabold text-slate-500 dark:border-white/10">+91</span><input className={`${inputClass} pl-[4.6rem]`} name="mobile" type="tel" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} placeholder="Enter mobile number" required /></div></label>
                  <label><span className={labelClass}>Email Address</span><input className={inputClass} name="email" type="email" placeholder="Enter email address" /></label>
                  <label><span className={labelClass}>Business / Shop Name<span className="text-brand-500">*</span></span><input className={inputClass} name="businessName" placeholder="Enter business name" required /></label>
                  <label className="sm:col-span-2">
                    <span className={labelClass}>Business Type<span className="text-brand-500">*</span></span>
                    <BusinessTypeDropdown value={businessType} onChange={setBusinessType} />
                  </label>
                </div>
              </section>

              <section className="border-t border-slate-200/80 pt-9 dark:border-white/[.08]">
                <StepHeading number="02" title="Business Location" copy="Help us understand the market and service area you operate in." />
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="sm:col-span-2"><span className={labelClass}>Shop / Office Address<span className="text-brand-500">*</span></span><textarea className="mt-2 min-h-28 w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition placeholder:font-medium placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10 dark:border-white/[.09] dark:bg-white/[.035] dark:text-white" name="address" placeholder="Enter complete address" required /></label>
                  <label><span className={labelClass}>City<span className="text-brand-500">*</span></span><input className={inputClass} name="city" placeholder="Enter City" required /></label>
                  <label><span className={labelClass}>State<span className="text-brand-500">*</span></span><select className={inputClass} name="state" defaultValue="" required><option value="" disabled>Select State</option>{states.map((state) => <option key={state}>{state}</option>)}</select></label>
                  <label><span className={labelClass}>PIN Code<span className="text-brand-500">*</span></span><input className={inputClass} name="pinCode" inputMode="numeric" pattern="[1-9][0-9]{5}" maxLength={6} placeholder="Enter PIN code" required /></label>
                  <label><span className={labelClass}>District</span><input className={inputClass} name="district" placeholder="Enter District" /></label>
                </div>
              </section>

              <section className="border-t border-slate-200/80 pt-9 dark:border-white/[.08]">
                <StepHeading number="03" title="Services Interested In" copy="Select all the BillBring services you want to explore." />
                <fieldset>
                  <legend className={labelClass}>Select the services you are interested in:</legend>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {serviceOptions.map((service, index) => {
                      const icons = [CreditCard, WalletCards, Landmark, ShoppingCart, Waypoints, Layers3, Store, CircleDollarSign, Building2, Sparkles];
                      const Icon = icons[index];
                      return (
                        <label key={service} className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-4 transition hover:border-brand-300 hover:bg-brand-50/60 dark:border-white/[.08] dark:bg-white/[.025] dark:hover:border-brand-500/30 dark:hover:bg-brand-500/[.05]">
                          <input className="peer h-4 w-4 accent-[#12AF7C]" type="checkbox" name="services" value={service} />
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-slate-500 shadow-sm transition group-hover:text-brand-600 dark:bg-white/[.05] dark:text-slate-300"><Icon className="h-4 w-4" /></span>
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{service}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              </section>

              <section className="border-t border-slate-200/80 pt-9 dark:border-white/[.08]">
                <StepHeading number="04" title="Business Information" copy="A few operating details help us evaluate the right partnership model." />

                <div className="grid gap-7 lg:grid-cols-2">
                  <fieldset>
                    <legend className={labelClass}>Years in Business</legend>
                    <div className="mt-3 grid gap-2">
                      {["Less than 1 year", "1–3 years", "3–5 years", "5+ years"].map((item) => <label key={item} className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold transition hover:border-brand-300 dark:border-white/[.08]"><input className="h-4 w-4 accent-[#12AF7C]" type="radio" name="yearsInBusiness" value={item} />{item}</label>)}
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className={labelClass}>Existing Customer Base</legend>
                    <div className="mt-3 grid gap-2">
                      {["Less than 100", "100–500", "500–1,000", "1,000+"].map((item) => <label key={item} className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold transition hover:border-brand-300 dark:border-white/[.08]"><input className="h-4 w-4 accent-[#12AF7C]" type="radio" name="customerBase" value={item} />{item}</label>)}
                    </div>
                  </fieldset>
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <label><span className={labelClass}>Expected Monthly Business</span><ExpectedMonthlyBusinessDropdown value={expectedMonthlyBusiness} onChange={setExpectedMonthlyBusiness} /></label>
                  <label className={partnerType === "Distributor" ? "" : "opacity-60"}><span className={labelClass}>For Distributors — Retailer Network</span><input className={inputClass} name="retailerNetwork" type="number" min="0" placeholder="Number of Retailers" disabled={partnerType !== "Distributor"} /></label>
                </div>
              </section>

              <section className="border-t border-slate-200/80 pt-9 dark:border-white/[.08]">
                <StepHeading number="05" title="Contact Preference" copy="Choose how you would like the BillBring partnership team to reach you." />
                <fieldset>
                  <legend className={labelClass}>Preferred way to contact you:</legend>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {["Phone Call", "WhatsApp", "Email"].map((item) => <label key={item} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 p-4 text-sm font-bold transition hover:border-brand-300 dark:border-white/[.08]"><input className="h-4 w-4 accent-[#12AF7C]" type="radio" name="contactPreference" value={item} required />{item}</label>)}
                  </div>
                </fieldset>

                <label className="mt-6 block"><span className={labelClass}>Additional Message</span><textarea className="mt-2 min-h-32 w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition placeholder:font-medium placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10 dark:border-white/[.09] dark:bg-white/[.035] dark:text-white" name="message" placeholder="Tell us about your business" /></label>

                <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border border-brand-500/15 bg-brand-50/60 p-4 dark:bg-brand-500/[.055]">
                  <input className="mt-1 h-4 w-4 shrink-0 accent-[#12AF7C]" type="checkbox" name="consent" required />
                  <span className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-300">I agree to be contacted by the BillBring team regarding partnership opportunities.</span>
                </label>
              </section>

              {submissionState === "success" && (
                <div role="status" className="flex items-start gap-3 rounded-2xl border border-brand-500/20 bg-brand-50 p-4 text-sm font-semibold leading-6 text-brand-800 dark:bg-brand-500/[.08] dark:text-brand-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-black">Application submitted successfully.</p>
                    <p className="mt-1 font-semibold">Thank you for your interest in partnering with BillBring. Our team will review your application and contact you shortly.</p>
                  </div>
                </div>
              )}

              {submissionState === "error" && (
                <div role="alert" className="flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-50 p-4 text-sm font-semibold leading-6 text-red-700 dark:bg-red-500/[.08] dark:text-red-300">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-black">Application could not be submitted.</p>
                    <p className="mt-1 font-semibold">{submissionError}</p>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4 border-t border-slate-200/80 pt-7 dark:border-white/[.08] sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-xs leading-5 text-slate-500 dark:text-slate-400">Our team will contact you after reviewing your application.</p>
                <button
                  type="submit"
                  disabled={submissionState === "sending"}
                  className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#07131c] px-6 py-3.5 text-sm font-black text-white shadow-[0_18px_45px_-22px_rgba(7,19,28,.7)] transition hover:-translate-y-0.5 hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 dark:bg-brand-500 dark:text-[#04120d] dark:hover:bg-brand-400"
                >
                  {submissionState === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending Application...
                    </>
                  ) : (
                    <>
                      Submit Application <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}