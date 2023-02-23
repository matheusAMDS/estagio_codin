import type { Actions } from './$types'

export const actions = {
  default: async ({ request }) => {
    const inputData = await request.formData()
    const name = inputData.get('name')

    if (!name) {
      return {
        success: false,
        message: "É necessário digitar o nome do usuário"
      }
    }

    const result = await fetch("http://localhost:3000/auth/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    })

    if (!result.ok) {
      return {
        success: false,
        message: "Credenciais inválidas"
      }
    }

    const data = await result.json()

    return {
      success: true,
      res: {
        ...data,
        name
      }
    }
  }
} as Actions
