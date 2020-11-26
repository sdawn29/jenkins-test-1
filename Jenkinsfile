properties([
  parameters ([
    choice(name: 'Enviornment', choices: ['dev', 'qa', 'qa2'], description: '')
  ])
])
def name = "John"
def lname = "Dawn"
@Library('mylibrary') _
test(name, lname, params.Enviornment)
