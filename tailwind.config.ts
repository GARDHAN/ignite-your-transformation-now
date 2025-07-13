
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom palette colors
				'cream': {
					DEFAULT: 'hsl(46, 30%, 95%)',
					50: 'hsl(46, 30%, 98%)',
					100: 'hsl(46, 30%, 95%)',
					200: 'hsl(46, 30%, 90%)',
				},
				'beige': {
					DEFAULT: 'hsl(45, 25%, 85%)',
					50: 'hsl(45, 25%, 95%)',
					100: 'hsl(45, 25%, 90%)',
					200: 'hsl(45, 25%, 85%)',
					300: 'hsl(45, 25%, 80%)',
				},
				'sage': {
					DEFAULT: 'hsl(95, 35%, 65%)',
					50: 'hsl(95, 35%, 95%)',
					100: 'hsl(95, 35%, 90%)',
					200: 'hsl(95, 35%, 80%)',
					300: 'hsl(95, 35%, 70%)',
					400: 'hsl(95, 35%, 65%)',
					500: 'hsl(95, 35%, 55%)',
					600: 'hsl(95, 35%, 45%)',
					700: 'hsl(95, 35%, 35%)',
				},
				'forest': {
					DEFAULT: 'hsl(95, 35%, 45%)',
					50: 'hsl(95, 35%, 90%)',
					100: 'hsl(95, 35%, 80%)',
					200: 'hsl(95, 35%, 70%)',
					300: 'hsl(95, 35%, 60%)',
					400: 'hsl(95, 35%, 50%)',
					500: 'hsl(95, 35%, 45%)',
					600: 'hsl(95, 35%, 40%)',
					700: 'hsl(95, 35%, 35%)',
					800: 'hsl(95, 35%, 25%)',
					900: 'hsl(95, 35%, 15%)',
				}
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						'background-position': '0% 50%'
					},
					'50%': {
						'background-position': '100% 50%'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
