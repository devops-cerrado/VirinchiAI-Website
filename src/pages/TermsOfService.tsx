const lastUpdated = "July 1, 2026";

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "These Terms of Service (\"Terms\") govern your access to and use of the website and platform operated by virinchiAI, Inc. (\"Virinchi AI\", \"we\", \"us\", or \"our\"), including Virinchi Bolt, Agent Studio, App Builder, and Control Tower (collectively, the \"Service\").",
      "By accessing or using the Service, you agree to be bound by these Terms. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization to these Terms.",
    ],
  },
  {
    heading: "2. Description of Service",
    body: [
      "Virinchi AI provides an enterprise AI agent operating system that enables organizations to build, orchestrate, and govern AI agents across departments and domains, along with related solutions such as Virinchi PA, HR, OCR, CSM, and Finance.",
    ],
  },
  {
    heading: "3. Accounts & Eligibility",
    body: [
      "You must provide accurate and complete information when creating an account or requesting access to the Service, and are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.",
      "The Service is intended for business use and is not directed to individuals under the age of 18.",
    ],
  },
  {
    heading: "4. Acceptable Use",
    body: [
      "You agree not to: (a) use the Service for any unlawful purpose; (b) reverse engineer, decompile, or attempt to extract the source code of the Service, except as permitted by law; (c) interfere with or disrupt the integrity or performance of the Service; (d) attempt to gain unauthorized access to the Service or related systems; or (e) use the Service to build a competing product.",
    ],
  },
  {
    heading: "5. Customer Data & Content",
    body: [
      "You retain all rights to data and content you submit to the Service (\"Customer Data\"). You grant us a limited license to host, process, and transmit Customer Data solely for the purpose of providing and improving the Service.",
      "You are responsible for ensuring you have all necessary rights and consents to submit Customer Data to the Service, including any personal data processed by your AI agents.",
    ],
  },
  {
    heading: "6. Intellectual Property",
    body: [
      "The Service, including all software, designs, trademarks, and content (excluding Customer Data), is owned by Virinchi AI or its licensors and is protected by intellectual property laws. Nothing in these Terms grants you any right, title, or interest in the Service other than the limited right to use it as permitted herein.",
    ],
  },
  {
    heading: "7. Fees & Payment",
    body: [
      "Where the Service is provided on a paid basis, fees, billing cycles, and payment terms will be set out in an order form or separate agreement between you and Virinchi AI. Fees are non-refundable except as expressly stated otherwise.",
    ],
  },
  {
    heading: "8. Confidentiality",
    body: [
      "Each party agrees to protect the other party's confidential information with the same degree of care it uses for its own confidential information of similar nature, and not to disclose such information to third parties except as permitted under these Terms or a separate written agreement.",
    ],
  },
  {
    heading: "9. Disclaimers",
    body: [
      "The Service is provided \"as is\" and \"as available\" without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or fully secure.",
    ],
  },
  {
    heading: "10. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Virinchi AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of or in connection with your use of the Service, even if advised of the possibility of such damages.",
    ],
  },
  {
    heading: "11. Termination",
    body: [
      "We may suspend or terminate your access to the Service if you breach these Terms or if required by law. You may stop using the Service at any time. Provisions that by their nature should survive termination will survive, including intellectual property, confidentiality, disclaimers, and limitation of liability.",
    ],
  },
  {
    heading: "12. Governing Law",
    body: [
      "These Terms are governed by the laws of the State of Delaware, USA, without regard to its conflict of laws principles, unless otherwise agreed in a separate written agreement between you and Virinchi AI.",
    ],
  },
  {
    heading: "13. Changes to These Terms",
    body: [
      "We may update these Terms from time to time. Material changes will be reflected by updating the \"last updated\" date at the top of this page. Continued use of the Service after changes take effect constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "14. Contact Us",
    body: [
      "If you have questions about these Terms, contact us at support@virinchi.ai.",
      "virinchiAI, Inc. — 1111B S Governors Ave # 90813, Dover, DE 19904, USA.",
    ],
  },
];

const TermsOfService = () => (
  <div className="min-h-screen bg-background pt-16 md:pt-20">
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
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

export default TermsOfService;
