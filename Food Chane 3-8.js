/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code

var eatsPlants = true;
var eatsAnimals = true;

/*set the onivore first, because if either hebivore or carnivore are fisrt than it will never fall throught
to omivore.
*/

var category = (eatsPlants & eatsAnimals ? "omnivore" :(eatsAnimals ? "Carnivore" : ( eatsPlants ? "herbivore" : ""))) ;
    
    console.log(category);
