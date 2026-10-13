<script setup lang="ts">
usePageMeta('Privacy Policy', 'What personal data Luvhere collects, why, who we share it with, and the choices you have.')
const { supportEmail } = useSite()
</script>

<template>
  <div>
    <PageHero eyebrow="Legal" title="Privacy Policy" lead="Privacy is the whole point of Luvhere. This policy explains, in plain language, what we collect and why." updated="13 October 2026" />
    <section class="py-16 pb-24">
      <div class="container-site">
        <div class="prose-legal">
          <h2>1. Who we are</h2>
          <p>Luvhere (“we”, “us”) runs the Luvhere dating app and this website. For anything in this policy, contact us at <a :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>.</p>

          <h2>2. What we collect</h2>
          <h3>Information you give us</h3>
          <ul>
            <li><strong>Account:</strong> your mobile number, used to sign in with a one-time code.</li>
            <li><strong>Profile:</strong> name, date of birth, gender, who you’re interested in, bio, interests, lifestyle details and photos.</li>
            <li><strong>Verification:</strong> a live selfie video check, used to confirm you are a real person and match your photos.</li>
            <li><strong>Messages:</strong> chats, photos and voice notes you send to matches.</li>
            <li><strong>Reports and support:</strong> what you tell us when you report someone or contact support.</li>
          </ul>
          <h3>Information collected as you use Luvhere</h3>
          <ul>
            <li><strong>Location:</strong> your approximate location, with your permission, to suggest people nearby and show distance. Other members see a distance, never your exact location.</li>
            <li><strong>Activity:</strong> likes, matches, when you’re online and how you use the app.</li>
            <li><strong>Device:</strong> device type, operating system, app version and a push notification token.</li>
          </ul>
          <h3>Payments</h3>
          <p>If you buy Premium, payments are processed by the App Store, Google Play or our payment partner. We receive confirmation of the purchase, not your full card details.</p>

          <h2>3. Why we use it</h2>
          <ul>
            <li>To create your account and show your profile to compatible people.</li>
            <li>To verify members and keep fake accounts, scams and abuse off Luvhere.</li>
            <li>To deliver messages and notifications.</li>
            <li>To moderate photos and review reports.</li>
            <li>To process payments, provide support and improve the app.</li>
            <li>To meet our legal obligations.</li>
          </ul>
          <p>We do not sell your personal data, and we do not use your photos or messages for advertising.</p>

          <h2>4. Photos and privacy by design</h2>
          <p>Until you and another member match, they see only a veiled version of your photo, which is blurred on our servers. The original photo is not sent to their device. Messages you set to “seen once” are removed from the chat after they are read.</p>

          <h2>5. Who we share it with</h2>
          <ul>
            <li><strong>Other members:</strong> the profile details you choose to show, and your photos once you match.</li>
            <li><strong>Service providers</strong> who help us run Luvhere, under contract: cloud hosting and storage, identity and photo verification, SMS delivery of login codes, push notifications and payments.</li>
            <li><strong>Authorities,</strong> when required by law or to protect someone’s safety.</li>
          </ul>

          <h2>6. How long we keep it</h2>
          <p>We keep your data while your account is active. When you delete your account, we delete your profile, photos, matches and messages, except records we must keep for legal, tax or safety reasons, which we keep only as long as needed. See <NuxtLink to="/delete-account">Delete your account</NuxtLink>.</p>

          <h2>7. Your rights</h2>
          <p>Under India’s Digital Personal Data Protection Act, 2023 and other applicable laws, you can ask to access, correct or erase your personal data, withdraw consent, and nominate someone to act for you. You can edit most data in the app, and delete your account at any time. To make a request, email <a :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>.</p>

          <h2>8. Security</h2>
          <p>We use encryption in transit, access controls and regular reviews to protect your data. No system is perfectly secure, so please keep your phone and account safe too.</p>

          <h2>9. Age</h2>
          <p>Luvhere is only for people aged 18 and over. We delete accounts we find belong to anyone younger.</p>

          <h2>10. Grievance officer</h2>
          <p>If you have a complaint about how we handle your data, contact our Grievance Officer at <a :href="`mailto:${supportEmail}?subject=Grievance`">{{ supportEmail }}</a>. We will acknowledge your complaint within 24 hours and aim to resolve it within 15 days.</p>

          <h2>11. Changes</h2>
          <p>We’ll update this page when our practices change and let you know in the app about significant changes.</p>
        </div>
      </div>
    </section>
  </div>
</template>
