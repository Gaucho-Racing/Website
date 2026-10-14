import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { LEGAL_CONTACT_EMAIL, SMS_BRAND_OWNER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Gaucho Racing",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <section>
        <p>
          This Privacy Policy explains how Gaucho Racing, UC Santa
          Barbara&apos;s Formula SAE team, collects and uses information from
          team members who use our website, our internal team portal at
          sso.gauchoracing.com, and our team notification text messages. Our
          text messaging program is registered under {SMS_BRAND_OWNER}, who
          operates it on behalf of Gaucho Racing.
        </p>
      </section>

      <section>
        <h2>Information we collect</h2>
        <ul>
          <li>
            Account details members provide when setting up a team account, such
            as name, email address, mobile phone number, school and academic
            information, and team role.
          </li>
          <li>
            Accounts members choose to link, such as Discord, GitHub, or Google,
            so we can give them access to team tools.
          </li>
          <li>
            Text messaging records: whether a member has opted in to team
            notification texts, when they opted in or out, and delivery status
            for the messages we send.
          </li>
          <li>
            Basic usage information our team tools log for security and
            troubleshooting, such as sign-in times.
          </li>
        </ul>
      </section>

      <section>
        <h2>How we use it</h2>
        <ul>
          <li>
            To run the team: rosters, Formula SAE registration, access to team
            tools, and emergency contact.
          </li>
          <li>
            To send team notifications, such as meeting and schedule changes,
            event logistics, deadline reminders, and account alerts, by email,
            Discord, and, for members who opt in, text message.
          </li>
          <li>To keep our systems secure and fix problems.</li>
        </ul>
        <p>We do not use member information for advertising or marketing.</p>
      </section>

      <section>
        <h2>Text messaging</h2>
        <p>
          We only text members who check the optional text notification box when
          setting up their account. Opting in is never required to join the team
          or create an account. Reply STOP to any message to opt out, or HELP
          for help.
        </p>
        <p>
          We do not sell or share your SMS opt-in data or personal information
          with third parties for marketing purposes. No mobile information will
          be shared with third parties or affiliates for marketing or
          promotional purposes. Text messaging originator opt-in data and
          consent are not shared with any third parties.
        </p>
      </section>

      <section>
        <h2>Who we share information with</h2>
        <p>
          We do not sell personal information. We share it only with service
          providers that deliver our services on our behalf, such as our
          messaging providers (for example, Twilio for text messages), email
          delivery, and hosting, and only as needed to provide those services.
          We may also disclose information if required by law.
        </p>
      </section>

      <section>
        <h2>Retention and your choices</h2>
        <p>
          We keep account information while you are a team member and for a
          reasonable period afterward for team records. You can update your
          profile in the team portal, opt out of texts at any time by replying
          STOP, and ask us to delete your account or data by emailing{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>.
        </p>
      </section>

      <section>
        <h2>Changes and contact</h2>
        <p>
          We may update this policy and will change the date above when we do.
          Questions? Contact Gaucho Racing at{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
