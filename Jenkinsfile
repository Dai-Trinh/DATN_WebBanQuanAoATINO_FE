node {
  stage('checkout') {
          checkout scm
      }

  stage("Check old image") {
      bat 'docker rm -f atino-frontend || echo "this container does not exist" '
      bat 'docker image rm -f  atino-fe-frontend || echo "this image dose not exist" '
  }
  stage('Build and Run prod') {
      bat 'docker compose up -d --build'
  }
}