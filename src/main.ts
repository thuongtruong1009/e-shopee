// register vue composition api globally
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './styles/main.css'
import './styles/variables.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'
// sentry testing
import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'
import App from './App.vue'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)

Sentry.init({
  createApp,
  dsn: 'https://a0a547331e2f429caf923895765c1e9b@o1129418.ingest.sentry.io/6406141',
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(routes),
      tracingOrigins: ['localhost', 'e-shopee.vercel.app', /^\//],
    }),
  ],
  tracesSampleRate: 1.0,
})
