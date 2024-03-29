<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-primary-50">
      <q-toolbar class="ovreflow-hidden" style="height: 110px">
        <div class="container">
          <div class="full-width full-height flex justify-between items-center">
            <router-link class="logo-container q-pa-sm" :to="{ name: 'home' }">
              <img
                src="/img/logo_wbg.png"
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
                  color="accent"
                  label="Faça uma cotação"
                  style="height: 51px"
                />
              </div>
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
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
  width: 200px;
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
