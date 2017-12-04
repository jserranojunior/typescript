function EnumExemplo() {
    var campeoes;
    (function (campeoes) {
        campeoes[campeoes["Vasco"] = 0] = "Vasco";
        campeoes[campeoes["flamengo"] = 1] = "flamengo";
    })(campeoes || (campeoes = {}));
    var titulos = campeoes.Vasco;
    switch (titulos) {
        case campeoes.flamengo:
            console.log('Flamengo foi campeão');
            break;
        case campeoes.Vasco:
            console.log('Vasco campeão');
            break;
    }
}
EnumExemplo();
//# sourceMappingURL=app.js.map