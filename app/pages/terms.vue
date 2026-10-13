<script setup lang="ts">
usePageMeta('Terms of Service', 'The terms that apply when you use Luvhere.')
const { supportEmail } = useSite()
</script>

<template>
  <div>
    <PageHero eyebrow="Legal" title="Terms of Service" lead="The rules for using Luvhere. Please read them — by using the app you agree to them." updated="13 October 2026" />
    <section class="py-16 pb-24">
      <div class="container-site">
        <div class="prose-legal">
          <h2>1. Eligibility</h2>
          <p>You must be at least 18, legally able to enter a contract, and not barred from using Luvhere. You need a valid Indian mobile number to sign up. One account per person.</p>

          <h2>2. Your account</h2>
          <p>Keep your account secure and your details accurate. You must pass our verification checks. You’re responsible for activity on your account.</p>

          <h2>3. How you use Luvhere</h2>
          <p>Follow our <NuxtLink to="/safety#guidelines">Community Guidelines</NuxtLink>. You must not harass, threaten, defraud or impersonate anyone; post sexual, violent or illegal content; ask for money; spam or advertise; or try to access, copy or disrupt the service or other members’ data.</p>

          <h2>4. Your content</h2>
          <p>You own the photos, text and messages you share. You give us a licence to host, display and process them only to run and improve Luvhere. We may remove content that breaks these terms.</p>

          <h2>5. Safety</h2>
          <p>We verify members and moderate content, but we can’t run criminal background checks or guarantee anyone’s behaviour. Take care when meeting people — see our <NuxtLink to="/safety">safety tips</NuxtLink>. You are responsible for your interactions with other members.</p>

          <h2>6. Premium and payments</h2>
          <p>Some features are paid. Prices are shown in the app before you buy. Purchases through the App Store or Google Play follow their billing and refund rules. Unless the law requires otherwise, purchases are non-refundable, and unused messages or features have no cash value.</p>

          <h2>7. Ending your account</h2>
          <p>You can deactivate or delete your account at any time. We may suspend or remove accounts that break these terms or put others at risk.</p>

          <h2>8. Disclaimers and liability</h2>
          <p>Luvhere is provided “as is”. To the extent the law allows, we are not liable for indirect or consequential losses, or for the conduct of any member on or off the app.</p>

          <h2>9. Governing law</h2>
          <p>These terms are governed by the laws of India, and disputes are subject to the courts of India.</p>

          <h2>10. Changes and contact</h2>
          <p>We may update these terms and will tell you about significant changes. Questions? Email <a :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>.</p>
        </div>
      </div>
    </section>
  </div>
</template>
