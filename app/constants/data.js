export const data = [
    {
        key: 1,
        title: 'Información adicional',
        text: 'Por favor, complete los siguientes datos para finalizar el registro de su perfil',
        options: [{
            type: 'Tipo de ventilador',
            selectors: ['Invasivo', 'No invasivo']
        }, {
            type: 'Tipo de valvula',
            selectors: ['None']
        }],
        inputs: [],
    },
    {
        key: 2,
        title: 'Informacion del paciente',
        text: 'Welcome to CoronApp \n Click next to continue',
        options: [],
        inputs: ['Cédula', 'Nombre', 'Peso', 'Nacionalidad', 'Direccion'],
        image: require('../../assets/LOGOFINAL.png'),
    },
];
