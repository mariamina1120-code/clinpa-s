import { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "Terms of Service" };

const CONTACT = "mariamina1120@gmail.com";

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="October 21, 2026">
      <section>
        <p>
          These terms govern your use of ClinPA-S. By creating an account or making a purchase, you agree to them.
        </p>
      </section>

      <section>
        <h2>Study aid, not medical advice</h2>
        <p>
          ClinPA-S is an educational study and reference tool for PA students. It is not clinical decision support
          and is not a substitute for your preceptor, your clinical site&rsquo;s protocols, or primary sources.
          Clinical guidance changes; verify anything you rely on against the current guideline cited.
        </p>
      </section>

      <section>
        <h2>De-identified data only</h2>
        <p>
          You agree not to enter protected health information or any patient identifiers. You are responsible for
          following your PA program&rsquo;s and clinical site&rsquo;s patient-privacy policies.
        </p>
      </section>

      <section>
        <h2>Your account</h2>
        <ul>
          <li>You must be at least 18 to create an account.</li>
          <li>Accounts are for one person. Don&rsquo;t share your login or purchased content.</li>
          <li>We may suspend accounts used to scrape, redistribute, or misuse the service.</li>
        </ul>
      </section>

      <section>
        <h2>Purchases</h2>
        <ul>
          <li>Prices are in U.S. dollars and are one-time payments — there are no subscriptions or renewals.</li>
          <li>Your purchase gives you access to the content you bought for as long as ClinPA-S offers it.</li>
          <li>
            Because digital content is available immediately, sales are final. If something isn&rsquo;t working as
            described, email us within 14 days of purchase and we&rsquo;ll fix it or refund you.
          </li>
        </ul>
      </section>

      <section>
        <h2>Content ownership</h2>
        <p>
          ClinPA-S content (condition cards, drug cards, quizzes, templates, and design) belongs to ClinPA-S and is
          licensed to you for personal study. You own what you create — your charts and case logs — and you let us
          store and process it only to provide the service to you.
        </p>
      </section>

      <section>
        <h2>Trademarks</h2>
        <p>
          ClinPA-S is not sponsored by, endorsed by, or affiliated with PAEA, NCCPA, ARC-PA, or AAPA. Their names are
          used only to describe what our content is aligned with.
        </p>
      </section>

      <section>
        <h2>Disclaimers and limits</h2>
        <p>
          ClinPA-S is provided &ldquo;as is.&rdquo; We work to keep content accurate and current but don&rsquo;t
          guarantee it is error-free or that the service will always be available. To the extent the law allows, our
          total liability for any claim is limited to the amount you paid us in the 12 months before the claim.
        </p>
      </section>

      <section>
        <h2>Changes, law, and contact</h2>
        <p>
          We may update these terms; we&rsquo;ll change the date above and email you about significant changes. These
          terms are governed by the laws of the State of Indiana. Questions:{" "}
          <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
