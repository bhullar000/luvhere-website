export function useSite() {
  const c = useRuntimeConfig().public
  return {
    siteUrl: c.siteUrl as string,
    appStoreUrl: c.appStoreUrl as string,
    playStoreUrl: c.playStoreUrl as string,
    supportEmail: c.supportEmail as string,
  }
}
