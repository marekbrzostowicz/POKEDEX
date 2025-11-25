pipeline {
    agent any

    stages {
        stage('Inicjalizacja paczek'){
            steps {
                echo 'Instaluje zalenosci ...'
                bat 'npm install'
            }
        }

        stage('budowanie'){
            steps{
                echo 'Buduje wersje produkcyjne'
                bat 'npm run build'
            }
        }

        stage('Pokaz wyniki (achiwizacja)'){
            steps {
                archiveArtifacts artifacts: 'dist/**/*', followSymlinks: false
            }
        }
    }
}