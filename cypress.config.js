const { defineConfig } = require('cypress')

let noteId

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    setupNodeEvents(on, config) {
      on('task', {
        saveNoteId(id) {
          noteId = id
          return noteId
        },
        getNoteId() {
          return noteId
        }
      })
      return config
    },
  },
  fixturesFolder: false
})
