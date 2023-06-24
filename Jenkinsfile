pipeline  {

    agent any
    stages{
        stage('Build image') {
            when{
                branch 'master'
            }
            sh "sudo docker build -t proyecto:${commit_id} ."
            sh "sudo docker-compose up -d"

        }
    }

}