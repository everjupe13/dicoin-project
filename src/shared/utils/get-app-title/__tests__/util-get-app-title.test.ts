import { describe, expect, it, vi } from 'vitest'

import { utilGetAppTitle } from '../lib/util-get-app-title'

vi.mock('@/shared/const', () => ({
  getConfig: vi.fn(() => ({ appName: 'DicoinApp' }))
}))

describe('utilGetAppTitle', () => {
  it('добавляет appName к заголовку через разделитель', () => {
    expect(utilGetAppTitle('Главная')).toBe('Главная | DicoinApp')
  })

  it('возвращает только appName, если title не передан', () => {
    expect(utilGetAppTitle()).toBe('DicoinApp')
  })

  it('корректно работает с пустой строкой', () => {
    expect(utilGetAppTitle('')).toBe('DicoinApp')
  })
})
