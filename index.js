#!/usr/bin/env node
const rasper = require('rasper')
const { open } = require('openurl')
const { version, homepage } = require('./package.json')
const { info } = console

const options = process.argv[0].match(/node/i)
  ? rasper(process.argv.slice(2))
  : rasper()

if (require.main === module) usehope(options)

function usehope (options = {}) {
  if (options.help) {
    info(`
Usage:

  $ usehope [<options>]

Options:

  -h, --help              Display help information
  -v, --version           Output Initify version

Examples:

  $ usehope
		`)
    process.exit(2)
  }

  if (options.version) {
    info(`v${version}`)
    process.exit(2)
  }

  info("Let's save lives together!")
  setTimeout(() => open(homepage), 2000)
}
