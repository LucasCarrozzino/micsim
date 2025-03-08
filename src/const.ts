export interface macroInst {
    sigla: string,
    nome: string,
    meaning: string,
    code: string
}

export const macroInstList: macroInst[] = [
    // {
    //     sigla: 
    //     nome:
    //     meaning:
    //     code: 
    // },
    {
        sigla: 'LODD',
        nome: 'Load directly',
        meaning: 'ac:=m(x)',
        code: '0000 XXXX XXXX XXXX'
    },
    {
        sigla: 'STOD',
        nome: 'Store directly',
        meaning: 'm(x):=ac',
        code: '0001 XXXX XXXX XXXX',
    },
    {
        sigla: 'ADDD',
        nome: 'Add directly',
        meaning: 'ac:=ac+m(x)',
        code: '0010 XXXX XXXX XXXX'
    },
        {
        sigla: 'SUBD',
        nome: 'subtract directly',
        meaning: 'ac:=ac-m(x)',
        code: '0011 XXXX XXXX XXXX'
    },

];