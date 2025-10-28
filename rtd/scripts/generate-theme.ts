#!/usr/bin/env ts-node

/**
 * Generate CSS theme variables from design tokens
 * Reads /data/design-tokens.json and writes /styles/themes.css
 */

import * as fs from 'fs';
import * as path from 'path';
import { normalizeColor, buildShadow } from '../lib/tokens';

interface GeneratedTheme {
  colors: Record<string, string>;
  fonts: Record<string, string>;
  shadows: Record<string, string>;
  warnings: string[];
}

function generateTheme(): GeneratedTheme {
  const theme: GeneratedTheme = {
    colors: {},
    fonts: {},
    shadows: {},
    warnings: [],
  };

  const tokensPath = path.join(__dirname, '..', 'data', 'design-tokens.json');
  
  // Check if tokens file exists
  if (!fs.existsSync(tokensPath)) {
    theme.warnings.push('design-tokens.json not found - using fallback values');
    return applyFallbacks(theme);
  }

  try {
    const tokensRaw = fs.readFileSync(tokensPath, 'utf-8');
    const tokens = JSON.parse(tokensRaw);
    
    // Navigate to global tokens (Token Studio format)
    const global = tokens.global || tokens;

    // Extract colors
    extractColors(global, theme);
    
    // Extract fonts
    extractFonts(global, theme);
    
    // Extract shadows/effects
    extractShadows(global, theme);
    
    // Apply fallbacks for missing values
    return applyFallbacks(theme);
  } catch (error) {
    theme.warnings.push(`Error parsing tokens: ${error}`);
    return applyFallbacks(theme);
  }
}

function extractColors(global: any, theme: GeneratedTheme): void {
  const colorPrimary = global?.color?.primary;
  
  if (colorPrimary) {
    // Map c.r.e.a.m. to fg (foreground/text)
    if (colorPrimary['c.r.e.a.m.']?.value) {
      theme.colors.fg = normalizeColor(colorPrimary['c.r.e.a.m.'].value);
    }
    
    // Map black to bg
    if (colorPrimary.black?.value) {
      theme.colors.bg = normalizeColor(colorPrimary.black.value);
    }
    
    // Map red tower to accent
    if (colorPrimary['red tower']?.value) {
      theme.colors.accent = normalizeColor(colorPrimary['red tower'].value);
    }
  }
}

function extractFonts(global: any, theme: GeneratedTheme): void {
  // Try both "typography" and "font" top-level keys
  const typography = global?.typography || global?.font;
  
  if (typography?.header) {
    const headerFont = findFontFamily(typography.header);
    if (headerFont) theme.fonts.header = headerFont;
  }
  
  if (typography?.subhead) {
    const subheadFont = findFontFamily(typography.subhead);
    if (subheadFont) theme.fonts.subhead = subheadFont;
  }
  
  if (typography?.body) {
    const bodyFont = findFontFamily(typography.body);
    if (bodyFont) theme.fonts.body = bodyFont;
  }
}

function findFontFamily(node: any): string | null {
  // Handle direct value.fontFamily (Token Studio format)
  if (node?.value?.fontFamily) {
    return node.value.fontFamily;
  }
  
  // Handle nested object with fontFamily.value (alternative format)
  if (node?.fontFamily?.value) {
    return node.fontFamily.value;
  }
  
  // Recursively search children for font family
  for (const key in node) {
    if (typeof node[key] === 'object') {
      // Check for value.fontFamily in child
      if (node[key]?.value?.fontFamily) {
        return node[key].value.fontFamily;
      }
      // Check for fontFamily.value in child
      if (node[key]?.fontFamily?.value) {
        return node[key].fontFamily.value;
      }
    }
  }
  
  return null;
}

function extractShadows(global: any, theme: GeneratedTheme): void {
  const effects = global?.effect;
  
  if (!effects) return;
  
  // Extract photo shadow
  if (effects['photo shadow']) {
    const layers = extractShadowLayers(effects['photo shadow']);
    if (layers.length > 0) {
      theme.shadows.photo = buildShadow(layers);
    }
  }
  
  // Extract clock-shadow
  if (effects['clock-shadow']) {
    const layers = extractShadowLayers(effects['clock-shadow']);
    if (layers.length > 0) {
      theme.shadows.clock = buildShadow(layers);
    }
  }
  
  // Extract clock hands
  if (effects['clock hands']) {
    const layers = extractShadowLayers(effects['clock hands']);
    if (layers.length > 0) {
      theme.shadows.hands = buildShadow(layers);
    }
  }
}

