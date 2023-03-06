pipeline {
  agent {
    node {
      label 'any'
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