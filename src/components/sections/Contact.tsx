
"use client";

import { useState, type FormEvent } from "react";

import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiArrowUpRight,
} from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const EMAIL = "nuralam1122345@gmail.com";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href =
      `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Have a project, job opportunity, or
            collaboration in mind? Feel free to
            reach out.
          </p>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-indigo-600" />
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left: Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Let's Connect
            </h3>

            <p className="mt-4 max-w-lg text-base leading-8 text-slate-600">
              I'm interested in opportunities where
              I can contribute my development skills,
              collaborate with teams, and continue
              growing as a developer.
            </p>

            <div className="mt-8 space-y-5">

              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-indigo-200"
              >
                <div className="flex size-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <FiMail size={22} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-slate-500">
                    Email Me
                  </p>
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {EMAIL}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex size-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <FiMapPin size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    Bangladesh
                  </p>
                </div>
              </div>

              {/* GitHub */}
              <a
                href="https://github.com/nuralam-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-indigo-200"
              >
                <div className="flex size-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <FiGithub size={22} />
                </div>

                <div className="flex-1">
                  <p className="text-sm text-slate-500">
                    GitHub
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    nuralam-dev
                  </p>
                </div>

                <FiArrowUpRight className="text-slate-400" />
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://github.com/nuralam-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-indigo-600 hover:text-indigo-600"
              >
                <FiGithub size={20} />
              </a>

              {/* Replace with your real LinkedIn URL */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-indigo-600 hover:text-indigo-600"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <Card className="gap-0 rounded-2xl border-slate-200 bg-white py-0 shadow-sm">
            <CardContent className="p-6 sm:p-8">

              <h3 className="mb-2 text-xl font-bold text-slate-900">
                Send a Message
              </h3>

              <p className="mb-7 text-sm text-slate-500">
                Fill out the form to compose an email.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Your Name
                  </label>

                  <Input
                    id="contact-name"
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    className="h-12 border-slate-200 focus-visible:ring-indigo-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email Address
                  </label>

                  <Input
                    id="contact-email"
                    type="email"
                    required
                    maxLength={254}
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    className="h-12 border-slate-200 focus-visible:ring-indigo-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Your Message
                  </label>

                  <Textarea
                    id="contact-message"
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={6}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    className="min-h-36 resize-y border-slate-200 focus-visible:ring-indigo-500"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="h-12 w-full bg-indigo-600 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  <FiSend size={17} />
                  Compose Email
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
