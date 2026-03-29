import { cn } from '@/lib/utils'

describe('cn utility', () => {
  it('should merge tailwind classes', () => {
    expect(cn('px-2', 'py-2')).toBe('px-2 py-2')
  })

  it('should handle conditional classes', () => {
    expect(cn('px-2', true && 'py-2', false && 'm-2')).toBe('px-2 py-2')
  })

  it('should handle arrays of classes', () => {
    expect(cn(['px-2', 'py-2'])).toBe('px-2 py-2')
  })

  it('should handle objects of classes', () => {
    expect(cn({ 'px-2': true, 'py-2': false })).toBe('px-2')
  })

  it('should merge conflicting tailwind classes correctly', () => {
    // tailwind-merge should pick the last one
    expect(cn('p-4', 'p-2')).toBe('p-2')
  })
})
