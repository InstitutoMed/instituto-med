import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

export function useScrollSpy(sectionIds = []) {
  const activeSection = ref(sectionIds[0] || '')
  const scrolled = ref(false)
  const route = useRoute()
  let observer

  function handleScroll() {
    scrolled.value = window.scrollY > 40
  }

  function setupObserver() {
    if (observer) observer.disconnect()

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) activeSection.value = entry.target.id
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    setupObserver()
  })

  watch(
    () => route.path,
    async () => {
      await nextTick()
      setupObserver()
    }
  )

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    if (observer) observer.disconnect()
  })

  return { activeSection, scrolled }
}
