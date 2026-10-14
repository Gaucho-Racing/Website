import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/legal-page";
import { LEGAL_CONTACT_EMAIL, SMS_BRAND_OWNER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service | Gaucho Racing",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <section>
        <p>
          These Terms of Service apply to Gaucho Racing&apos;s website, our
          internal team portal at sso.gauchoracing.com and the team tools it
          signs you in to, and our team notification text messages. Gaucho
          Racing is UC Santa Barbara&apos;s Formula SAE team. By using them, you
          agree to these terms.
        </p>
      </section>

      <section>
        <h2>Team accounts and tools</h2>
        <p>
          Team accounts are for Gaucho Racing members only. Keep your account
          secure, provide accurate information, and use team tools only for team
          work. We may suspend accounts that are misused or that belong to
          people who are no longer members.
        </p>
      </section>

      <section>
        <h2>SMS Terms</h2>
        <ul>
          <li>
            <strong>Program:</strong> Gaucho Racing Team Notifications, operated
            by {SMS_BRAND_OWNER} on behalf of Gaucho Racing.
          </li>
          <li>
            <strong>What you&apos;ll receive:</strong> recurring internal team
            notifications, such as meeting and schedule changes, event
            logistics, deadline reminders, and account alerts. We do not send
            marketing messages.
          </li>
          <li>
            <strong>Opting in:</strong> you receive texts only if you check the
            optional text notification box when setting up your team account.
            Consent is not required to join the team or create an account.
          </li>
          <li>
            <strong>Frequency:</strong> message frequency varies.
          </li>
          <li>
            <strong>Cost:</strong> message and data rates may apply.
          </li>
          <li>
            <strong>Opting out:</strong> reply STOP to any message to stop
            receiving texts. You&apos;ll get one confirmation text and no
            further messages unless you opt in again by replying START.
          </li>
          <li>
            <strong>Help:</strong> reply HELP to any message, or email{" "}
            <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>.
          </li>
          <li>Carriers are not liable for delayed or undelivered messages.</li>
          <li>
            See our <Link href="/privacy">Privacy Policy</Link> for how we
            handle your information, including your phone number.
          </li>
        </ul>
      </section>

      <section>
        <h2>Changes and contact</h2>
        <p>
          We may update these terms and will change the date above when we do.
          Questions? Contact Gaucho Racing at{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
