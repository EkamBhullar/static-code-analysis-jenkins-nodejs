pipeline {
  agent any
 
  tools {nodejs "node"}
  
  stage('Install dependencies') {
        steps {
            echo 'Installing dependencies...'
            sh 'npm install'
            sh 'npm install eslint'
        }
}
  stage ('Linting Analysis') {
        steps {
            sh ' ./node_modules/eslint/bin/eslint.js -f checkstyle src > eslint.xml'
        }
        post {
            always {
                recordIssues enabledForFailure: true, aggregatingResults: true, tool: checkStyle(pattern: 'eslint.xml')
            }
        }
    }
 
  stages {
    
    stage('Node test') {
      steps {
        sh 'npm config ls'
      }
    }
  }
}
