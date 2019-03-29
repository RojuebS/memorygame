window.addEvent('domready', () => {
    new MemoryGame();
});

Array.prototype.shuffle = function(){
    for (var i = 0; i < this.length; i++){
        var a = this[i];
        var b = Math.floor(Math.random() * this.length);
        this[i] = this[b];
        this[b] = a;
    }
}

class MemoryGame {
    constructor() {
        this.listImagesCard();
        this.createCardElement();
        MemoryGame.shuffleCards(this.cardsImage)
    }

    listImagesCard() {
        this.cardsImage = [
            {"id": 1, "name": "images/4.png"},
            {"id": 2, "name": "images/40.png"},
            {"id": 3, "name": "images/10.png"},
            {"id": 4, "name": "images/1.png"},
            {"id": 5, "name": "images/4.png"},
            {"id": 6, "name": "images/3.png"},
            {"id": 7, "name": "images/32.png"},
            {"id": 8, "name": "images/51.png"},
            {"id": 9, "name": "images/8.png"},
            {"id": 10, "name": "images/33.png"},
            {"id": 11, "name": "images/53.png"},
            {"id": 12, "name": "images/35.png"},
            {"id": 13, "name": "images/20.png"},
            {"id": 14, "name": "images/50.png"},
            {"id": 15, "name": "images/46.png"},
            {"id": 16, "name": "images/47.png"},
            {"id": 17, "name": "images/29.png"},
            {"id": 18, "name": "images/43.png"},
            {"id": 19, "name": "images/5.png"},
            {"id": 20, "name": "images/52.png"}
        ];
    }


    static shuffleCards(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    flipCard(ev) {
        ev.target.getParent().addClass("flip");
         setTimeout( () => {
            ev.target.getParent().addClass("active");
        }, 1000);

    }

    isValidOptions(answers) {
        let card1 = answers[0].closest(".contentCard").get("data-img");
        let card2 = answers[1].closest(".contentCard").get("data-img");

        if(card1 === card2) {
            answers.each( (el) => {
                el.closest(".contentCard").closest(".contentCard").hide();
            });
        } else {
            answers.each( (el) => {
                $$(".contentCard").removeClass("active");
                el.closest(".contentCard").addClass("unFlip").removeClass("flip");
            })
        }
        console.log(card1, card2)
    }

    createCardElement() {
        this.card = new Element("div", {
            "class": "container-card"
        });

        this.sortDivs = [];
        this.count = 0;
        for(let a = 1; a <= 2; a++){
            MemoryGame.shuffleCards(this.cardsImage).each( (item, i) => {

                this.answer = [];
                this.contentFrontBackCard = new Element("div", {
                    "class": "contentCard",
                    "data-img": item.name,
                    "events": {
                        "click": (ev) => {
                            this.flipCard(ev);
                            setTimeout( () => {
                                this.answer.push(ev.target);
                                if(this.count === 1) {
                                    this.isValidOptions(this.answer);
                                    this.answer = [];
                                    this.count = 0;
                                } else {
                                    this.count++;
                                }
                            }, 3000)
                        }
                    }
                }).adopt(
                    new Element('div', {
                        "class": "front"
                    }),

                    new Element('div', {
                        "class": "back",
                        "styles": {
                            "background": "url('"+item.name+"') no-repeat center center"
                        }
                    })
                );
                this.sortDivs.push(this.contentFrontBackCard);
            });
        }
        this.populateCard(this.sortDivs.sort());
    }

    populateCard(cards) {
        cards.each( (card, i) => {
            card.inject(this.card);
        });

        MemoryGame.insertCard(this.card)
    }

    static insertCard(el) {
        $("receive-card").adopt(el)
    }
}