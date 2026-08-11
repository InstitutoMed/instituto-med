<template>
  <Transition name="fade">
    <div v-if="visible" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <button class="modal-close" aria-label="Fechar" @click="closeModal">✕</button>

        <template v-if="step === 'form'">
          <h3>{{ title }}</h3>
          <p class="sub">Preencha seus dados para continuar.</p>
          <form @submit.prevent="submitModal">
            <div class="field">
              <label for="nome">Nome completo</label>
              <input id="nome" v-model="form.nome" type="text" placeholder="Seu nome">
              <p v-if="errors.nome" class="err">{{ errors.nome }}</p>
            </div>
            <div class="field">
              <label for="email">E-mail</label>
              <input id="email" v-model="form.email" type="email" placeholder="seu@email.com">
              <p v-if="errors.email" class="err">{{ errors.email }}</p>
            </div>
            <div class="field">
              <label for="telefone">Telefone</label>
              <input id="telefone" v-model="form.telefone" type="tel" placeholder="(47) 99999-9999">
              <p v-if="errors.telefone" class="err">{{ errors.telefone }}</p>
            </div>
            <BaseButton variant="solid" type="submit" style="width:100%;margin-top:20px;text-transform:none;">
              Confirmar
            </BaseButton>
          </form>
        </template>

        <template v-else>
          <div class="success-box">
            <div class="icon">✓</div>
            <h3>Tudo certo!</h3>
            <p class="sub">Enviamos a confirmação para {{ form.email }}. Em breve você recebe um retorno da nossa equipe.</p>
            <BaseButton variant="solid" style="width:100%;" @click="closeModal">Fechar</BaseButton>
          </div>
        </template>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useBookingModal } from '../../composables/useBookingModal'
import BaseButton from './BaseButton.vue'

const { visible, step, title, form, errors, closeModal, submitModal } = useBookingModal()
</script>

<style scoped>
.modal-overlay{
  position:fixed;inset:0;
  background:rgba(8,36,60,.6);
  display:flex;align-items:center;justify-content:center;
  z-index:1000;padding:20px;
}
.modal{
  background:#fff;border-radius:24px;
  max-width:420px;width:100%;padding:32px;
  position:relative;
}
.modal-close{
  position:absolute;top:18px;right:18px;
  width:32px;height:32px;border-radius:50%;
  background:var(--blue-50);color:var(--blue-800);
  display:flex;align-items:center;justify-content:center;
}
.modal h3{font-size:19px;color:var(--ink);}
.modal p.sub{color:var(--muted);font-size:13.5px;margin-top:6px;}
.field{margin-top:15px;}
.field label{
  font-size:12.5px;font-weight:600;color:var(--blue-800);
  display:block;margin-bottom:6px;
}
.field input{
  width:100%;padding:12px 14px;border-radius:12px;
  border:1.5px solid var(--blue-100);font-size:13.5px;
  font-family:inherit;background:var(--blue-50);
}
.field input:focus{outline:2px solid var(--blue-500);outline-offset:1px;}
.success-box{text-align:center;padding:10px 0;}
.success-box .icon{
  width:54px;height:54px;border-radius:50%;
  background:var(--blue-50);color:var(--blue-500);
  display:flex;align-items:center;justify-content:center;
  margin:0 auto 14px;font-size:24px;
}
.err{color:#e0483d;font-size:11.5px;margin-top:6px;}

.fade-enter-active,.fade-leave-active{transition:opacity .2s ease;}
.fade-enter-from,.fade-leave-to{opacity:0;}
</style>
