import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      email: 'luna@icloud.com',
      prioridade: enums.Prioridade.FAMILIA,
      telefone: '(01) 92345-6789',
      nome: 'Luna'
    },
    {
      id: 2,
      email: 'brayan@outlook.com',
      prioridade: enums.Prioridade.TRABALHO,
      telefone: '(01) 92345-6789',
      nome: 'Brayan'
    },
    {
      id: 3,
      email: 'lokie@gmail.com',
      prioridade: enums.Prioridade.AMIGOS,
      telefone: '(01) 92345-6789',
      nome: 'Lokie'
    },
    {
      id: 4,
      email: 'zazel@hotmail.com',
      prioridade: enums.Prioridade.AMIGOS,
      telefone: '(01) 92345-6789',
      nome: 'Zazel'
    },
    {
      id: 5,
      email: 'Andy@icloud.com',
      prioridade: enums.Prioridade.AMIGOS,
      telefone: '(01) 92345-6789',
      nome: 'Andy'
    },
    {
      id: 6,
      email: 'canela@gmail.com',
      prioridade: enums.Prioridade.AMIGOS,
      telefone: '(01) 92345-6789',
      nome: 'Canela'
    }
  ]
}

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Esta terefa ja existe!')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }

        state.itens.push(tarefaNova)
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefaSlice.actions

export default tarefaSlice.reducer
