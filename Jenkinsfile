pipeline {
    agent any
	
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
				sh "./release.sh"
				echo 'Added a tag..'
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
