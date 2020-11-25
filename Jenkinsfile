properties([
  parameters ([
    choice(name: 'Enviornment', choices: ['dev', 'qa', 'qa2'], description: '')
  ])
])
def port = "8081"
def src = "./src/index.js"
@Library('mylibrary') _
test(port, src, params.Enviornment)
