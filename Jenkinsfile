pipeline {
  agent {
    node {
      label 'agent node'
    }

  }
  stages {
    stage('Install node_modules') {
      steps {
        sh 'npm install'
      }
    }

  }
}