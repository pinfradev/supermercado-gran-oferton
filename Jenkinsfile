pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t supermarket-app .'
            }
        }
        stage('Test') {
            steps {
                sh 'docker run --rm supermarket-app npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo Deploying the application...'
            }
        }
    }
}
