pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		    sh "chmod +x release.sh"
			sh "release.sh"
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
