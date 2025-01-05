<script setup>
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
</script>

<template>
  <div class="bg-secondary text-white min-h-screen flex flex-col">
    <Navbar />
    <div class="content px-10 py-16 flex-grow">
      <p class="breadcrumb text-center italic uppercase text-white">
        Início / Reservar
      </p>

      <div class="text-center mb-16">
        <h1 class="text-5xl font-baskervville uppercase">
          <span class="text-primary">Reservar</span>
        </h1>
        <div class="w-16 h-px bg-primary mx-auto mt-4"></div>
      </div>

      <div class="flex flex-col md:flex-row gap-10 items-start">
        <div class="md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Restaurante Forchetta"
            class="rounded-lg shadow-lg max-w-full"
          />
        </div>
        <div class="md:w-1/2">
          <h2 class="text-3xl font-baskervville uppercase mb-6">
            Reservas
          </h2>
          <form class="space-y-6">
            <div>
              <label
                for="people"
                class="block text-sm font-bold uppercase text-gray-400"
              >
                Número de Pessoas
              </label>
              <select
                id="people"
                class="w-full bg-transparent border-b border-primary text-white p-2 mt-1 outline-none focus:border-white"
              >
                <option value="1">1 pessoa</option>
                <option value="2">2 pessoas</option>
                <option value="3">3 pessoas</option>
                <option value="4">4 pessoas</option>
                <option value="5">5 pessoas</option>
              </select>
            </div>
            <div>
              <label
                for="time"
                class="block text-sm font-bold uppercase text-gray-400"
              >
                Horário
              </label>
              <select
                id="time"
                class="w-full bg-transparent border-b border-primary text-white p-2 mt-1 outline-none focus:border-white"
              >
                <option value="12:00">12:00h</option>
                <option value="13:00">13:00h</option>
                <option value="19:00">19:00h</option>
                <option value="20:00">20:00h</option>
              </select>
            </div>
            <div>
              <label
                for="date"
                class="block text-sm font-bold uppercase text-gray-400"
              >
                Data
              </label>
              <input
                type="date"
                id="date"
                class="w-full bg-transparent border-b border-primary text-white p-2 mt-1 outline-none focus:border-white"
              />
            </div>
            <button
              type="submit"
              class="w-full bg-primary text-secondary text-sm font-bold uppercase p-4 rounded hover:bg-white hover:text-primary transition"
            >
              Reservar
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.bg-secondary {
  background-color: #051114;
}

.text-primary {
  color: #ff9900;
}

.breadcrumb {
  font-family: "Baskervville";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 30px;
}

form select,
form input {
  color: #ffffff;
  border: none;
  border-bottom: 2px solid #ff9900;
}

form select:focus,
form input:focus {
  outline: none;
  border-bottom: 2px solid #ffffff;
}

button {
  background-color: #ff9900;
  color: #051114;
}

button:hover {
  background-color: #ffffff;
  color: #ff9900;
}
</style>
