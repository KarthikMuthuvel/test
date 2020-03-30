pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
		    script{
                echo 'Building..'
		def disk_size = sh(script: "df / --output=avail | tail -1", returnStdout: true).trim() as Integer
                echo' disk_size = ${disk_size}'
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
