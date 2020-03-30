pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
		try {sh "chmod +x release.sh"
		sh "./release.sh"
		echo 'Added a tag..'
		} 
    		catch (err) 
    		{echo "TEST CASES FAILED"}
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
