let game = {
    cards: null,
    locMode: false,
    firstCard: null,
    secondCard: null,
    techs: ['alarm',
        'book',
        'camera',
        'coracao',
        'facebook',
        'files',
        'google',
        'Imessage',
        'lua',
        'whatsapp'],

    setCard: function (id) {
        let card = this.cards.filter(card => card.id === id)[0]

        if (card.flipped || this.locMode) {
            return false
        }

        if (!this.firstCard) {
            this.firstCard = card
            this.firstCard.flipped = true
            return true
        }
        else {
            this.secondCard = card
            this.secondCard.flipped = true
            this.locMode = true
            return true
        }
    },
    // Checar se as cartas viradas são iguais
    checkMatch: function () {
        if (!this.firstCard || !this.secondCard) {
            return false
        }
        return this.firstCard.icon === this.secondCard.icon
    },
    // Limpar cartas
    clearCards: function () {
        this.firstCard = null
        this.secondCard = null
        this.locMode = false
    },
    // Adicionar Placar
    // adicionarMovements: function () {
    //     let nMovemants = document.getElementById('nMovements')
    //     if(this.secondCard.flipped){    
    //         numberMoves =+ 1
    //         nMovemants.innerHTML = `<div>${numberMoves}</div>`
    //         numberMoves++
    //     }
    // },
    // Virar cartas
    unflipCards() {
        this.firstCard.flipped = false
        this.secondCard.flipped = false
        this.clearCards()
    },
    // Check Game Over
    checkGameOver: function () {
        return this.cards.filter(card => !card.flipped).length == 0
    },

    // FUNÇÕES PARA CRIAR CARTAS
    // crear cartas
    createCardsFromTechs: function () {
        this.cards = []

        this.techs.forEach((tech) => {
            this.cards.push(this.createPairFromTechs(tech))
        })
        this.cards = this.cards.flatMap(pair => pair)
        this.shuffleCards()
        return this.cards
    },
    // criar par das cartas
    createPairFromTechs: function (tech) {
        return [{
            id: this.createIdWidthTech(tech),
            icon: tech,
            flipped: false
        }, {
            id: this.createIdWidthTech(tech),
            icon: tech,
            flipped: false
        }]
    },
    // criar id das cartas
    createIdWidthTech: function (tech) {
        return tech + parseInt(Math.random() * 1000)
    },

    // EMBARALHAR CARTAS
    shuffleCards: function () {
        let currentIndex = this.cards.length
        let randomIndex = 0

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    }
}

