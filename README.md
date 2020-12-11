# Yggdrasil

Yggdrasil is a game engine made for those that wish to create large, exploration-based text-adventure games with a good amount of interactivty.
Yggdrasil contains files that help developers build these games. These files provides structure that makes it easier for the developers to
create worlds for their players to explore. Because this engine is for web-based games, it uses HTML as the interface and Javascript for the 
programming side.

There are five core files included: index.html, styles.css, script.js, world.js, and custom.js. The index.html file includes basic boilerplate
code as well as basic structure for the user interface such as a heading, a div where the room description is displayed, a div where the action
responses are logged, and a div where the player input interface is displayed. There's a styles.css file with selectors for all included elements,
both in the HTML and generated by the Javascript. The script.js file is where most of the magic happens. This is the essence of the engine. This
file grabs all the necessary HTML elements, initializes the player character, changes the interface from the introductory screen to the game
screen, grabs the player's input, parses through the input, and finds the correct response. The world.js file contains the World Tree. This is
where the content lives. It is all contained in a primary object called 'world' by default. The world is made up of rooms, which are made up of
in-game objects, characters, directions, and functions. Rooms are conceptual spaces rather than literal, enclosed rooms. And finally there's the
custom.js file. This is where the custom functions that might be accessed by the player or elsewhere outside of object/character functions.
