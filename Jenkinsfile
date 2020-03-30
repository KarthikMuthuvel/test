pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
		    script{
                echo 'Building..'
		echo 'Added a tag..'
		    }
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
