import { renderHook, act } from '@testing-library/react'
import { useIsMobile } from '@/hooks/use-mobile'

describe('useIsMobile', () => {
  const resizeWindow = (width: number) => {
    window.innerWidth = width
    window.dispatchEvent(new Event('resize'))
  }

  beforeEach(() => {
    // Mock matchMedia to avoid errors in JSDOM
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  it('should return true if window width is less than 768px', () => {
    resizeWindow(500)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })

  it('should return false if window width is 768px or more', () => {
    resizeWindow(1024)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })
})
