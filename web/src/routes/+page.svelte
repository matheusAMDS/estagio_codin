<script lang="ts">
  import type { PageData, ActionData } from "./$types";

  import { browser } from "$app/environment";
  import * as navigation from "$app/navigation";

  import * as authStore from "$lib/auth";

  export let data: PageData;

  export let form: ActionData;

  if (form) {
    if (form.success && browser) {
      authStore.saveSession(form.res.accessToken);

      navigation.goto("/home").catch((err) => {
        console.log("Eita", err);
      });
    } else {
      console.log(form.message);
    }
  }
</script>

<div
  class="flex justify-between flex-wrap lg:items-center lg:flex-nowrap lg:space-x-20"
>
  <section class="w-full">
    <h1 class="text-5xl font-semibold mb-4">Bem-vindo ao SGPj</h1>
    <p class="mb-3 text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisi sem,
      bibendum ac libero eu, tincidunt mollis mi. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </p>
    <p class="mb-3 text-gray-700">
      Proin ac convallis risus, nec feugiat turpis. Sed ac diam lorem.
      Pellentesque eu mi nec urna scelerisque congue. Sed sed fringilla ante.
      Donec rutrum nunc nec pharetra congue. Donec consequat, felis bibendum
      lacinia condimentum, turpis mi luctus nibh, in finibus velit massa
      ullamcorper elit.
    </p>
  </section>

  <section class="w-full max-w-md">
    <form class="flex flex-col" method="POST" action="/">
      <li class="list-none w-full my-2">
        <label for="login-name" class="text-gray-600"> Digite seu nome: </label>
        <input
          name="name"
          type="text"
          id="login-name"
          class="w-full border rounded p-2 block mt-2"
        />
      </li>
      <button type="submit" class="bg-green-600 text-white rounded p-2 mt-6">
        Entrar
      </button>

      <a href="/cadastro" class="mx-auto my-2 text-blue-700 hover:underline">
        Ainda não possui uma conta? Cadastre-se!
      </a>
    </form>
  </section>
</div>
