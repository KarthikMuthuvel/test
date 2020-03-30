pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
		    script{
                echo 'Building..'
		def releasescript = 'release.sh'
		sh "chmod +x $releasescript"
		sh "./$releasescript"
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
