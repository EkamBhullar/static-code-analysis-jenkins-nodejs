pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      steps {
        echo 'Installing dependencies...'
        sh 'npm install'
        sh 'npm install -g eslint'
      }
    }

    stage('Linting Analysis') {
      post {
        always {
          recordIssues(enabledForFailure: true, aggregatingResults: true, tool: checkStyle(pattern: 'eslint.xml'))
        }

      }
      steps {
        sh 'eslint -f checkstyle src index.js > eslint.xml'
        
      }
    }

    stage('Node test') {
      steps {
        sh 'npm install -g mocha-junit-reporter'
        sh 'npm install -g mocha'
        sh 'mocha "./specs/**/*.spec.js" --reporter mocha-junit-reporter '
        junit 'test-results.xml'
      }
    }

  }
  tools {
    nodejs 'node'
  }
}
