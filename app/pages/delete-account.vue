<script setup lang="ts">
usePageMeta('Delete your account', 'How to delete your Luvhere account and what happens to your data.')
const { supportEmail } = useSite()
</script>

<template>
  <div>
    <PageHero eyebrow="Account" title="Delete your Luvhere account" lead="You can delete your account and data at any time, from the app or by asking us." />
    <section class="py-16 pb-24">
      <div class="container-site">
        <div class="prose-legal">
          <h2>Delete from the app</h2>
          <ul>
            <li>Open Luvhere and go to <strong>Profile</strong>.</li>
            <li>Tap <strong>Account</strong>, then <strong>Delete account</strong>.</li>
            <li>Choose a reason (optional) and confirm with <strong>Delete my account</strong>.</li>
          </ul>
          <p>Just need a break? Choose <strong>Deactivate account</strong> instead. Your profile is hidden until you sign in again.</p>

          <h2>Can’t access the app?</h2>
          <p>Email <a :href="`mailto:${supportEmail}?subject=Delete%20my%20account`">{{ supportEmail }}</a> from any address with the subject “Delete my account” and the mobile number you signed up with. We’ll confirm the request with a one-time code sent to that number, then delete the account.</p>

          <h2>What gets deleted</h2>
          <ul>
            <li>Your profile, photos, preferences and verification selfie.</li>
            <li>Your likes, matches and chat messages.</li>
            <li>Your device and notification tokens.</li>
          </ul>

          <h2>What we keep, and for how long</h2>
          <p>Some records are kept for a limited time where the law requires it or to keep the community safe — for example payment and invoice records for tax purposes, and records of reports or bans to stop banned users from rejoining. These are kept only as long as needed and are then deleted.</p>
          <p>Purchases made through the App Store or Google Play are managed by them; deleting your account does not cancel a store subscription, so cancel it in your store settings too.</p>
        </div>
      </div>
    </section>
  </div>
</template>
