export const data = [
    {
        key:1,
        title: 'Informacion del ventilador',
        text: 'Welcome to CoronApp \n Click next to continue',
        options: [{
           type: 'Tipo de ventilador',
            selectors: ['Invasivo', 'No invasivo']
       }, {
           type: 'Tipo de valvula',
           selectors: ['None']
        }],
        inputs:[],
        image: require('../../assets/LOGOFINAL.png'),
    },
    {
        key: 2,
        title: 'Informacion del paciente',
        text: 'Welcome to CoronApp \n Click next to continue',
        options: [],
        inputs: ['Cédula', 'Nombre','Peso', 'Nacionalidad','Direccion'],
        image: require('../../assets/LOGOFINAL.png'),
    },
];
