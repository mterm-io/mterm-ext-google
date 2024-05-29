const qs = require('querystring')

module.exports = {
    COMMANDS: () => {
        return {
            'google': {
                description: 'search google in the browser!',
                exec(what) {
                    this.context.out(`google = ${what}`)
                    this.shell.openExternal(`https://google.com/search?q=${qs.escape(what)}`)
                    this.context.finish()
                }
            }
        }
    }
}