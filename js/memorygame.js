window.addEvent('domready', () => {
    new MemoryGame();
});

class MemoryGame {
    constructor() {
        this.listImagesCard();
        this.createCardElement();
        this.insertCard();
    }

    listImagesCard() {
        this.cardsImage = [{
            0: "images/4.png",
            1: "images/40.png",
            2: "images/10.png",
            3: "images/1.png",
            4: "images/4.png",
            5: "images/3.png",
            6: "images/32.png",
            7: "images/51.png",
            8: "images/8.png",
            9: "images/33.png",
            10: "images/53.png",
            11: "images/35.png",
            12: "images/20.png",
            13: "images/50.png",
            14: "images/46.png",
            15: "images/47.png",
            16: "images/29.png",
            17: "images/43.png",
            18: "images/5.png",
            19: "images/52.png"
        }];

        return this.cardsImage;
    }

    flipCard() {

    }

    createCardElement() {
        this.card = new Element("div", {
            "class": "container-card"
        });

        let list = this.listImagesCard()[0];

        for( let item in list) {
            this.contentFrontBackCard = new Element("div", {
                "class": "contentCard",
                "events": {
                    "click": (ev) => {
                        ev.target.getParent().addClass("active");
                    }
                }
            }).adopt(
                new Element('div', {
                    "class": "front",
                    "id": item
                }),

                new Element('div', {
                    "class": "back",
                    "data-id": item,
                    "styles": {
                        "background": "url('"+list[item]+"')"
                    }
                })
            ).inject(this.card)
        }

        return this.card;
    }

    insertCard() {
        $("receive-card").adopt(this.createCardElement())
    }
}