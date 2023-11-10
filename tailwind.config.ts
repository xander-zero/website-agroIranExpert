import { colord ,extend} from 'colord'
import mixPlugin from 'colord/plugins/mix'
import type { Config } from 'tailwindcss'

extend([mixPlugin])

const generateDarkenColorFrom = (input:string, percentage= 0.07 ):string=>colord(input).darken(percentage).toHex();

export function generateForegroundColorFrom(
  input: string,
  percentage = 0.8
): string {
  return colord(input)
      .mix(colord(input).isDark() ? "white" : "black", percentage)
      .toHex();
}

export const tailwindColors :Record<string,string> = {
  current: "currentColor",
  transparent: "transparent",
  white: "#F9F9F9",
  primary: "#0354B7",
  "primary-content": "#FFFFFF",
  "primary-focus": generateDarkenColorFrom("#0354B7"),
  secondary: "#008F47",
  "secondary-content": "#FFFFFF",
  "secondary-focus": generateDarkenColorFrom("#6c5ce7"),
  accent: "#1FB2A5",
  "accent-content": "#FFFFFF",
  "accent-focus": generateDarkenColorFrom("#1FB2A5"),
  neutral: "#2a323c",
  "neutral-content": generateForegroundColorFrom("#FFFFFF"),
  "neutral-focus": generateDarkenColorFrom("#2a323c", 0.03),
  "base-25": "#353d47",
  "base-50": "#2a323c",
  "base-75": "#20272e",
  "base-100": "#1d232a",
  "base-200": "#191e24",
  "base-300": "#15191e",
  "base-content": "#E7EDF3",
  info: "#3abff8",
  "info-content": generateForegroundColorFrom("#3abff8"),
  success: "#36d399",
  "success-content": generateForegroundColorFrom("#36d399"),
  warning: "#fbbd23",
  "warning-content": generateForegroundColorFrom("#fbbd23"),
  error: "#f87272",
  "error-content": generateForegroundColorFrom("#f87272"),
  "gradient-first": "#34eaa0",
  "gradient-second": "#0fa2e9",
  'gray':'#54595F'
}

const config: Config = {
  content: [
    './src/app/**/*.{tsx,jsx}',
  ],
  theme: {
    colors:tailwindColors,
    container:{
      center:true
    },
    extend:{
      backdropBrightness: {
        25: '.25',
        175: '1.75',
      },
      backgroundImage:{
        'hero-pattern':"url('/images/iran.svg')"
      }
    }
  },
  darkMode:'class',
  plugins: [],
}
export default config
