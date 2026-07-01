const lastUpdated = "July 1, 2026";

const sections = [
  {
    heading: "1. Introduction",
    body: [
      "This Privacy Policy explains how virinchiAI, Inc. and its affiliate virinchiAI Pvt Ltd (together, \"Virinchi AI\", \"we\", \"us\", or \"our\") collect, use, disclose, and safeguard information when you visit our website, use our platform (including Virinchi Bolt, Agent Studio, App Builder, and Control Tower), or otherwise interact with us.",
      "By using our website or platform, you agree to the collection and use of information in accordance with this policy.",
    ],
  },
  {
    heading: "2. Information We Collect",
    body: [
      "Account & Contact Information: name, work email, company name, job title, and phone number when you request a demo, sign up, or contact us.",
      "Usage Data: information about how you interact with our website and platform, including pages visited, features used, and log data such as IP address, browser type, and timestamps.",
      "Customer Content: data you or your organization submit to the platform in order to configure and run AI agents, which we process solely on your behalf and in accordance with your instructions.",
      "Cookies & Similar Technologies: we use cookies and similar tracking technologies to operate and improve our website, described further in Section 6 below.",
    ],
  },
  {
    heading: "3. How We Use Information",
    body: [
      "To provide, operate, and maintain our website and platform.",
      "To respond to inquiries, demo requests, and support requests.",
      "To improve our products, develop new features, and understand usage trends.",
      "To send administrative communications, such as updates to our terms or policies.",
      "To detect, prevent, and address fraud, abuse, security incidents, and technical issues.",
    ],
  },
  {
    heading: "4. How We Share Information",
    body: [
      "We do not sell your personal information. We may share information with:",
      "Service providers who perform services on our behalf (e.g., hosting, analytics, email delivery), under contractual confidentiality obligations.",
      "Affiliates, namely virinchiAI, Inc. and virinchiAI Pvt Ltd, for the purposes described in this policy.",
      "Legal authorities where required to comply with applicable law, regulation, legal process, or governmental request.",
      "Successors in the event of a merger, acquisition, or sale of assets, subject to equivalent privacy protections.",
    ],
  },
  {
    heading: "5. Data Security & Retention",
    body: [
      "We implement administrative, technical, and physical safeguards designed to protect information against unauthorized access, alteration, disclosure, or destruction.",
      "We retain personal information for as long as necessary to fulfil the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.",
    ],
  },
  {
    heading: "6. Cookies",
    body: [
      "We use cookies to keep you signed in, remember preferences, and understand how our website is used. You can control cookies through your browser settings; disabling cookies may affect certain features of our website.",
    ],
  },
  {
    heading: "7. International Data Transfers",
    body: [
      "Virinchi AI operates in the United States and India. Information we collect may be transferred to, stored, and processed in either country or other jurisdictions where our service providers operate, subject to appropriate safeguards.",
    ],
  },
  {
    heading: "8. Your Rights",
    body: [
      "Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the use of your personal information, or to object to certain processing. To exercise these rights, contact us using the details in Section 10.",
    ],
  },
  {
    heading: "9. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Material changes will be reflected by updating the \"last updated\" date at the top of this page. Continued use of our website or platform after changes take effect constitutes acceptance of the revised policy.",
    ],
  },
  {
    heading: "10. Contact Us",
    body: [
      "If you have questions about this Privacy Policy, contact us at support@virinchi.ai.",
      "virinchiAI, Inc. — 1111B S Governors Ave # 90813, Dover, DE 19904, USA.",
      "virinchiAI Pvt Ltd — WellWork, 5th Floor, MPM Corporate House, Plot No. 44, Jayabheri Pine Valley, Gachibowli, Hyderabad, Telangana 500032, India.",
    ],
  },
];

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background pt-16 md:pt-20">
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: {lastUpdated}</p>

      <div className="space-y-10">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">{section.heading}</h2>
            <div className="space-y-3">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-sm text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
