import type { Config } from 'tailwindcss'

// Mirrors the app's design tokens (kive/src/theme): one pink, one violet, a near-black ground.
export default <Config>{
  content: ['./app/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        pink: '#FF3F8E',
        violet: '#8747FF',
        ground: '#0B070D',
        surface: '#151019',
        elevated: '#1D1621',
        ink: '#F7F4F8',
        value: '#CFC8D6',
        soft: '#AAA3B0',
        quiet: '#8E879A',
        success: '#32D89B',
        line: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mark: ['Poppins', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        chip: '16px',
        card: '20px',
        hero: '32px',
        button: '26px',
      },
      maxWidth: { site: '1160px' },
    },
  },
}
