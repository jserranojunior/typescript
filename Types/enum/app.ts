

function EnumExemplo(){
    enum campeoes{
        Vasco,
        flamengo
    }

    let titulos = campeoes.Vasco;

    switch(titulos){
        case campeoes.flamengo:
        console.log('Flamengo foi campeão');
        break;

        case campeoes.Vasco:
        console.log('Vasco campeão');
        break;
    }
}

EnumExemplo();