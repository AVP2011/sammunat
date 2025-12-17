"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--text-primary)]">
            Get in Touch
          </h2>

          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Have questions or want to collaborate?  
            Reach out and we’ll get back to you soon.
          </p>

          <div className="mt-8 space-y-3 text-[var(--text-secondary)]">
            <p>
              📧 <span className="ml-2">contact@sammunat.com</span>
            </p>
            <p>
              🌍 <span className="ml-2">Global • Remote Friendly</span>
            </p>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="
            bg-[var(--card)]
            border border-[var(--border)]
            rounded-2xl p-6 sm:p-8
            space-y-5
          "
        >
          <div>
            <label className="block text-sm mb-1 text-[var(--text-secondary)]">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="
                w-full px-4 py-3 rounded-lg
                bg-transparent
                border border-[var(--border)]
                text-[var(--text-primary)]
                placeholder:text-[var(--text-secondary)]
                focus:outline-none focus:ring-2 focus:ring-violet-500/40
              "
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-[var(--text-secondary)]">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="
                w-full px-4 py-3 rounded-lg
                bg-transparent
                border border-[var(--border)]
                text-[var(--text-primary)]
                placeholder:text-[var(--text-secondary)]
                focus:outline-none focus:ring-2 focus:ring-violet-500/40
              "
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-[var(--text-secondary)]">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Your message..."
              className="
                w-full px-4 py-3 rounded-lg
                bg-transparent
                border border-[var(--border)]
                text-[var(--text-primary)]
                placeholder:text-[var(--text-secondary)]
                focus:outline-none focus:ring-2 focus:ring-violet-500/40
                resize-none
              "
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="
              w-full mt-4 py-3 rounded-xl
              bg-gradient-to-r from-violet-500 to-blue-500
              text-white font-medium
              hover:shadow-lg
              transition
            "
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
