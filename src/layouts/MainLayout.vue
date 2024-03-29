<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-primary-50" style="height: 110px">
      <q-toolbar
        v-if="!$q.screen.xs && !$q.screen.sm"
        class="overflow-hidden full-height"
      >
        <div class="container">
          <div class="full-width full-height flex justify-between items-center">
            <router-link class="logo-container q-pa-sm" :to="{ name: 'home' }">
              <img
                src="/img/logo/logo_wbg.png"
                class="logo"
                alt="logomarca"
                loading="lazy"
              />
            </router-link>

            <div class="full-height flex flex-center" style="height: 110px">
              <q-list
                class="text-white flex full-height text-no-wrap"
                style="font-size: 1rem"
              >
                <q-item
                  clickable
                  v-ripple
                  :active="$route.name === 'home'"
                  :to="{ name: 'home' }"
                  active-class="text-accent text-weight-bold"
                  class="menu-item q-pa-none"
                >
                  <q-item-section class="flex flex-center"
                    >Início</q-item-section
                  >
                </q-item>
                <q-item
                  clickable
                  v-ripple
                  :active="$route.name === 'about'"
                  :to="{ name: 'about' }"
                  active-class="text-accent text-weight-bold"
                  class="menu-item"
                >
                  <q-item-section class="flex flex-center"
                    >Sobre nós</q-item-section
                  >
                </q-item>
                <q-item
                  clickable
                  v-ripple
                  :active="$route.name === 'produtos'"
                  :to="{ name: 'produtos' }"
                  active-class="text-accent text-weight-bold"
                  class="menu-item"
                >
                  <q-item-section class="flex flex-center"
                    >Produtos</q-item-section
                  >
                </q-item>
                <q-item
                  clickable
                  v-ripple
                  :active="$route.name === 'sinistro'"
                  :to="{ name: 'sinistro' }"
                  active-class="text-accent text-weight-bold"
                  class="menu-item"
                >
                  <q-item-section class="flex flex-center"
                    >Sinistro</q-item-section
                  >
                </q-item>
              </q-list>
              <div class="flex flex-center" style="height: 110px">
                <q-btn
                  class="q-ml-md"
                  rounded
                  no-wrap
                  color="positive"
                  label="Faça uma cotação"
                  style="height: 51px"
                />
              </div>
            </div>
          </div>
        </div>
      </q-toolbar>
      <q-toolbar v-else class="overflow-hidden full-height">
        <div class="full-width full-height flex justify-between items-center">
          <router-link class="logo-container q-pa-sm" :to="{ name: 'home' }">
            <img
              src="/img/logo/logo_wbg.png"
              class="logo"
              alt="logomarca"
              loading="lazy"
            />
          </router-link>
          <q-btn flat color="white" icon="menu">
            <q-menu class="bg-primary">
              <q-list
                class="text-white text-no-wrap"
                style="font-size: 1rem; min-width: 200px"
              >
                <q-item
                  clickable
                  v-ripple
                  :active="$route.name === 'home'"
                  :to="{ name: 'home' }"
                  active-class="text-accent text-weight-bold"
                >
                  <q-item-section>Início</q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-ripple
                  :active="$route.name === 'about'"
                  :to="{ name: 'about' }"
                  active-class="text-accent text-weight-bold"
                >
                  <q-item-section>Sobre nós</q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-ripple
                  :active="$route.name === 'produtos'"
                  :to="{ name: 'produtos' }"
                  active-class="text-accent text-weight-bold"
                >
                  <q-item-section>Produtos</q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-ripple
                  :active="$route.name === 'sinistro'"
                  :to="{ name: 'sinistro' }"
                  active-class="text-accent text-weight-bold"
                >
                  <q-item-section>Sinistro</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-page-sticky
      v-if="$q.screen.xs || $q.screen.sm"
      position="bottom-left"
      class="full-width bg-positive cursor-pointer relative-position"
      v-ripple
    >
      <div
        class="text-white flex flex-center text-no-wrap text-uppercase"
        style="height: 51px; font-size: 1rem"
      >
        Faça uma cotação
      </div>
    </q-page-sticky>
    <q-page-sticky position="bottom-right" :offset="[18, 70]">
      <q-btn round color="positive" icon="bi-whatsapp" size="16px" />
    </q-page-sticky>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>

<style scoped>
.logo-container {
  height: 110px;
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  max-width: 100%;
  max-height: 100%;
}

.menu-item {
  width: 110px;
  height: 110px;
}
</style>
