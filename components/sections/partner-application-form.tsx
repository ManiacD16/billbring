"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  CreditCard,
  Landmark,
  Layers3,
  ShoppingCart,
  Sparkles,
  Store,
  UsersRound,
  WalletCards,
  Waypoints,
} from "lucide-react";

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
  const [validated, setValidated] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setValidated(true);
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

        <div className="grid gap-6 xl:items-start">
          {/* <aside className="relative overflow-hidden rounded-[32px] bg-[#06111a] p-6 text-white shadow-[0_35px_100px_-55px_rgba(5,19,31,.9)] sm:p-8 xl:sticky xl:top-28">
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
          </aside> */}

          <div className="rounded-[32px] border border-slate-200/80 bg-white p-5 shadow-[0_28px_90px_-55px_rgba(8,18,37,.45)] dark:border-white/[.09] dark:bg-[#0b1118] sm:p-7 lg:p-9">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-7 dark:border-white/[.08]">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.17em] text-brand-600 dark:text-brand-300">Partner Application</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-.04em] sm:text-3xl">Tell us about your business.</h3>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-brand-50 px-3 py-2 text-xs font-extrabold text-brand-800 dark:bg-brand-500/10 dark:text-brand-300">
                <CheckCircle2 className="h-4 w-4" /> 5 simple steps
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10" noValidate={false}>
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
                  <label className="sm:col-span-2"><span className={labelClass}>Business Type<span className="text-brand-500">*</span></span><select className={inputClass} name="businessType" defaultValue="" required><option value="" disabled>Retail Shop / Mobile Shop / CSC / Agency / Other</option><option>Retail Shop</option><option>Mobile Shop</option><option>CSC</option><option>Agency</option><option>Other</option></select></label>
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
                  <label><span className={labelClass}>Expected Monthly Business</span><select className={inputClass} name="expectedMonthlyBusiness" defaultValue=""><option value="" disabled>Select Range</option><option>Below ₹1 Lakh</option><option>₹1–5 Lakhs</option><option>₹5–10 Lakhs</option><option>₹10–25 Lakhs</option><option>₹25 Lakhs+</option></select></label>
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

              {validated && (
                <div className="rounded-2xl border border-brand-500/20 bg-brand-50 p-4 text-sm font-semibold leading-6 text-brand-800 dark:bg-brand-500/[.08] dark:text-brand-300">
                  Your form is complete and has passed front-end validation. Connect this form to your API / CRM endpoint to send partnership applications to the BillBring team.
                </div>
              )}

              <div className="flex flex-col gap-4 border-t border-slate-200/80 pt-7 dark:border-white/[.08] sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-xs leading-5 text-slate-500 dark:text-slate-400">Our team will contact you after reviewing your application.</p>
                <button type="submit" className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#07131c] px-6 py-3.5 text-sm font-black text-white shadow-[0_18px_45px_-22px_rgba(7,19,28,.7)] transition hover:-translate-y-0.5 hover:bg-brand-600 dark:bg-brand-500 dark:text-[#04120d] dark:hover:bg-brand-400">
                  Submit Application <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}