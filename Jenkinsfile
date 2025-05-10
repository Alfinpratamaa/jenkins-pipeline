// Jenkinsfile for Fail-Fast CI/CD Pipeline

pipeline {
    agent {
    docker {
        image 'node:20-alpine'
        args '-u root:root'  // Optional: Set user for Docker container
    }
}

    
    options {
        // Enable Fail-Fast behavior
        skipStagesAfterUnstable()
    }
    
    stages {
        stage('Setup') {
            steps {
                // Install dependencies with detailed error reporting
                sh 'npm ci'
            }
            post {
                // Fail-fast: If setup fails, mark the build as unstable
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
                // Fail-fast: If linting fails, mark the build as unstable
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
                // Publish test results
                always {
                    junit 'test-results.xml'
                }
                // Fail-fast: If tests fail, mark the build as unstable
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
                // Fail-fast: If build fails, mark the build as unstable
                failure {
                    unstable(message: 'Build failed, failing fast')
                }
                // Archive the built application
                success {
                    archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
                }
            }
        }
        
        stage('Deploy') {
            when {
                // Only deploy on main/master branch
                expression { 
                    return env.BRANCH_NAME == 'main' || env.BRANCH_NAME == 'master'
                }
            }
            steps {
                // Example deployment step (replace with actual deployment command)
                echo 'Deploying application...'
                // Example: Copy to web server directory
                // sh 'rsync -av dist/ /var/www/html/'
            }
            post {
                // Fail-fast: If deployment fails, mark the build as unstable
                failure {
                    unstable(message: 'Deployment failed, failing fast')
                }
            }
        }
    }
    
    post {
        // Send notifications after pipeline completion
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