import { useQuery } from '@tanstack/react-query'

import { HabitsService } from '@/api/modules/habits'
import { Habit, NewHabitData } from '@/api/modules/habits/types'

import {
  useCreateMutation,
  useDeleteMutation,
  useUpdateMutation
} from './hooks'

const HABITS_QUERY_KEY = 'habits'

const useHabitsQuery = () => {
  return useQuery({
    queryKey: [HABITS_QUERY_KEY],
    queryFn: () => HabitsService.getHabits()
  })
}

const useCreateHabitMutation = () => {
  return useCreateMutation({
    itemsQueryKey: [HABITS_QUERY_KEY],
    prepend: true,
    mutationFn: (newHabit: Habit) => HabitsService.createHabit(newHabit)
  })
}

const useUpdateHabitMutation = () => {
  return useUpdateMutation({
    itemsQueryKey: [HABITS_QUERY_KEY],
    equalsToTargetItemFn: (item: Habit, dto: NewHabitData) =>
      item.id === dto.id,
    mutationFn: (dto: NewHabitData) => HabitsService.updateHabit(dto)
  })
}

const useDeleteHabitMutation = () => {
  return useDeleteMutation({
    itemsQueryKey: [HABITS_QUERY_KEY],
    equalsToTargetItemFn: (item: Habit, id: string) => item.id === id,
    mutationFn: (id: string) => HabitsService.deleteHabit(id)
  })
}

export const useHabits = () => {
  const { data: habits } = useHabitsQuery()
  const { mutateAsync: createHabit } = useCreateHabitMutation()
  const { mutateAsync: updateHabit } = useUpdateHabitMutation()
  const { mutateAsync: deleteHabit } = useDeleteHabitMutation()

  return {
    habits,
    createHabit,
    updateHabit,
    deleteHabit
  }
}
