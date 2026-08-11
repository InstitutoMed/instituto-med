import { ref, onMounted, onUnmounted } from 'vue'



export function useScrollSpy(sectionIds = []) {
  const activeSection = ref(sectionIds[0] || '')
  const scrolled = ref(false)
  let observer

  function handleScroll() {
    scrolled.value = window.scrollY > 40
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) activeSection.value = entry.target.id
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    if (observer) observer.disconnect()
  })

  return { activeSection, scrolled }
}
