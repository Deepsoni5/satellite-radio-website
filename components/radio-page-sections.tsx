"use client";

import { useState } from "react";
import {
  Phone,
  HelpCircle,
  Radio,
  CheckCircle2,
  Headphones,
  Signal,
  RefreshCw,
  ShieldAlert,
  CreditCard,
  Settings,
  PlusCircle,
  Satellite,
  ChevronDown,
  ChevronUp,
  Wifi,
  Wrench,
  UserCheck,
  Car,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { siteConfig } from "@/config/site";

const phone = siteConfig.contact.phone;
const phoneHref = `tel:${siteConfig.contact.phone}`;

/* ─── Call Now Button ─── */
function CallNowButton({
  label = "Call Now",
  onClick,
}: {
  label?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={phoneHref}
      onClick={onClick}
      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md sm:text-base"
    >
      <Phone className="h-4 w-4" /> {label} · {phone}
    </a>
  );
}

/* ─── Assistance Strip ─── */
function AssistanceStrip() {
  return (
    <div className="mt-6 flex flex-col items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <Headphones className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
        <div>
          <p className="text-sm font-bold text-foreground">
            Contact 24×7 Support
          </p>
          <p className="text-xs text-muted-foreground">
            Talk to a specialist in under 2 minutes.
          </p>
        </div>
      </div>
      <CallNowButton />
    </div>
  );
}

/* ─── Radio ID Lead Form ─── */
export function RadioIdLead({
  variant = "default",
}: {
  variant?: "default" | "activation";
}) {
  const [radioId, setRadioId] = useState("");
  const [open, setOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(true);
  };

  const quickLinks = [
    {
      label: "Click Here For Billing Issue",
      sub: "Charges refund and setup services",
      icon: CreditCard,
      color: "bg-emerald-500",
    },
    {
      label: "Click Here For New Setup",
      sub: "Install and setup your new radio or device",
      icon: PlusCircle,
      color: "bg-orange-500",
    },
    {
      label: "Click Here To Change Subscription",
      sub: "Upgrade, downgrade or modify Plan",
      icon: Settings,
      color: "bg-purple-500",
    },
    {
      label: "Click Here For Activation",
      sub: "Activate your SXM Radio",
      icon: Radio,
      color: "bg-blue-500",
    },
  ];

  const steps = [
    {
      step: "1",
      title: "Turn your radio on",
      desc: "SXM Activate now starts here — first thing's first, make sure your SXM radio is powered up and plugged in properly, whether it's in your car or a home dock.",
    },
    {
      step: "2",
      title: "Find that Radio ID",
      desc: "For SXM Activate now, switch over to channel 0 or 000. You should see an 8-digit number pop up on the screen. That's your Radio ID or ESN.",
    },
    {
      step: "3",
      title: "Type it in above",
      desc: "To keep SXM Activate now going, grab that 8-digit number and punch it into the box up top, then hit Submit.",
    },
    {
      step: "4",
      title: "Give us a call",
      desc: "SXM Activate now needs a quick check-in — one of our folks will jump on the line to double-check your device, send a quick signal refresh, and make sure your subscription is all set.",
    },
    {
      step: "5",
      title: "Check your signal",
      desc: "As part of SXM Activate now, after we refresh it, leave your radio on for a minute or two. It might take a sec for the new signal to kick in.",
    },
    {
      step: "6",
      title: "Flip through channels",
      desc: "Continue with SXM Activate now by trying a few different stations to make sure everything's coming in clear.",
    },
    {
      step: "7",
      title: "Set your presets",
      desc: "Almost done with SXM Activate now — save your favorite channels as presets so you don't have to hunt for them every time.",
    },
    {
      step: "8",
      title: "Kick back and enjoy",
      desc: "SXM Activate now is complete! You're all set to listen to commercial-free music, sports, talk shows, and more.",
    },
  ];

  return (
    <section className="border-b border-border bg-gradient-to-br from-primary/10 via-accent/30 to-background">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left: Form + info */}
          <div className="flex flex-col gap-8">
            {/* Form card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                <Radio className="h-3.5 w-3.5" /> Setup SXM Radio
              </span>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground md:text-3xl">
                Enter Radio ID to Continue
              </h2>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                Please enter your Radio ID to begin the activation lookup
                process.
              </p>

              <form onSubmit={onSubmit} className="mt-5 space-y-3">
                <label
                  htmlFor="radio-id"
                  className="block text-xs font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Radio ID / ESN
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="radio-id"
                    type="text"
                    required
                    value={radioId}
                    onChange={(e) => setRadioId(e.target.value)}
                    placeholder="e.g. 8H7K2P9X"
                    className="flex-1 rounded-lg border border-input bg-background px-4 py-3 text-base font-medium text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="submit"
                    className="cursor-pointer rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
                  >
                    Submit
                  </button>
                </div>

                {variant === "default" ? (
                  <a
                    href="/radio"
                    className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    <HelpCircle className="h-4 w-4" /> Click Here to Find Your
                    Radio ID?
                  </a>
                ) : (
                  <div className="rounded-lg border border-border bg-secondary/50 p-4 text-sm text-foreground space-y-3">
                    <button
                      onClick={() => setGuideOpen(!guideOpen)}
                      className="flex w-full items-center justify-between gap-2 text-left"
                      type="button"
                    >
                      <p className="font-bold text-primary">
                        How To Find Your Radio ID?
                      </p>
                      {guideOpen ? (
                        <ChevronUp className="h-4 w-4 flex-shrink-0 text-primary" />
                      ) : (
                        <ChevronDown className="h-4 w-4 flex-shrink-0 text-primary" />
                      )}
                    </button>
                    {guideOpen && (
                      <ol className="space-y-3 pl-1">
                        {steps.map((item) => (
                          <li
                            key={item.step}
                            className="flex items-start gap-2.5"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-black text-primary-foreground">
                              {item.step}
                            </span>
                            <div>
                              <span className="font-semibold text-foreground">
                                {item.title} —{" "}
                              </span>
                              <span className="text-muted-foreground">
                                {item.desc}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                )}
              </form>

              {/* Activate without code strip */}
              <div className="mt-5 flex flex-col items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <Radio className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      Activate without code — Car Radio &amp; TV
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Instant activation for your radio or vehicle. No code
                      needed.
                    </p>
                  </div>
                </div>
                <CallNowButton label="Call Now" />
              </div>
              <AssistanceStrip />
            </div>
          </div>

          {/* Right: How it works card */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
              <ShieldAlert className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-xl font-bold text-foreground md:text-2xl">
                How Does Activation Work?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                Enter your Radio ID above and our specialists will guide you
                through setup, signal refresh, and subscription verification in
                minutes.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-foreground">
                {[
                  "Instant Radio ID lookup",
                  "Signal refresh & troubleshooting",
                  "Subscription & plan guidance",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />{" "}
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CallNowButton label="Call Now" />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Available 24×7 · Free consultation
              </p>
            </div>

            {/* Hero image */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85"
                alt="SiriusXM car radio dashboard"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground">
                  <Radio className="h-3.5 w-3.5" /> SiriusXM Radio
                </span>
                <p className="mt-2 text-sm font-semibold text-white">
                  200+ channels of commercial-free music, sports &amp; talk
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
                <Signal className="h-5 w-5 text-primary" />
                <p className="mt-2 text-sm font-bold text-foreground">
                  Nationwide Coverage
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Coast-to-coast signal, no Wi‑Fi needed
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
                <Headphones className="h-5 w-5 text-primary" />
                <p className="mt-2 text-sm font-bold text-foreground">
                  200+ Channels
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Music, sports, news &amp; comedy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Link Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((item) => (
            <a
              key={item.label}
              href={phoneHref}
              className="group flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color} text-white`}
              >
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {item.sub}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-center text-2xl font-black text-foreground">
              We Have Received Your Radio ID
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-muted-foreground leading-relaxed">
              Your Radio ID was detected successfully. To finish activation and
              restore streaming access, your device may require manual
              verification from a support specialist.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-1">
            <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
              <div className="flex items-start gap-2">
                <ShieldAlert className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                <p className="text-sm text-orange-800 leading-relaxed">
                  <span className="font-bold">
                    Activation is currently pending.
                  </span>{" "}
                  Delays in verification may interrupt access to your radio
                  services. Call now for immediate activation assistance.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CallNowButton label="Call Now" onClick={() => setOpen(false)} />
              <p className="text-xs text-muted-foreground">
                ★ Average activation assistance takes only a few minutes.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-secondary/50 p-4">
              <p className="text-center text-xs text-muted-foreground mb-3">
                Billing, Subscription Renewal, Signal Refresh &amp; Technical
                Support
              </p>
              <div className="flex justify-center">
                <CallNowButton
                  label="Call Now"
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ─── Support Hero Strip ─── */
function SupportHeroStrip() {
  return (
    <section className="border-b border-border bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-center">
          <div className="lg:col-span-2">
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
              SXM Radio Setup
            </span>
            <h2 className="mt-3 text-2xl font-black md:text-3xl">
              Sales &amp; Support Services
            </h2>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Fix Signal Error · Expert Configuration · Reliable Signal Solution
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3">
              <Signal className="h-5 w-5 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider">
                  Signal Issue with SXM Radio
                </p>
                <p className="text-xs text-primary-foreground/70">
                  FM Help Quick
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3">
              <Satellite className="h-5 w-5 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider">
                  SXM Radio Contact 24×7 Support
                </p>
                <p className="text-xs text-primary-foreground/70">
                  Radio Setup Satellite Signal
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-white text-primary px-4 py-3 text-sm font-bold shadow transition-all hover:bg-white/90"
            >
              <Phone className="h-4 w-4" /> {phone}
            </a>
            <p className="text-center text-xs text-primary-foreground/70">
              SXM Radio — Buy &amp; enjoy unlimited music in car.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Key Services Section ─── */
function KeyServicesSection() {
  const services = [
    {
      icon: Radio,
      title: "SXM Radio Activation",
      items: [
        "SXM radio activation assistance",
        "Help with SXM radio service issues",
        "Support for new or existing SXM radios",
        "Guidance for activation-related problems",
      ],
    },
    {
      icon: Wifi,
      title: "Easy Activation Support",
      desc: "Get your SXM radio service up and running in minutes without any technical hassle.",
      items: [
        "Step-by-step activation walkthrough",
        "No technical expertise required",
        "Works for all major SXM radio models",
        "Same-day activation assistance",
      ],
    },
    {
      icon: Wrench,
      title: "Hardware Troubleshooting",
      desc: 'Facing signal issues or "Antenna Disconnected" messages? We help you fix hardware errors quickly.',
      items: [
        "Antenna disconnected error fix",
        "Signal reception troubleshooting",
        "Hardware diagnostic support",
        "Quick remote resolution",
      ],
    },
    {
      icon: UserCheck,
      title: "Account & Subscription",
      desc: "Assistance with choosing the right plans and managing your radio account efficiently.",
      items: [
        "Plan selection guidance",
        "Subscription upgrades & downgrades",
        "Account recovery assistance",
        "Billing & payment support",
      ],
    },
  ];

  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Key Services
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground md:text-3xl">
            Our SXM Radio Services
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Comprehensive support for every aspect of your SXM radio experience.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">
                {s.title}
              </h3>
              {s.desc && (
                <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
              )}
              <ul className="mt-3 space-y-1.5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs text-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <AssistanceStrip />
      </div>
    </section>
  );
}

/* ─── How to Find Radio ID ─── */
function FindRadioIdSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Radio ID / ESN
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground md:text-3xl">
              How to Find Your Radio ID
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              Need help finding your ESN or Radio ID? To get started, tune your
              SXM radio to Channel 0. Your 8-digit Radio ID or ESN should appear
              on the screen.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              If you cannot see it, our support team can walk you through the
              menu settings of your specific hardware model to locate it.
            </p>
            <div className="mt-6">
              <CallNowButton label="Get Help Finding ID" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                step: "01",
                title: "Tune to Channel 0",
                desc: "Navigate to channel 0 or 000 on your SXM radio tuner.",
              },
              {
                step: "02",
                title: "Check the Display",
                desc: "Your 8-digit Radio ID or ESN should appear on screen automatically.",
              },
              {
                step: "03",
                title: "Check the Menu",
                desc: "Access Settings → Subscription or Advanced in the radio's menu.",
              },
              {
                step: "04",
                title: "Check the Hardware",
                desc: "Look at the label on the back or bottom of your radio device.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-border bg-card p-4 shadow-sm"
              >
                <div className="text-2xl font-black text-primary/20">
                  {item.step}
                </div>
                <h4 className="mt-1 text-sm font-bold text-foreground">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ Section ─── */
function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const faqs = [
    {
      q: "Why is my radio stuck on the preview channel?",
      a: "This usually means the activation signal hasn't been fully received. We can help you perform a signal refresh. Keep your radio powered on and in an open outdoor location for best results.",
    },
    {
      q: "Can I use my SXM radio in multiple cars?",
      a: "Yes, with the right vehicle dock and power adapter setup, your radio can be portable. Our team can guide you through the correct accessories and setup process for each vehicle.",
    },
    {
      q: "What should I do if I see an 'Antenna Disconnected' message?",
      a: "Check the physical connection at the back of the dock. If the wire is intact, the antenna might need a reset or replacement. Our support team can diagnose the exact cause remotely.",
    },
    {
      q: "How long does activation take?",
      a: "Most activations complete within a few minutes. However, timing can vary depending on your receiver model and signal strength. Keep the radio powered on during this period.",
    },
    {
      q: "What if my subscription expired?",
      a: "If your subscription expired, channels will stop working. Contact our support team to help you reactivate your plan and refresh the signal to your device.",
    },
  ];

  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            FAQ
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Quick answers to the most common SXM radio questions.
          </p>
        </div>
        <div className="max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-sm font-semibold text-foreground">
                  {faq.q}
                </span>
                {openIdx === i ? (
                  <ChevronUp className="h-4 w-4 flex-shrink-0 text-primary" />
                ) : (
                  <ChevronDown className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                )}
              </button>
              {openIdx === i && (
                <div className="border-t border-border bg-secondary/30 px-5 pb-5 pt-4 text-sm text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <AssistanceStrip />
      </div>
    </section>
  );
}

/* ─── Our Services Grid ─── */
function OurServicesSection() {
  const serviceBlocks = [
    {
      icon: Radio,
      title: "SXM Radio",
      subtitle: "Account & Subscription Support",
      desc: "Need help managing your account? We've got you covered.",
      items: [
        "Subscription activation & renewal",
        "Plan upgrades or changes",
        "Billing & payment assistance",
        "Login and account recovery",
      ],
      color: "from-blue-500/10 to-blue-500/5",
      iconColor: "bg-blue-500",
    },
    {
      icon: Car,
      title: "SXM Radio on Demand for Car",
      subtitle: "In-Car Listening Support",
      desc: "Enjoy seamless listening in your vehicle.",
      items: [
        "Radio activation & setup",
        "Signal refresh assistance",
        "Channel troubleshooting",
        "Compatibility guidance for different vehicles",
      ],
      color: "from-emerald-500/10 to-emerald-500/5",
      iconColor: "bg-emerald-500",
    },
    {
      icon: Wrench,
      title: "Custom FM App Development",
      subtitle: "Facility Management",
      desc: "We design and develop user-friendly mobile and web apps tailored to your facility's needs.",
      items: [
        "Complaint & ticket management",
        "Maintenance scheduling",
        "Asset tracking",
        "Visitor management systems",
      ],
      color: "from-purple-500/10 to-purple-500/5",
      iconColor: "bg-purple-500",
    },
  ];

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground md:text-3xl">
            Everything You Need, All in One Place
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {serviceBlocks.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl bg-gradient-to-b ${s.color} border border-border p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.iconColor} text-white`}
              >
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {s.subtitle}
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
              <ul className="mt-4 space-y-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-card px-4 py-2 text-xs font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="h-3.5 w-3.5" /> Contact Support
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Car Kit Section ─── */
function CarKitSection() {
  return (
    <section className="border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Portable &amp; Car Kit Setup
            </span>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Step-by-step help for any vehicle or home dock
            </h2>
            <p className="mt-3 text-sm text-background/70 md:text-base">
              Installing SXM radio kits in any vehicle or home dock can be
              tricky. Our specialists provide hands-on remote guidance to make
              sure your setup is perfect the first time.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-background/90">
              {[
                "Car installation support",
                "Home dock configuration",
                "FM transmitter setup",
                "Antenna alignment guidance",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />{" "}
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CallNowButton label="Get Setup Help" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: RefreshCw,
                label: "Signal Refresh",
                desc: "Instant OTA signal update",
              },
              {
                icon: Signal,
                label: "Reliable Signal",
                desc: "Optimized for any location",
              },
              {
                icon: Satellite,
                label: "SXM Radio",
                desc: "All models supported",
              },
              {
                icon: Headphones,
                label: "24×7 Support",
                desc: "Always available for you",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-background/10 bg-background/5 p-4"
              >
                <item.icon className="h-6 w-6 text-primary" />
                <p className="mt-2 text-sm font-bold">{item.label}</p>
                <p className="mt-0.5 text-xs text-background/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Activate CTA Section ─── */
function ActivateCTASection() {
  return (
    <section className="border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <ShieldAlert className="h-6 w-6 text-primary" />
            <h2 className="mt-3 text-2xl font-black md:text-3xl">
              Activate your SXM Radio
            </h2>
            <p className="mt-2 text-sm text-background/70 md:text-base">
              Skip the confusion. A live activation specialist can walk you
              through setup, signal refresh, and subscription verification in
              minutes.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-background/90">
              {[
                "Instant Radio ID lookup",
                "Signal refresh & troubleshooting",
                "Subscription & plan guidance",
                "Portable & car kit setup",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />{" "}
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CallNowButton label="Call Now" />
            </div>
            <p className="mt-3 text-xs text-background/60">
              Available 24×7 · Free consultation
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: Radio,
                label: "Radio Activation",
                desc: "All models & brands",
              },
              {
                icon: Car,
                label: "Car Setup",
                desc: "In-vehicle installation",
              },
              {
                icon: Signal,
                label: "Signal Refresh",
                desc: "Instant OTA update",
              },
              {
                icon: Headphones,
                label: "24×7 Support",
                desc: "Always here for you",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-background/10 bg-background/5 p-4"
              >
                <item.icon className="h-6 w-6 text-primary" />
                <p className="mt-2 text-sm font-bold">{item.label}</p>
                <p className="mt-0.5 text-xs text-background/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Export ─── */
export function ActivationInfoSections() {
  return (
    <>
      <SupportHeroStrip />
      <KeyServicesSection />
      <FindRadioIdSection />
      <ActivateCTASection />
      <FaqSection />
      <OurServicesSection />
      <CarKitSection />
    </>
  );
}
