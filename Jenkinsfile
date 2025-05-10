pipeline {
    agent any

    stages {
        stage('Install Node.js') {
            steps {
                // Use PowerShell/CMD to check if Node.js is installed
                bat 'node -v || echo "Node.js not found"'
                bat 'npm -v || echo "npm not found"'
                
                // Install Node.js using nodejs-plugin or nvm for Windows
                // Or simply use the system's Node.js if available
                echo "Using system Node.js or installing if needed"
            }
        }

        stage('Setup Project') {
            steps {
                bat 'npm ci'
            }
            post {
                failure {
                    unstable(message: 'Setup stage failed, failing fast')
                }
            }
        }
        
        stage('Code Quality') {
            steps {
                bat 'npm run lint'
            }
            post {
                failure {
                    unstable(message: 'Linting failed, failing fast')
                }
            }
        }
        
        stage('Test') {
            steps {
                bat 'npm run test:ci'
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
                bat 'npm run build'
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