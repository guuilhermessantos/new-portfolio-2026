/**
 * Design System - Spacing Constants
 * 
 * Valores padronizados de espaçamento para manter consistência visual
 */

export const SPACING = {
  // Espaçamento entre cards e elementos em marquees
  MARQUEE_GAP: 'mr-12', // 48px - Cards de Projeto (Compacto: 340x240px)
  MARQUEE_GAP_SMALL: 'mr-6', // 24px - Badges de Tecnologia
  
  // Espaçamento entre seções
  SECTION_GAP: 'space-y-32', // 128px entre seções principais
  SECTION_PADDING_TOP: 'pt-20', // 80px padding top das seções
  
  // Espaçamento interno de containers
  CONTAINER_PADDING_X: 'px-8', // 32px horizontal
  CONTAINER_PADDING_Y: 'py-12', // 48px vertical
  
  // Espaçamento entre grupos de conteúdo
  CONTENT_GAP: 'space-y-24', // 96px entre grupos
  CONTENT_GAP_SMALL: 'space-y-16', // 64px entre grupos menores
  
  // Margem de elementos
  ELEMENT_MARGIN: 'mb-12', // 48px margin bottom padrão
  ELEMENT_MARGIN_SMALL: 'mb-8', // 32px margin bottom pequeno
} as const;

/**
 * Design System - Animations
 */
export const ANIMATIONS = {
  // Duração de animações de marquee
  MARQUEE_DURATION_SLOW: '[--duration:40s]',
  MARQUEE_DURATION_MEDIUM: '[--duration:30s]',
  MARQUEE_DURATION_FAST: '[--duration:20s]',
  
  // Gap customizado para marquees
  MARQUEE_GAP_CUSTOM: '[--gap:3rem]',
} as const;

/**
 * Design System - Breakpoints
 */
export const BREAKPOINTS = {
  MOBILE: 'max-w-screen-sm', // < 640px
  TABLET: 'max-w-screen-md', // < 768px
  DESKTOP: 'max-w-screen-lg', // < 1024px
  DESKTOP_WIDE: 'max-w-screen-xl', // < 1280px
} as const;

