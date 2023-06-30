// Powered by Infostretch 

timestamps {

node () {

	stage ('git-webhooks - Checkout') {
 	 checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'github', url: 'https://github.com/dgaonam/Rick_Morty_Final.git']]]) 
	}
}
}