import { Reveal } from "./Reveal";
import { contact } from "@/lib/data";

const items = [
  {
    icon: "📍",
    label: "Head Office",
    content: <p>{contact.address}</p>,
  },
  {
    icon: "📞",
    label: "Mobile",
    content: (
      <p>
        {contact.phones.map((phone, i) => (
          <span key={phone}>
            <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-teal">
              {phone}
            </a>
            {i < contact.phones.length - 1 && <span className="text-ink-3"> &middot; </span>}
          </span>
        ))}
      </p>
    ),
  },
  {
    icon: "✉️",
    label: "Email",
    content: (
      <p className="space-y-0.5">
        {contact.emails.map((email) => (
          <a key={email} href={`mailto:${email}`} className="block hover:text-teal">
            {email}
          </a>
        ))}
      </p>
    ),
  },
];

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container grid gap-14 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <p className="section-kicker">Get In Touch</p>
          <h2 className="max-w-md text-3xl font-bold sm:text-4xl">
            Let Us Build South Sudan Together.
          </h2>
          <p className="mt-4 max-w-md text-[0.975rem] leading-relaxed text-ink-2">
            We are open for joint ventures, government tenders, and private partnerships.
            Join us in powering progress across the nation.
          </p>

          <ul className="mt-9 flex flex-col gap-6">
            {items.map((item) => (
              <li key={item.label} className="flex items-start gap-4">
                <span className="glass-neo flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg" aria-hidden="true">
                  {item.icon}
                </span>
                <div className="text-[0.925rem] leading-relaxed text-ink-2">
                  <strong className="mono block text-[0.75rem] uppercase tracking-wide text-ink-0">
                    {item.label}
                  </strong>
                  <div className="mt-1">{item.content}</div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="glass-neo p-8">
          <form
            className="contact-form"
            action={`mailto:${contact.emails[0]}`}
            method="post"
            encType="text/plain"
          >
            <div className="field">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>

            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="you@company.com" />
            </div>

            <div className="field">
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject" defaultValue="General Inquiry">
                <option>General Inquiry</option>
                <option>Joint Venture / Partnership</option>
                <option>Government Tender</option>
                <option>Procurement</option>
                <option>Careers</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us about your project..."
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Send Message
            </button>
            <p className="mt-3 text-center text-xs text-ink-3">
              Opens your email client addressed to {contact.emails[0]}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
