/**
 * Token utilities
 * Helpers for working with design tokens
 */

export interface TokenValue {
  value: any;
  type?: string;
}

export interface DesignTokens {
  $metadata?: {
    tokenSetOrder?: string[];
  };
  [key: string]: any;
}

/**
 * Navigate nested token structure
 */
export function getTokenValue(tokens: any, path: string[]): any {
  return path.reduce((acc, key) => acc?.[key], tokens);
}

/**
 * Convert hex color to rgba if it has alpha channel
 */
export function normalizeColor(hex: string): string {
  if (!hex || typeof hex !== 'string') return hex;
  
  // Remove # if present
  const clean = hex.replace(/^#/, '');
  
  // If 8 characters (with alpha), convert to rgba
  if (clean.length === 8) {
    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);
    const a = parseInt(clean.substring(6, 8), 16) / 255;
    
    // If fully opaque, return 6-digit hex
    if (a === 1) return `#${clean.substring(0, 6)}`;
    
    return `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`;
  }
  
  // Return as-is
  return `#${clean}`;
}

/**
 * Build a box-shadow string from multiple shadow layers
 */
export function buildShadow(layers: any[]): string {
  return layers
    .map(layer => {
      const { offsetX, offsetY, radius, spread, color } = layer;
      const normalizedColor = normalizeColor(color);
      return `${offsetX || '0px'} ${offsetY || '0px'} ${radius || '0px'} ${spread || '0px'} ${normalizedColor}`;
    })
    .join(', ');
}

