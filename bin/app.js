#! /usr/bin/env node

// Pass configuration to application
import main from '../index.js'

main({
  port: 8000,
  host: 'localhost'
})
