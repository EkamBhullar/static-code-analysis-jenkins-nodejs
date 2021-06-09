pipeline {
  agent any
 
  tools {nodejs "node"}
  
  stages {
  
  stage('Install dependencies') {
        steps {
            echo 'Installing dependencies...'
            sh 'npm install'
            sh 'npm install -g eslint'
        }
}
  stage ('Linting Analysis') {
        steps {
            sh 'eslint -f checkstyle src > eslint.xml'
        }
        post {
            always {
                recordIssues enabledForFailure: true, aggregatingResults: true, tool: checkStyle(pattern: 'eslint.xml')
            }
        }
    }
 
  
    
    stage('Node test') {
      steps {
        sh 'npm install -g mocha-junit-reporter'
        sh 'npm install -g mocha'
        sh 'mocha "./specs/**/*.spec.js" --reporter mocha-junit-reporter '
      }
        post {
            always {
                recordIssues enabledForFailure: true, aggregatingResults: true, tool: checkStyle(pattern: 'test-results.xml')
            }
        }
    }
  }
}
