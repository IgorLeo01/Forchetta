<template>
  <footer class="relative bg-[#040d10] text-white py-8">
    <div class="container mx-auto max-w-3xl">
      <div class="flex justify-between items-center mb-4">
        <p class="font-prompt text-base">laforchetta@laforchetta.com.br</p>
        <div class="flex gap-6">
          <a
            href="#"
            class="font-prompt text-sm uppercase hover:text-[#FFA000]"
            @click.prevent="navigate('home')"
          >
            Início
          </a>
          <a
            href="#"
            class="font-prompt text-sm uppercase hover:text-[#FFA000]"
            @click.prevent="navigate('sobre')"
          >
            Sobre
          </a>
          <a
            href="#"
            class="font-prompt text-sm uppercase hover:text-[#FFA000]"
            @click.prevent="navigate('menu')"
          >
            Cardápio
          </a>
          <a
            href="#"
            class="font-prompt text-sm uppercase hover:text-[#FFA000]"
          >
            Contato
          </a>
        </div>
      </div>
      <div class="w-full h-px bg-[#FFA000] opacity-30"></div>
      <div class="flex flex-col md:flex-row justify-between items-center mt-4">
        <div
          class="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <p class="font-prompt text-sm text-primary">Telefone:</p>
          <p class="font-prompt text-base">(11) 3237-0717</p>
          <p class="font-prompt text-sm mt-2 text-primary">Endereço:</p>
          <p class="font-prompt text-base">
            Rua Santa Justina, 210 Vila Olimpia - São Paulo/SP
          </p>
        </div>
        <div class="flex flex-col items-center mt-4 md:mt-0">
          <p class="font-prompt text-base">Sábado - Domingo: 11:30h - 23:00h</p>
          <p class="font-prompt text-base">Terça - Sexta: 13:30h - 00:00h</p>
        </div>
        <div class="mt-4 md:mt-0">
          <button
            class="footer-button bg-white text-[#040d10] font-prompt text-sm px-6 py-2 rounded-full border-none"
            @click.prevent="navigate('reservar')"
          >
            Reservar
          </button>
        </div>
      </div>
      <div class="w-full h-px bg-[#FFA000] opacity-30 mt-6"></div>
    </div>
    <img
      :src="footerImg"
      alt="Footer Decoration"
      class="absolute right-1 bottom-1 w-40"
      style="opacity: 0.3"
    />
  </footer>
</template>

<script setup>
import footerImg from "../assets/FooterImg.png";

const emit = defineEmits();

function navigate(page) {
  emit("navigate", page);
}
</script>

<style scoped>
.footer {
  background-color: #040d10;
  color: #ffffff;
  padding: 40px 20px;
}

.footer h1 {
  font-family: "Baskervville", serif;
  font-style: italic;
  font-size: 24px;
  color: #ffffff;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-contact {
  font-size: 14px;
}

.footer-contact a.footer-link {
  color: #ffa000;
  text-decoration: none;
}

.footer-contact a.footer-link:hover {
  text-decoration: underline;
}

.footer-navigation a.footer-nav-link {
  display: block;
  margin-bottom: 8px;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-navigation a.footer-nav-link:hover {
  color: #ffa000;
}

footer .footer-button {
  background-color: #ffffff;
  color: #040d10;
  border: none;
  border-radius: 9999px;
  padding: 12px 24px;
  font-family: "Prompt", sans-serif;
  font-size: 1rem;
  transition: none;
}

footer .footer-button:hover {
  background-color: #ffffff;
  color: #040d10;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
}

.footer-bottom .footer-image {
  width: 100%;
  height: auto;
  opacity: 0.7;
}

.footer-bottom p {
  font-size: 12px;
  color: #ffffff;
  margin-top: 10px;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .footer .container {
    padding-left: 16px;
    padding-right: 16px;
  }

  .footer .flex {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer p {
    font-size: 0.875rem; 
  }

  .footer .font-prompt.text-base {
    font-size: 0.875rem; 
    margin-bottom: 12px; 
  }

  .footer .font-prompt.text-sm {
    font-size: 0.875rem; 
  }

  .footer .flex .gap-6 {
    gap: 12px;
  }
}
</style>
