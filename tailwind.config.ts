import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Terminal Colors
        'terminal-bg': "hsl(var(--terminal-bg))",
        'terminal-border': "hsl(var(--terminal-border))",
        'terminal-text': "hsl(var(--terminal-text))",
        'terminal-accent': "hsl(var(--terminal-accent))",
        
        // Matrix Green Palette
        'matrix-primary': "hsl(var(--matrix-primary))",
        'matrix-secondary': "hsl(var(--matrix-secondary))",
        'matrix-tertiary': "hsl(var(--matrix-tertiary))",
        
        // Cyber Colors
        'cyber-cyan': "hsl(var(--cyber-cyan))",
        'cyber-cyan-dim': "hsl(var(--cyber-cyan-dim))",
        'cyber-purple': "hsl(var(--cyber-purple))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          border: "hsl(var(--card-border))",
        },
        warning: "hsl(var(--warning))",
        success: "hsl(var(--success))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-matrix': 'var(--gradient-matrix)',
        'gradient-cyber': 'var(--gradient-cyber)',
        'gradient-terminal': 'var(--gradient-terminal)',
      },
      boxShadow: {
        'terminal': 'var(--shadow-terminal)',
        'cyber': 'var(--shadow-cyber)',
        'purple': 'var(--shadow-purple)',
      },
      transitionProperty: {
        'cyber': 'var(--transition-cyber)',
        'glow': 'var(--transition-glow)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" }
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 5px hsl(var(--matrix-primary) / 0.5)",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 20px hsl(var(--matrix-primary) / 0.8)",
            transform: "scale(1.02)"
          }
        },
        "terminal-cursor": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" }
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" }
        },
        "cyber-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "matrix-rain": "matrix-rain 3s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "terminal-cursor": "terminal-cursor 1s step-end infinite",
        "scan-line": "scan-line 2s linear infinite",
        "cyber-flicker": "cyber-flicker 0.15s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
