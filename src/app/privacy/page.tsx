import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | Onyx Automation Agency",
  description:
    "How Onyx Automation Agency collects, uses, and protects your personal information.",
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
    {children}
  </h2>
);

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-bold text-zinc-900 tracking-tight mt-8 mb-3">
    {children}
  </h3>
);

const Para = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm md:text-base text-zinc-600 leading-relaxed mb-4">
    {children}
  </p>
);

const BulletList = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="list-disc list-inside space-y-2 mb-4 pl-2">
    {items.map((item, i) => (
      <li key={i} className="text-sm md:text-base text-zinc-600 leading-relaxed">
        {item}
      </li>
    ))}
  </ul>
);

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-[#00BF63] selection:text-white">
      <Navbar />

      <div className="flex-grow">
        {/* Header */}
        <section className="pt-32 md:pt-44 pb-16 md:pb-24 bg-[#050a07] text-white">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              Last updated: May 4, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 flex gap-12">
            {/* Policy text */}
            <div className="flex-1 max-w-3xl">

            <SectionTitle>1. Introduction</SectionTitle>
            <Para>
              Onyx Automation Agency (&quot;Onyx&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </Para>
            <Para>
              By accessing or using our website, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not access the site.
            </Para>

            <SectionTitle>2. Information We Collect</SectionTitle>

            <SubTitle>Personal Information</SubTitle>
            <Para>We may collect personal information that you voluntarily provide to us when you:</Para>
            <BulletList items={[
              "Fill out a contact or consultation form",
              "Subscribe to our newsletter or updates",
              "Communicate with us via email, phone, or WhatsApp",
              "Engage with our AI automation services",
            ]} />
            <Para>
              This information may include your name, email address, phone number, business name, and any other details you choose to provide.
            </Para>

            <SubTitle>Automatically Collected Information</SubTitle>
            <Para>When you visit our website, we may automatically collect certain information, including:</Para>
            <BulletList items={[
              "Browser type and version",
              "Operating system",
              "Referring URLs and pages visited",
              "Time and date of your visit",
              "IP address (anonymized where possible)",
              "Device identifiers",
            ]} />

            <SectionTitle>3. How We Use Your Information</SectionTitle>
            <Para>We use the information we collect to:</Para>
            <BulletList items={[
              "Respond to your inquiries and provide customer support",
              "Deliver and manage our AI automation services",
              "Send you relevant updates, marketing, or promotional materials (with your consent)",
              "Analyze website usage to improve our services and user experience",
              "Comply with legal obligations",
            ]} />

            <SectionTitle>4. Cookies & Tracking Technologies</SectionTitle>
            <Para>
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us understand how you use our site.
            </Para>
            <Para>We use the following types of cookies:</Para>
            <BulletList items={[
              <><strong className="text-zinc-900">Essential cookies</strong> — required for the website to function properly</>,
              <><strong className="text-zinc-900">Analytics cookies</strong> — help us understand site traffic and usage patterns</>,
              <><strong className="text-zinc-900">Preference cookies</strong> — remember your settings and choices</>,
            ]} />
            <Para>
              You can manage your cookie preferences through your browser settings or by using the cookie consent banner on our website.
            </Para>

            <SectionTitle>5. Third-Party Services</SectionTitle>
            <Para>
              We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services. These include:
            </Para>
            <BulletList items={[
              "Website hosting providers",
              "Analytics platforms (e.g., Google Analytics)",
              "Email marketing services",
              "CRM and automation tools",
            ]} />
            <Para>
              These third parties are contractually obligated to protect your information and use it only for the purposes we specify.
            </Para>

            <SectionTitle>6. Data Security</SectionTitle>
            <Para>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </Para>

            <SectionTitle>7. Data Retention</SectionTitle>
            <Para>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </Para>

            <SectionTitle>8. Your Rights</SectionTitle>
            <Para>Depending on your location, you may have the right to:</Para>
            <BulletList items={[
              "Access the personal data we hold about you",
              "Request correction of inaccurate data",
              "Request deletion of your personal data",
              "Object to or restrict processing of your data",
              "Withdraw consent at any time",
              "Lodge a complaint with a supervisory authority",
            ]} />
            <Para>
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:hello@onyxautomation.co" className="text-[#00BF63] hover:underline">hello@onyxautomation.co</a>.
            </Para>

            <SectionTitle>9. Children&apos;s Privacy</SectionTitle>
            <Para>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </Para>

            <SectionTitle>10. Changes to This Policy</SectionTitle>
            <Para>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a revised &quot;Last updated&quot; date. We encourage you to review this page periodically.
            </Para>

            <SectionTitle>11. Contact Us</SectionTitle>
            <Para>
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </Para>
            <BulletList items={[
              <><strong className="text-zinc-900">Email:</strong>{" "}<a href="mailto:hello@onyxautomation.co" className="text-[#00BF63] hover:underline">hello@onyxautomation.co</a></>,
              <><strong className="text-zinc-900">Website:</strong>{" "}<a href="https://onyxautomationhub.com" className="text-[#00BF63] hover:underline">onyxautomationhub.com</a></>,
            ]} />

            </div>

            {/* Illustration - sticky on the right */}
            <div className="hidden lg:block w-[280px] flex-shrink-0">
              <div className="sticky top-32">
                <Image
                  src="/privacy-illustration.png"
                  alt="Person working at a desk illustration"
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
