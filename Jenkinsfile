pipeline {
    agent {
        dockerContainer {
            image 'node:20-alpine'
        }
    }

    options {
        // Enable Fail-Fast behavior
        skipStagesAfterUnstable()
    }
    
    stages {

        stage('Install Java') {
            steps {
                script {
                    // Install OpenJDK 11
                    sh '''
                    apk add --no-cache openjdk11
                    java -version  // Verify Java installation
                    '''
                }
            }
        }
        
        stage('Run Jenkins Agent') {
            steps {
                sh 'java -jar //remoting-3301.v4363ddcca_4e7.jar -noReconnect -noKeepAlive -agentLog //agent.log'  // Adjust this command as needed
            }
        }
        stage('Setup Project') {
            steps {
                // Install dependencies with detailed error reporting
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
                // Run ESLint
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
                // Run tests with JUnit reporter
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
                // Build the application
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