function extractShadowLayers(effectNode: any): any[] {
  const layers: any[] = [];
  
  // Look for numbered keys: "0", "1", "2", etc.
  let i = 0;
  while (effectNode[i.toString()]) {
    const layer = effectNode[i.toString()].value;
    if (layer) {
      layers.push(layer);
    }
    i++;
  }
  
  return layers;
}

function applyFallbacks(theme: GeneratedTheme): GeneratedTheme {
  // Color fallbacks
  if (!theme.colors.bg) {
    theme.colors.bg = '#000000';
    theme.warnings.push('bg color missing - using fallback');
  }
  if (!theme.colors.fg) {
    theme.colors.fg = '#fffef0';
    theme.warnings.push('fg color missing - using fallback');
  }
  if (!theme.colors.accent) {
    theme.colors.accent = '#ff2b39';
    theme.warnings.push('accent color missing - using fallback');
  }
  
  // Derived semantic colors
  theme.colors.muted = theme.colors.muted || 'rgba(255, 254, 240, 0.6)';
  theme.colors.surface = theme.colors.surface || 'rgba(255, 254, 240, 0.05)';
  theme.colors.surface2 = theme.colors.surface2 || 'rgba(255, 254, 240, 0.1)';
  theme.colors.success = theme.colors.success || '#22c55e';
  theme.colors.warning = theme.colors.warning || '#f59e0b';
  theme.colors.danger = theme.colors.danger || '#ef4444';
  
  // Font fallbacks
  if (!theme.fonts.header) {
    theme.fonts.header = '"Anton", sans-serif';
    theme.warnings.push('header font missing - using fallback');
  } else {
    theme.fonts.header = `"${theme.fonts.header}", sans-serif`;
  }
  
  if (!theme.fonts.subhead) {
    theme.fonts.subhead = '"Allison", cursive';
    theme.warnings.push('subhead font missing - using fallback');
  } else {
    theme.fonts.subhead = `"${theme.fonts.subhead}", cursive`;
  }
  
  if (!theme.fonts.body) {
    theme.fonts.body = '"Montserrat", sans-serif';
    theme.warnings.push('body font missing - using fallback');
  } else {
    theme.fonts.body = `"${theme.fonts.body}", sans-serif`;
  }
  
  // Shadow fallbacks
  theme.shadows.photo = theme.shadows.photo || '0px 4px 8px 0px rgba(0, 0, 0, 0.25)';
  theme.shadows.clock = theme.shadows.clock || '0px 2px 4px 0px rgba(0, 0, 0, 0.2), 0px 8px 16px 0px rgba(0, 0, 0, 0.13)';
  theme.shadows.hands = theme.shadows.hands || '0px 1px 2px 0px rgba(0, 0, 0, 0.31)';
  
  return theme;
}

function writeCSSFile(theme: GeneratedTheme): void {
  const outputPath = path.join(__dirname, '..', 'styles', 'themes.css');
  
  let css = '/**\n';
  css += ' * Red Tower Digital - Design System Tokens\n';
  css += ' * Generated from /data/design-tokens.json\n';
  css += ' * Do not edit this file directly - run `npm run generate:theme` to regenerate\n';
  
  if (theme.warnings.length > 0) {
    css += ' *\n * WARNINGS:\n';
    theme.warnings.forEach(warning => {
      css += ` * - ${warning}\n`;
    });
  }
  
  css += ' */\n\n';
  css += ':root {\n';
  
  // Colors
  css += '  /* Colors */\n';
  Object.keys(theme.colors).sort().forEach(key => {
    css += `  --rtd-color-${key}: ${theme.colors[key]};\n`;
  });
  
  css += '\n  /* Typography */\n';
  Object.keys(theme.fonts).sort().forEach(key => {
    css += `  --rtd-font-${key}: ${theme.fonts[key]};\n`;
  });
  
  css += '\n  /* Effects */\n';
  Object.keys(theme.shadows).sort().forEach(key => {
    css += `  --rtd-shadow-${key}: ${theme.shadows[key]};\n`;
  });
  
  css += '}\n';
  
  fs.writeFileSync(outputPath, css, 'utf-8');
  
  console.log('✓ Generated themes.css');
  if (theme.warnings.length > 0) {
    console.log('\nWarnings:');
    theme.warnings.forEach(w => console.log(`  ⚠ ${w}`));
  }
  console.log(`\nVariables created:`);
  console.log(`  - ${Object.keys(theme.colors).length} colors`);
  console.log(`  - ${Object.keys(theme.fonts).length} fonts`);
  console.log(`  - ${Object.keys(theme.shadows).length} shadows`);
}

// Run
const theme = generateTheme();
writeCSSFile(theme);

