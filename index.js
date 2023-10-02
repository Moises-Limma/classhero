class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque;
        switch(this.tipo) {
            case "mago":
                ataque = "magia"
                break;
            case "guerreiro":
                ataque = "espada"
                break;
            case "monge":
                ataque = "artes marciais"
                break;
            case "ninja":
                ataque = "shuriken"
                break;
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let daileon = new hero("Daileon", 29, "ninja")
let heman = new hero("He-man", 50, "guerreiro")
daileon.atacar()
heman.atacar()