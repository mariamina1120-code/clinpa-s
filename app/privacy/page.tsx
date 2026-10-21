import { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "Privacy Policy" };

const CONTACT = "mariamina1120@gmail.com";

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 21, 2026">
      <section>
        <p>
          ClinPA-S (&ldquo;we,&rdquo; &ldquo;us&rdquo;) is a study and reference app for physician assistant students
          on clinical rotations. This policy explains what we collect, why, and who helps us run the service.
        </p>
      </section>

      <section>
        <h2>Never enter patient identifiers</h2>
        <p>
          ClinPA-S is built for de-identified information only. Do not enter protected health information (PHI) —
          no patient names, dates of birth, medical record numbers, addresses, phone numbers, photos, or other
          identifiers — in charts, case logs, or AI Scribe. ClinPA-S is not designed to store PHI.
        </p>
      </section>

      <section>
        <h2>What we collect</h2>
        <ul>
          <li><strong>Account details:</strong> your name, email, PA program, and expected graduation year.</li>
          <li>
            <strong>What you create:</strong> SOAP charts, case log entries, quiz attempts, and procedure checklist
            progress.
          </li>
          <li>
            <strong>Purchases:</strong> which rotations or bundles you bought and the payment reference from Stripe.
            Card details go directly to Stripe; we never see or store them.
          </li>
          <li>
            <strong>Technical data:</strong> sign-in cookies that keep you logged in, and an activity log of account
            actions (such as creating or editing a chart) that can include your IP address.
          </li>
        </ul>
        <p>We do not run advertising, sell your data, or use third-party analytics trackers.</p>
      </section>

      <section>
        <h2>AI Scribe</h2>
        <p>
          If you use AI Scribe, your speech is converted to text by your web browser&rsquo;s built-in speech
          recognition, which may be processed by your browser&rsquo;s provider (for example, Google in Chrome or Apple
          in Safari). The resulting text is sent to Anthropic&rsquo;s API to draft an HPI. We do not store your audio.
        </p>
      </section>

      <section>
        <h2>Who helps us run ClinPA-S</h2>
        <ul>
          <li><strong>Supabase</strong> — database and sign-in.</li>
          <li><strong>Vercel</strong> — website hosting.</li>
          <li><strong>Stripe</strong> — payment processing.</li>
          <li><strong>Anthropic</strong> — drafting HPIs for AI Scribe.</li>
        </ul>
        <p>Each receives only what it needs to provide its part of the service.</p>
      </section>

      <section>
        <h2>How your data is protected</h2>
        <p>
          Data is sent over encrypted connections (HTTPS), and database access rules limit your charts, case logs,
          and progress to your own account. No system is perfectly secure, which is one more reason never to enter
          patient identifiers.
        </p>
      </section>

      <section>
        <h2>Keeping and deleting your data</h2>
        <p>
          We keep your data while your account is open. To export or delete your account and everything in it,
          email <a href={`mailto:${CONTACT}`}>{CONTACT}</a>. Deleting your account permanently removes your charts,
          case logs, and progress.
        </p>
      </section>

      <section>
        <h2>Who ClinPA-S is for</h2>
        <p>ClinPA-S is intended for adult PA students and is not directed to anyone under 18.</p>
      </section>

      <section>
        <h2>Changes and contact</h2>
        <p>
          If we change this policy, we&rsquo;ll update the date above, and we&rsquo;ll email you about significant
          changes. Questions: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
