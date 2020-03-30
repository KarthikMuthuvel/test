pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
		    script{
                echo 'Building..'
		sh "git tag -a 'v3.0' -m 'msg'"
		sh "git push --tags origin master"
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
