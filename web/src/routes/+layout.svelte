<script>
  import "../app.css";
</script>

<header class="flex flex-center justify-between p-4">
  <span class="text-xl font-semibold">SGPj</span>

  <nav class="text-gray-500 font-medium text-md">
    <a href="/sobre">Sobre</a>
  </nav>
</header>

<main
  class="container mx-auto min-h-[86vh] flex flex-col justify-center items-center"
>
  <slot />
</main>

<footer class="border-t-2 border-gray-300 py-4 flex justify-center">
  <p>
    <strong>CODIN</strong> | Coordenadoria de Informática da Procuradoria Geral de
    Sergipe
  </p>
</footer>
