import simple from './handlers/simple.js'
import configured from './handlers/configured.js'

export default function routes (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', simple)
  app.get('/configured', configured(opts))
}
