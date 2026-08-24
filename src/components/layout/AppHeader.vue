<template>
  <header :class="{ scrolled }">
    <nav class="nav container">
      <router-link to="/" class="logo" @click="closeMobile">
        <img :src="logo" alt="Instituto Med" class="logo-img">
      </router-link>

      <ul class="nav-links">
        <li v-for="item in navItems" :key="item.id">
          <router-link
            v-if="item.to"
            :to="item.to"
            :class="{ active: $route.path === item.to }"
          >{{ item.label }}</router-link>
          <router-link
            v-else
            :to="{ path: '/', hash: item.hash }"
            :class="{ active: $route.path === '/' && activeSection === item.id }"
          >{{ item.label }}</router-link>
        </li>
      </ul>

      <div class="nav-actions">
        <router-link to="/conta" class="profile-btn" aria-label="Minha conta">
          <img :src="iconUser" alt="">
        </router-link>
        <button
          class="burger"
          :aria-expanded="mobileOpen"
          aria-label="Abrir menu"
          @click="mobileOpen = !mobileOpen"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <div class="mobile-menu" :class="{ open: mobileOpen }">
      <template v-for="item in navItems" :key="item.id">
        <router-link v-if="item.to" :to="item.to" @click="closeMobile">
          {{ item.label }}
        </router-link>
        <router-link v-else :to="{ path: '/', hash: item.hash }" @click="closeMobile">
          {{ item.label }}
        </router-link>
      </template>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { NAV_ITEMS } from '../../constants/nav'
import { useScrollSpy } from '../../composables/useScrollSpy'
import logo from '../../assets/img/logo.png'
import iconUser from '../../assets/img/icon-user.png'

const navItems = NAV_ITEMS
const mobileOpen = ref(false)
const { activeSection, scrolled } = useScrollSpy(
  navItems.filter((i) => i.hash).map((i) => i.id)
)

function closeMobile() {
  mobileOpen.value = false
}
</script>

<style scoped>
header{
  position:sticky;top:0;z-index:50;
  background:linear-gradient(120deg,var(--blue-600),var(--blue-500));
  transition:background .25s ease, box-shadow .25s ease;
}
header.scrolled{
  background:rgba(13,76,120,.94);
  backdrop-filter:blur(10px);
  box-shadow:0 8px 24px -12px rgba(0,0,0,.3);
}
.nav{display:flex;align-items:center;justify-content:space-between;padding:22px 32px;}
.logo{display:flex;align-items:center;}
.logo-img{height:38px;width:auto;display:block;}

.nav-links{
  display:flex;gap:36px;list-style:none;margin:0;padding:0;
  font-weight:700;font-size:13px;letter-spacing:.03em;
  text-transform:uppercase;color:rgba(255,255,255,.9);
}
.nav-links a{position:relative;padding:6px 0;}
.nav-links a:hover, .nav-links a.active{color:#fff;}
.nav-links a.active::after{
  content:"";position:absolute;left:0;right:0;bottom:-2px;
  height:2px;background:#fff;border-radius:2px;
}

.nav-actions{display:flex;align-items:center;gap:16px;}
.profile-btn{
  width:40px;height:40px;border-radius:50%;
  background:rgba(255,255,255,.18);
  border:1.5px solid rgba(255,255,255,.4);
  display:flex;align-items:center;justify-content:center;
}
.profile-btn img{width:20px;height:20px;object-fit:contain;filter:brightness(0) invert(1);opacity:.95;}

.burger{
  display:none;width:40px;height:40px;border-radius:10px;
  background:rgba(255,255,255,.16);
  align-items:center;justify-content:center;flex-direction:column;gap:5px;
}
.burger span{width:17px;height:2px;background:#fff;border-radius:2px;}

.mobile-menu{
  display:none;flex-direction:column;gap:2px;
  padding:6px 32px 20px;position:relative;z-index:10;
}
.mobile-menu a{
  padding:12px 4px;font-weight:700;color:#fff;
  border-bottom:1px solid rgba(255,255,255,.14);
  text-transform:uppercase;font-size:13px;
}
.mobile-menu.open{display:flex;}

@media (max-width:720px){
  .nav-links{display:none;}
  .burger{display:flex;}
}
</style>
