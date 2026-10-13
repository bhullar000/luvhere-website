// Fades `.reveal` elements in as they scroll into view.
export function useReveal() {
  onMounted(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
    if (!('IntersectionObserver' in window)) return els.forEach((el) => el.classList.add('is-visible'))
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target) }
    }, { rootMargin: '0px 0px -10% 0px' })
    els.forEach((el) => io.observe(el))
    onBeforeUnmount(() => io.disconnect())
  })
}
