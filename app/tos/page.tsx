import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://joinsteal.com
// - Name: Steal
// - Contact information: darrel@joinsteal.com
// - Description: A browser extension that enhances online shopping by notifying users when similar products are available from preferred small businesses.
// - Ownership: They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://joinsteal.com/privacy-policy
// - Governing Law: United State
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`ChatGPT
Terms of Service for Steal

Effective Date: May 3, 2024

1. Introduction

Welcome to Steal. These Terms of Service ("Terms") govern your use of our website located at https://joinsteal.com (the "Site") and our browser extension ("Service"), which enhances your online shopping experience by notifying you when similar products are available from preferred small businesses.

2. Agreement to Terms

By using our Site and Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.

3. Service Description

Steal provides a browser extension that notifies users of alternative products available from small businesses. Our goal is to support smaller vendors while offering you great alternatives to your shopping queries.

4. User Accounts

When creating your account, you agree to provide accurate and complete information, including your name, email address, and payment details. You are responsible for maintaining the confidentiality of your account and password.

5. Purchases and Refunds

If applicable, any purchases made through our Service are subject to our refund policy. You can request a full refund within seven days of purchase, provided that you have not violated any of our terms.

6. Collection of Information

We collect personal data such as your name, email address, and payment information. We also use cookies to enhance your experience. For more details, please refer to our Privacy Policy at https://joinsteal.com/privacy-policy.

7. Intellectual Property

The Service and its original content, features, and functionality are and will remain the exclusive property of Steal.

8. Changes to Terms

We reserve the right to modify or replace these Terms at any time. We will notify you of any changes by sending an email to the address you provided upon registration.

9. Governing Law

These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.

10. Contact Us

If you have any questions about these Terms, please contact us at darrel@joinsteal.com.

By using our Service, you acknowledge that you have read and understood these Terms and agree to be bound by them.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
