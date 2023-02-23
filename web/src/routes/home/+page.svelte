<script lang="ts">
  import * as authStore from "$lib/auth";
  import { onMount } from "svelte";

  interface Process {
    id: number;
    number: string;
    archived: boolean;
    startDate: Date;
    endDate: Date;
    type: string;
    theme: {
      id: number;
      name: string;
    };
    status: string;
    owner: {
      id: number;
      name: string;
    };
  }

  let inbox = [] as Process[];
  let outbox = [] as Process[];
  let archived = [] as Process[];

  let selectedBox = 1;

  const selectBox = (boxId: number) => {
    selectedBox = boxId;
  };

  let accessToken = "";

  authStore.store.subscribe((st) => {
    if (st.isAuthenticated) {
      accessToken = st.accessToken;
    }
  });

  const fetchInbox = () => {
    return fetch("http://localhost:3000/process/inbox", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  onMount(async () => {
    let token = "";

    authStore.store.subscribe((st) => {
      if (st.isAuthenticated) {
        token = st.accessToken;
      }
    });

    const result = await fetch("http://localhost:3000/process/inbox", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!result.ok) {
      console.log("EITAAAJk");
    }

    const data = (await result.json()) as Process[];

    inbox = data.map((process) => ({
      id: process.id,
      archived: process.archived,
      number: process.number,
      startDate: new Date(process.startDate),
      endDate: new Date(process.endDate),
      type: process.type,
      status: process.status,
      theme: process.theme,
      owner: {
        id: process.owner.id,
        name: process.owner.name,
      },
    }));
  });
</script>

<div class="flex border border-red-600 w-full h-screen">
  <aside class="border border-blue-400 w-56">
    <nav class="w-full">
      <button
        on:click={() => {
          selectBox(1);
        }}
        class="p-2 block rounded cursor-pointer hover:bg-gray-200 hover:text-green-600"
      >
        Caixa de Entrada
      </button>
      <button
        on:click={() => {
          selectBox(2);
        }}
        class="p-2 block rounded cursor-pointer hover:bg-gray-200 hover:text-green-600"
      >
        Caixa de Saída
      </button>
      <button
        on:click={() => {
          selectBox(3);
        }}
        class="p-2 block rounded cursor-pointer hover:bg-gray-200 hover:text-green-600"
      >
        Arquivados
      </button>
    </nav>
  </aside>

  <section class="w-full">
    <table>
      <tr>
        <th>Número</th>
        <th>Inicio</th>
        <th>Fim</th>
        <th>Situação</th>
        <th>Tema</th>
        <th>Tipo</th>
      </tr>
      {#if selectedBox == 1}
        {#each inbox as process}
          <tr>
            <td>{process.number}</td>
            <td>{process.startDate.toLocaleDateString()}</td>
            <td>{process.endDate.toLocaleDateString()}</td>
            <td>{process.status}</td>
            <td>{process.theme.name}</td>
            <td>{process.type}</td>
          </tr>
        {/each}
      {/if}
    </table>
  </section>
</div>
