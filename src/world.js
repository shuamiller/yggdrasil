// Uncomment the following code or use it as a template to start crafting your first world tree

// World Tree

/* let world = {
    name: "World Name Here",
    // rooms are a generic name for a conceptually cohesive space
    rooms: {
        firstRoom: {
            // name displayed in location header
            name: "First Room Name",
            // description displayed in description-div
            // use string literal syntax and enclose text in html tags for keyword highlighting
            description: `<p class="game-text">First Room Description Here</p>`,
            objects: {
                // object's objectName should be camelcase of object's name property as shown below
                firstObject: {
                    // the name property is what the object is called in the game description and is keyword highlighted
                    name: "first object"
                    description: `<p class="game-text">First Object Description Here</p>`,
                    openText: `<p class="game-text">Optional Text</p>`,
                    pushText: `<p class="game-text">Optional Text</p>`,
                    pullText: `<p class="game-text">Optional Text</p>`,
                    isTakeable: true,
                    isOpenable: false,
                    isPushable: true,
                    isPullable: true,
                    // functions to be triggered when an object is interacted with in a certain way
                    functions: {
                        // functions must be named according to their action
                        // refer to action parser for specific wording
                        examinationFunction: function() {
                            // code here
                        },
                    }
                },
            },
            characters: {
                firstCharacter: {
                    name: "First Character",
                    description: "First Character description",
                    dialogue: [
                        `<p id="dialogue-text">"Hey!"</p>`,
                        `<p id="dialogue-text">"Hi."</p>`,
                        `<p id="dialogue-text">"Go away!"</p>`
                    ],
                    isPushable: true,
                    functions: {
                        talkFunction: function() {
                            // First Character spits on you!!
                        },
                        pushFunction: function() {
                            // First Character pushes you too!
                        },
                    },
                },
            },
            // directions are 'exits' from the current room into a new room
            directions: {
                north: {
                    // if current room is attached to this room but the way is locked, blocked, or otherwise inaccessable until a requirement is met, directionalAccess is set to false
                    directionalAccess: true,
                    // name of the room in camelCase
                    room: "secondRoom",
                }
            }
        },
        secondRoom: {
            // all the same info
        }
    }
} */