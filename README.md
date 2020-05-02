# qureka
Object Oriented Javascript based quiz application

All the properties and methods related to a question are grouped together. This is called <b>Encapsulation</b>.

<b>Abstraction</b> means, we should hide the details and show the essentials. So in this example, we should hide the isCorrectAnswer method. These are implementation details, so we should hide these from the consumers of this object. Consumers should only call the calculateScore function with choice and timeTaken. Whatever logic happens inside the calculateScore function should be hidden.

We have a Question object. Let us create objects called CricketQuestion, PoliticsQuestion objects. We can move all the common behaviour of the CricketQuestion and PoliticsQuestion objects to the Questions Objects.
Now, we refer to the Question object as the prototype of the CricketQuestion and PoliticsQuestion object. It is essentially the parent of these objects. Prototype means parent. This is called prototypical <b>inheritance</b>

For the questions in the questions array, we see that the calculateScore method for the specific question is called. This is the beauty of <b>Polymorphism</b>


