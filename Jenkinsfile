node ('Docker-Slave') {
	def releasescript   =  'release.sh'
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		    		sh "chmod +x $releasescript"
				sh "./$releasescript"
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
