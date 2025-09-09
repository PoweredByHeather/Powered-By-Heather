"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, FileText, ExternalLink, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "./globals.css";

const featured = [
  {
    name: "Market on Market (Retail Incubator)",
    subtitle: "A 12-month launchpad for four retail founders in Downtown Durham",
    status: "Cohort applications opening — Fall 2025",
    href: "https://downtowndurham.com/MarketOnMarket/",
  },
  {
    name: "Blueprint 2035",
    subtitle: "Community listening + activation to rebuild trust and shape a 10-year downtown plan",
    status: "Ongoing",
    href: "https://downtowndurham.com/blueprint/",
  },
  {
    name: "Business Retention & Recruitment Fund",
    subtitle: "Grant and loan program supporting small businesses in Downtown Durham",
    status: "Active — Multi-year initiative",
    href: "https://irp.cdn-website.com/df9a0766/files/uploaded/Durham_Choice_Business_Fund_Brochure-UPDATED_250415_(HUD_GUIDANCE).pdf",
  },
  {
    name: "Aya Birth & Community Wellness",
    subtitle: "North Carolina’s first Black midwife‑led birth & wellness center (nonprofit startup)",
    status: "Complete",
    href: "https://ayawellness.org/",
  },
  {
    name: "Social Enterprise Academy",
    subtitle: "Organizations first‑ever soft‑skills & workforce pathway; partnered with FIU to prepare participants for sustainable careers",
    status: "Complete",
    href: "https://www.youtube.com/watch?v=InuUZaMdtZA",
  },
];

const links = {
  linkedin: "https://www.linkedin.com/in/wilsonhe/",
  email: "mailto:heather@poweredbyheather.com",
  resume: "/Heather-M-Wilson-2025-Resume.pdf",
};

export default function PoweredByHeather() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="inline-flex p-2 rounded-xl bg-neutral-900 text-white">
              <Sparkles className="w-4 h-4" />
            </span>
            <span>Powered By Heather</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-2xl">
              <a href={links.resume} target="_blank" rel="noreferrer">
                <FileText className="w-4 h-4 mr-2" /> Resume
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              I make things happen.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-neutral-700 max-w-2xl">
              I turn big ideas and complex challenges into measurable results. I thrive at the intersection of strategy, execution, and communication — aligning people, simplifying complexity, and driving progress with clarity and discipline.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl">
                <a href="#projects">
                  Explore my projects <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" asChild className="rounded-2xl">
                <a href={links.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" /> Connect on LinkedIn
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              Currently focused on: program design, partnerships, operational excellence, and communications that inspire action.
            </p>
            <p className="mt-6 text-sm font-medium text-neutral-900 italic">
              *This work (and site) is proudly Powered by Heather.*
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-base font-semibold text-neutral-900">Snapshot</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  <li>• Systems thinker with a builder’s bias for action.</li>
                  <li>• Program and project management expertise.</li>
                  <li>• Communications that bridge strategy and execution.</li>
                  <li>• Skilled in stakeholder engagement and operational improvement.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

     {/* About */}
<section id="about" className="py-16 md:py-20 bg-white border-t border-neutral-200">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid gap-6 md:grid-cols-12 items-start">
      {/* 1) Headshot (left) — circular & large */}
      <div className="md:col-span-3 flex justify-center md:justify-start">
        <img
          src="/heather-headshot.jpg"
          alt="Heather Wilson headshot"
          className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-sm ring-1 ring-neutral-200"
          loading="eager"
        />
      </div>

      {/* 2) About Heather */}
      <div className="md:col-span-5">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">About Heather</h2>
        <p className="mt-4 text-neutral-700">
          I'm a program and partnerships leader who translates vision into execution. I build the plan, align the people,
          manage the dependencies, and deliver outcomes you can measure. My strength lies in turning complexity into clear next steps —
          and driving them to the finish line.
        </p>
        <p className="mt-4 text-neutral-700">
          I care about resilient communities, equitable access to opportunity, and the small details that create a great experience for
          stakeholders. Recently, that’s looked like incubating retail founders, coordinating partnerships, and elevating systems that help people grow.
        </p>
      </div>

      {/* 3) Strengths */}
      <div className="md:col-span-2">
        <div className="border border-neutral-200 bg-white rounded-2xl">
          <div className="p-5">
            <p className="text-xs uppercase tracking-wide text-neutral-500">Strengths</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-800">
              <li>• Strategy → Roadmap → Execution</li>
              <li>• Stakeholder & partner orchestration</li>
              <li>• Communications that resonate across audiences</li>
              <li>• Grant, budget & vendor alignment</li>
              <li>• Operational playbooks & rituals</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4) Focus Areas */}
      <div className="md:col-span-2">
        <div className="border border-neutral-200 bg-white rounded-2xl">
          <div className="p-5">
            <p className="text-xs uppercase tracking-wide text-neutral-500">Focus Areas</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-800">
              <li>• Program & project management</li>
              <li>• Partnerships & stakeholder engagement</li>
              <li>• Operations & process improvement</li>
              <li>• Strategic communications & storytelling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Projects */}
      <section id="projects" className="py-16 md:py-20 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Projects</h2>
            <p className="text-sm text-neutral-600">This will evolve as new work goes live.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {featured.map((p, idx) => (
              <Card key={idx} className="rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <a className="text-sm inline-flex items-center gap-1 text-neutral-700 hover:underline" href={p.href} target="_blank" rel="noreferrer">
                      View <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-neutral-700">{p.subtitle}</p>
                  <p className="mt-3 text-xs text-neutral-500">{p.status}</p>
                </CardContent>
              </Card>
            ))}
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">More coming soon</h3>
                <p className="mt-2 text-sm text-neutral-700">
                  As projects move from build → launch, you'll find live case studies, artifacts, and results here.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Let’s build something that matters.</h2>
              <p className="mt-4 text-neutral-700 max-w-2xl">
                Recruiters, collaborators, and curious humans — I’d love to connect. If your challenge needs clarity, coordination, and thoughtful execution, I’m your person.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-2xl">
                  <a href={links.email}><Mail className="w-4 h-4 mr-2"/> Email Heather</a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl">
                  <a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4 mr-2"/> LinkedIn</a>
                </Button>
                <Button asChild variant="ghost" className="rounded-2xl">
                  <a href={links.resume} target="_blank" rel="noreferrer"><FileText className="w-4 h-4 mr-2"/> Resume</a>
                </Button>
              </div>
            </div>
            <div className="md:col-span-5">
              <Card className="rounded-2xl">
                <CardContent className="p-6">
                  <p className="text-sm text-neutral-700">
                    <span className="font-semibold">Quick note:</span> This site is a growing hub. Check back for work samples, playbooks, and behind-the-scenes build logs as new programs go live.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Powered By Heather</p>
          <p>Built with intention — strategy → systems → results.</p>
        </div>
      </footer>
    </div>
  );
}
