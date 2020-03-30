pipeline {
    agent any
	
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
				sh "git tag 2.0"
				echo 'Added tag..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
