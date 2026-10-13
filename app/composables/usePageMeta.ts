export function usePageMeta(title: string, description: string) {
  const { siteUrl } = useSite()
  const route = useRoute()
  useSeoMeta({ title: `${title} · Luvhere`, description, ogTitle: `${title} · Luvhere`, ogDescription: description })
  useHead({ link: [{ rel: 'canonical', href: `${siteUrl}${route.path}` }] })
}
