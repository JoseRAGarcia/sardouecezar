<template>
  <q-page class="column items-center justify-start q-gutter-y-lg bg-white">
    <div class="home-banner">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        autoplay
        class="full-height"
        transition-duration="1500"
      >
        <q-carousel-slide
          :name="1"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
      </q-carousel>
    </div>
    <div class="container q-px-lg q-gutter-y-lg">
      <div class="flex items-start relative-position">
        <div
          :style="
            !$q.screen.xs && !$q.screen.sm
              ? 'width: calc(100% - 400px); padding-right: 15px'
              : 'width: 100%'
          "
        >
          <h2 class="text-h4 text-weight-bold text-dark">Quem somos?</h2>
          <p class="text-body1">
            Somos uma empresa familiar e nossa sede fica em Duque de Caxias, Rio
            de Janeiro. Atuamos no mercado de seguros há quase duas décadas.
            Realizamos nossas cotações em mais de 15 seguradoras, sempre
            buscando o melhor custo-benefício para nossos segurados. Quer
            realizar um orçamento ou tem alguma dúvida sobre nossa empresa?
            Clique no link da bio, estamos à disposição! Será um prazer te
            atender!
          </p>
          <div
            v-if="$q.screen.xs || $q.screen.sm"
            class="absolute"
            style="bottom: 0; right: 0; opacity: 0.1"
          >
            <transition
              appear
              enter-active-class="animated slideInRight"
              leave-active-class="animated slideInLeft"
            >
              <q-img src="/img/home/quem-somos2.png" width="200px" />
            </transition>
          </div>
        </div>

        <div v-if="!$q.screen.xs && !$q.screen.sm">
          <transition
            appear
            enter-active-class="animated slideInRight"
            leave-active-class="animated slideInLeft"
          >
            <q-img
              src="/img/home/quem-somos2.png"
              width="400px"
              class="rounded-borders bg-light"
            />
          </transition>
        </div>
      </div>
      <!--  -->

      <div class="flex items-start relative-position">
        <div v-if="!$q.screen.xs && !$q.screen.sm">
          <transition
            appear
            enter-active-class="animated slideInLeft"
            leave-active-class="animated slideInRight"
          >
            <q-img
              src="/img/home/seguro-carro.png"
              width="400px"
              class="rounded-borders bg-light"
            />
          </transition>
        </div>

        <div
          :style="
            !$q.screen.xs && !$q.screen.sm
              ? 'width: calc(100% - 400px); text-align: right; padding-left: 15px'
              : 'width: 100%'
          "
        >
          <h2 class="text-h4 text-weight-bold text-dark">
            Proteja o seu carro
          </h2>
          <p class="text-body1">
            Proteja seu veículo com tranquilidade. Com nossos produtos de seguro
            para carros e motos, você pode dirigir com a certeza de estar
            protegido em caso de imprevistos. Oferecemos uma ampla gama de
            serviços e vantagens para garantir sua segurança e comodidade ao
            volante. Dos carros mais robustos às ágeis motocicletas, nossos
            seguros proporcionam benefícios exclusivos para todos os tipos de
            veículos. Não deixe a preocupação atrapalhar sua jornada. Proteja
            seu patrimônio com nossos produtos.
          </p>
          <div
            v-if="$q.screen.xs || $q.screen.sm"
            class="absolute"
            style="bottom: 0; left: 0; opacity: 0.1"
          >
            <transition
              appear
              enter-active-class="animated slideInLeft"
              leave-active-class="animated slideInRight"
            >
              <q-img src="/img/home/seguro-carro.png" width="200px" />
            </transition>
          </div>
        </div>
      </div>

      <!--  -->

      <div class="flex items-start relative-position">
        <div
          :style="
            !$q.screen.xs && !$q.screen.sm
              ? 'width: calc(100% - 400px); padding-right: 15px'
              : 'width: 100%'
          "
        >
          <h2 class="text-h4 text-weight-bold text-dark">Planos de saúde</h2>
          <p class="text-body1">
            Priorize sua saúde e bem-estar com nossos planos de saúde
            abrangentes. Sabemos que cuidar da sua saúde é essencial para uma
            vida plena. Com nossos planos, você e sua família têm acesso a uma
            rede ampla de profissionais e serviços médicos de qualidade. Desde
            consultas de rotina até procedimentos mais complexos, estamos aqui
            para garantir o melhor atendimento em todos os momentos. Conte
            conosco para cuidar da sua saúde e proporcionar tranquilidade para
            você e seus entes queridos.
          </p>
          <div
            v-if="$q.screen.xs || $q.screen.sm"
            class="absolute"
            style="bottom: 0; right: 0; opacity: 0.1"
          >
            <transition
              appear
              enter-active-class="animated slideInRight"
              leave-active-class="animated slideInLeft"
            >
              <q-img src="/img/home/plano-saude.png" width="200px" />
            </transition>
          </div>
        </div>

        <div v-if="!$q.screen.xs && !$q.screen.sm">
          <transition
            appear
            enter-active-class="animated slideInRight"
            leave-active-class="animated slideInLeft"
          >
            <q-img
              src="/img/home/plano-saude.png"
              width="400px"
              class="rounded-borders bg-light"
            />
          </transition>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomePage',

  setup() {
    const slide = ref(1);

    return {
      slide,
    };
  },
});
</script>

<style scoped>
.home-banner {
  width: 100%;
  height: 464px;
}
</style>
