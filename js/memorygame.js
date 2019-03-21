window.addEvent('domready', () => {
    new MemoryGame();
});

class MemoryGame {
    constructor() {
        console.log("123");
        this.listImagesCard();
        this.createCardElement();
        this.insertCard();
    }

    listImagesCard() {
        this.cardsImage = [{
            0: "/static/jogodamemoria/set/1/4.png",
            1: "/static/jogodamemoria/set/1/40.png",
            2: "/static/jogodamemoria/set/1/10.png",
            3: "/static/jogodamemoria/set/1/1.png",
            4: "/static/jogodamemoria/set/1/4.png",
            5: "/static/jogodamemoria/set/1/3.png",
            6: "/static/jogodamemoria/set/1/32.png",
            7: "/static/jogodamemoria/set/1/51.png",
            8: "/static/jogodamemoria/set/1/8.png",
            9: "/static/jogodamemoria/set/1/33.png",
            10: "/static/jogodamemoria/set/1/53.png",
            11: "/static/jogodamemoria/set/1/35.png",
            12: "/static/jogodamemoria/set/1/20.png",
            13: "/static/jogodamemoria/set/1/15.pn",
            14: "/static/jogodamemoria/set/1/46.png",
            15: "/static/jogodamemoria/set/1/47.png",
            16: "/static/jogodamemoria/set/1/29.png",
            17: "/static/jogodamemoria/set/1/43.png",
            18: "/static/jogodamemoria/set/1/5.png",
            19: "/static/jogodamemoria/set/1/52.png",
            20: "/static/jogodamemoria/set/1/50.png"
        }];

        console.log(this.cardsImage)

        return this.cardsImage;
    }

    createCardElement() {
        this.card = new Element("div", {
            "class": "container-card"
        });




        this.elementRepeat = new Element('div', {
                "class": "front"
            }),

            new Element('div', {
                "class": "back"
            })

        return this.card;
    }

    insertCard() {
        $("receive-card").adopt(this.createCardElement())
    }
}