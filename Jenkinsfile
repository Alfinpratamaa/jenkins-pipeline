pipeline {
    agent any

    stages {
        stage('Installing Nodejs with docker'){
                agent {
                    docker {
                        image 'node:20-alpine'
                    }
                }
                
                steps {
                    sh 'echo "woi kontol"'
                }
        }  

        stage('checking node and npm version') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Setup Project') {
            steps {
                sh 'npm ci'
            }
            post {
                failure {
                    unstable(message: 'Setup stage failed, failing fast')
                }
            }
        }
        
        stage('Code Quality') {
            steps {
                sh 'npm run lint'
            }
            post {
                failure {
                    unstable(message: 'Linting failed, failing fast')
                }
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm run test:ci'
            }
            post {
                always {
                    junit 'test-results.xml'
                }
                failure {
                    unstable(message: 'Tests failed, failing fast')
                }
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
            post {
                failure {
                    unstable(message: 'Build failed, failing fast')
                }
                success {
                    archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
                }
            }
        }
        
        stage('Deploy') {
            when {
                expression { 
                    return env.BRANCH_NAME == 'main' || env.BRANCH_NAME == 'master'
                }
            }
            steps {
                echo 'Deploying application...'
            }
            post {
                failure {
                    unstable(message: 'Deployment failed, failing fast')
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed'
        }
        success {
            echo 'Pipeline succeeded!'
        }
        unstable {
            echo 'Pipeline is unstable. Check the logs for errors.'
        }
        failure {
            echo 'Pipeline failed. Check the logs for errors.'
        }
    }
}
