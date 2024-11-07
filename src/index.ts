function formatToBRL(value: string | number) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  export {
    formatToBRL
  }