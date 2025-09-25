import type { CarroType } from "./CarroType"
import type { ClienteType } from "./ClienteType"

export type PropostaType = {
  id: number
  clienteId: string
  carroId: number
  carro: CarroType
  cliente: ClienteType
  descricao: string
  resposta: string | null
  createdAt: string
  updatedAt: string | null
}