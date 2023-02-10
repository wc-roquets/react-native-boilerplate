Este proyecto es una aplicación movil hecha en react native y servida por una [api construida en Ruby On Rails](https://github.com/wc-roquets/checker_backend). Sirve para controlar las horas laboradas por los trabajadores. Contiene un sistema de archivos que permite gestionar información laboral.

1- node version 18.14.0
2- React 18.2.0
3- react native 0.71.2

# Importante
0- ```npx react-native start``` para correr metro
1- ```npm run android```
2- ```npm run ios```
3- ```npm run lint```
4- ```npm run test /__tests__/``` (se debe correr especificando la ruta de los test de integración y unitarios de lo contario ejecutara los test escritos para detox folder ```e2e``` y generara un error)
5- ```npm run test:coverage /__tests__/  ``` por la misma razon del anterior punto se debe especificar el folder

#### detox
este proyecto usa detox para realizar test e2e. Para instalar detox en su maquina [consulte la documentación](https://wix.github.io/Detox/)

1- ```detox build --configuration ios.sim.debug``` crea un build de la aplicación para detox
2- ```detox test --configuration ios.sim.debug``` ejecuta los test de la carpeta ```e2e```

#### Flipper
para debuggear este proyecto es posible usar flipper, para usar flipper en su maquina [consulte la documentación](https://fbflipper.com/docs/features/react-native/)

Resolución de prblemas frecuentes

1- ```nvm unalias default```
2- ```cd ios && rm -r build```
