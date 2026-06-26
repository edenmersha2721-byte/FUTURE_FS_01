import { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Github,
  Linkedin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  GraduationCap,
} from "lucide-react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { sendContactMessage } from "@/lib/api";
import { site } from "@/data/site";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email address.";
    if (!form.message.trim() || form.message.trim().length < 10)
      return "Your message should be at least 10 characters.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus({ state: "error", message: error });
      return;
    }

    setStatus({ state: "loading", message: "" });
    try {
      const res = await sendContactMessage(form);
      setStatus({
        state: "success",
        message: res.message || "Thanks! Your message has been sent.",
      });
      setForm(initialForm);
    } catch (err) {
      setStatus({
        state: "error",
        message: err.message || "Failed to send. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something"
          highlight="amazing together"
          subtitle="Have a project in mind, an internship opportunity, or just want to say hello? Fill out the form and I'll get back to you soon."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact info */}
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              <Card className="p-6">
                <h3 className="font-semibold">Contact details</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Prefer email or socials? Reach me directly.
                </p>
                <div className="mt-6 space-y-4">
                  <ContactRow
                    icon={Mail}
                    label="Email"
                    value={site.email}
                    href={`mailto:${site.email}`}
                  />
                  <ContactRow
                    icon={MapPin}
                    label="Location"
                    value={site.location}
                  />
                  <ContactRow
                    icon={GraduationCap}
                    label="Currently"
                    value="Grade 12 · INSA Dev Program"
                  />
                  <ContactRow
                    icon={Clock}
                    label="Availability"
                    value="Open for internships"
                  />
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-sm font-medium">Connect with me</p>
                  <div className="mt-3 flex gap-3">
                    <SocialIcon href={site.socials.github} label="GitHub">
                      <Github className="size-4" />
                    </SocialIcon>
                    <SocialIcon href={site.socials.linkedin} label="LinkedIn">
                      <Linkedin className="size-4" />
                    </SocialIcon>
                    <SocialIcon href={site.socials.instagram} label="Instagram">
                      <FaInstagram className="size-4" />
                    </SocialIcon>
                    <SocialIcon href={site.socials.telegram} label="Telegram">
                      <FaTelegramPlane className="size-4" />
                    </SocialIcon>
                    <SocialIcon href={site.socials.email} label="Email">
                      <Mail className="size-4" />
                    </SocialIcon>
                  </div>
                </div>
              </Card>

              <Card className="flex items-center gap-4 bg-gradient-to-br from-indigo-600/15 to-violet-700/10 p-6">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>
                <p className="text-sm">
                  <span className="font-medium">Available for new projects</span>
                  <br />
                  <span className="text-muted-foreground">
                    Usually responds within a day.
                  </span>
                </p>
              </Card>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <Card className="p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-600/20 text-indigo-300">
                  <MessageSquare className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">Send me a message</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and I&apos;ll reply soon.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your Name" htmlFor="name">
                    <Input
                      id="name"
                      placeholder="Eden Mersha"
                      value={form.name}
                      onChange={update("name")}
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Your Email" htmlFor="email">
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={update("email")}
                      autoComplete="email"
                    />
                  </Field>
                </div>

                <Field label="Subject" htmlFor="subject">
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={update("subject")}
                  />
                </Field>

                <Field label="Your Message" htmlFor="message">
                  <Textarea
                    id="message"
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={update("message")}
                  />
                </Field>

                {status.state === "success" && (
                  <StatusBanner variant="success" icon={CheckCircle2}>
                    {status.message}
                  </StatusBanner>
                )}
                {status.state === "error" && (
                  <StatusBanner variant="error" icon={AlertCircle}>
                    {status.message}
                  </StatusBanner>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status.state === "loading"}
                >
                  {status.state === "loading" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="size-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-indigo-300">
        <Icon className="size-4" />
      </span>
      <div className="leading-tight">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block transition-opacity hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-indigo-500/40 hover:text-foreground"
    >
      {children}
    </a>
  );
}

function StatusBanner({ variant, icon: Icon, children }) {
  const styles =
    variant === "success"
      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
      : "border-red-500/30 bg-red-500/10 text-red-300";
  return (
    <div
      className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm ${styles}`}
    >
      <Icon className="size-4 shrink-0" />
      <span>{children}</span>
    </div>
  );
}
