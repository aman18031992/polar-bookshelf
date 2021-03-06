"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FlashcardRegistry_1 = require("./FlashcardRegistry");
const Assertions_1 = require("../test/Assertions");
const TestingTime_1 = require("../test/TestingTime");
TestingTime_1.TestingTime.freeze();
describe('FlashcardRegistry', function () {
    describe('createDefault', function () {
        it("basic", function () {
            let flashcardRegistry = FlashcardRegistry_1.FlashcardRegistry.createDefault();
            let expected = [
                {
                    "id": "9d146db1-7c31-4bcf-866b-7b485c4e50ea",
                    "name": "Front and Back",
                    "description": "Standard front and back flashcard.",
                    "fields": {
                        "front": {
                            "name": "front",
                            "type": "TEXT",
                            "description": "The front of this card",
                            "rememberLastInput": false,
                            "required": true
                        },
                        "back": {
                            "name": "back",
                            "type": "TEXT",
                            "description": "The back of this card",
                            "rememberLastInput": false,
                            "required": true
                        },
                        "extra": {
                            "name": "extra",
                            "type": "TEXT",
                            "description": "Extra data shown after the card has been answered.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "source": {
                            "name": "source",
                            "type": "TEXT",
                            "description": "The source of this card. Name of the webpage, book, whitepaper, etc.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "link": {
                            "name": "link",
                            "type": "URL",
                            "description": "A link for more information regarding this flashcard. Usually the link to the source.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "image": {
                            "name": "image",
                            "type": "IMAGE_URL",
                            "description": "A link to an image for this flashcard.",
                            "rememberLastInput": false,
                            "required": false
                        }
                    }
                },
                {
                    "id": "e3d25ed4-cafd-4350-84e8-123a4258e576",
                    "name": "Front and Back and Reverse",
                    "description": "Standard front and back flashcard (plus reverse)",
                    "fields": {
                        "front": {
                            "name": "front",
                            "type": "TEXT",
                            "description": "The front of this card",
                            "rememberLastInput": false,
                            "required": true
                        },
                        "back": {
                            "name": "back",
                            "type": "TEXT",
                            "description": "The back of this card",
                            "rememberLastInput": false,
                            "required": true
                        },
                        "extra": {
                            "name": "extra",
                            "type": "TEXT",
                            "description": "Extra data shown after the card has been answered.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "source": {
                            "name": "source",
                            "type": "TEXT",
                            "description": "The source of this card. Name of the webpage, book, whitepaper, etc.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "link": {
                            "name": "link",
                            "type": "URL",
                            "description": "A link for more information regarding this flashcard. Usually the link to the source.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "image": {
                            "name": "image",
                            "type": "IMAGE_URL",
                            "description": "A link to an image for this flashcard.",
                            "rememberLastInput": false,
                            "required": false
                        }
                    }
                },
                {
                    "id": "76152976-d7ae-4348-9571-d65e48050c3f",
                    "name": "clozure",
                    "description": "Clozure flashcard with cloze text.",
                    "fields": {
                        "text": {
                            "name": "front",
                            "type": "TEXT",
                            "description": "The text of this card.",
                            "rememberLastInput": false,
                            "required": true
                        },
                        "extra": {
                            "name": "extra",
                            "type": "TEXT",
                            "description": "Extra data shown after the card has been answered.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "source": {
                            "name": "source",
                            "type": "TEXT",
                            "description": "The source of this card. Name of the webpage, book, whitepaper, etc.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "link": {
                            "name": "link",
                            "type": "URL",
                            "description": "A link for more information regarding this flashcard. Usually the link to the source.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "image": {
                            "name": "image",
                            "type": "IMAGE_URL",
                            "description": "A link to an image for this flashcard.",
                            "rememberLastInput": false,
                            "required": false
                        }
                    }
                }
            ];
            Assertions_1.assertJSON(flashcardRegistry.values(), expected);
        });
    });
});
//# sourceMappingURL=FlashcardRegistryTest.js.map