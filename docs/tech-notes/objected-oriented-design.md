---
id: objected-oriented-design
title: Object Oriented Design
---

Software Development Methodologies.

Anything more than hello world problem needs plan as per the complexity of project and collaborators involved.

2 methods

1. Waterfall
    1. Requirements should not change once started and requires detailed plan before start.
2. Agile
    1. Change friendly responsive agile approach. Expectations can change rapidly.

Waterfall

Start by step by step approach one after another.

1. Collect & analyse requirements.
2. Architecture definition
    1. Components/packages
    2. Key types
    3. Interactions
    4. Security
    5. Performance
    6. Fault tolerance
    7. Robustness
    8. Extensibility
    9. 3rd party usage
3. Implementation
4. Verification
    1. Functional
    2. Performance
    3. Security
    4. Usability
5. Maintenance
    1. Fix defects
    2. Small enhancements
    3. Should avoid making substantial changes during the maintenance phase.

Waterfall should be suitable for

1. Life control systems
2. Medical systems
3. Military systems

Use waterfall only if the requirements are clear and won’t change frequently.

Agile values

1. Individual and interactions over processes and tools.
    1. Use process and tools without affecting the implementing changes
    2. Should not enforce people to follow a rigid process, we implement a process that’s adaptive and responds to changes
2. Working software over comprehensive documentation
    1. But don’t use agility as an excuse for a lack of documentation!
    2. Create docs when it’s provides value
    3. Don’t over document anything
3. Customer collaboration over contract negotiation.
    1. Requires contracts to manage customer expectations about costs and schedules.
    2. Partnership between development team and customer.
        1. Uncertain nature of agile projects both parties acknowledge that some requirements and details may need to be redefined or clarified further as the project progresses.
4. Responding to change over following a plan
    1. Should provide more flexibility
    2. Should be ready to change the requirement event at the later phase of the development.
    3. Requires only basic plan to get start. Detailed plan is not needed.

Why agile is better?

1. Could deliver functional software iteratively than the entire project all at once.
2. Work broken up in small sprints.
3. Sprint usually 2 - 4 weeks long.
4. Each sprint should deliver improved version of earlier one’s
5. This will provides opportunity to frequently review the product that’s being developed.
6. Stakeholders can evaluate the software and provide their feedback early

Agile Frameworks

1. Scrum
2. Kanban

History of programming

Non structured programming - 1950

Structured programming - 1960

Object Oriented programming - 1980

OOP - main idea is to split apart the program into self contained objects.

Objects

1. Acts as a separate program
2. Operates on it’s own data
3. Interacts with each other objects.

Object oriented programming aims to bring the programming closer to the real world.

Structured programming relies on actions, object oriented programming is organised around objects.

Objects can be simple or complex.

Ex: golf ball and falcon heavy is an object

So, these are depends on the level of detail we need.

The object may contain or refer to other objects.

We can describe objects using their properties. It can be attribute like name, colour, weight and velocity.

Objects having their identity, their own state. Changing the state of one object doesn’t change the state of other objects.

An object has its own behaviour.

An behaviour of an object is what it can do.

Ex: The black dog barks

Black - property

Dog - object (noun)

Barks - behaviour

Noun is the object, verb is the behaviour, adjective is the property.

Class

The blueprint of an object.

Class can be a plan, description of what an object will be.

Example: Pokemon class

Pokemon provides a blueprint for how the Pokemon looks like and what it can do

The class tells us that each object has a name, armour level, hit points

Properties

- Name
- Armour
- Hit points

Actions

- Attack
- Defend

Class

Name, properties, methods

We can create objects based on class

Upon object creation, we provide the values for the attributes declared in the class.

Each objects will have a name, armour level, and hit points

The attack and defend behaviours are provided by the class.

Another big benefit of classes is that we can package them into libraries or frameworks.

All modern object-oriented programming languages provide such built-in frameworks and libraries.

We don’t have to reinvent the wheel by implementing functionality that’s already available.

But the pre-made classes won’t cover all the needs. We’ll often find yourself creating your own classes.

Abstraction

Abstraction is a way of describing complex problems in simple terms by ignoring some details. Eliminating the minutiae helps us focus on the bigger picture.

When we start defining a class, we focus on the essential qualities and discard unimportant ones.

Real world example: when someone say cat we’ll understand that is class without knowing color, sex etc same applies for home, car

The home car might have more functions inside but as a human we only see it in an overview.

Pokemon EX:

We only exposing name, armour, hit points properties and ignoring age, weight, height

Encapsulation

Encapsulate something to protect it and keeps its parts together. Think of how medicine is enclosed in a shell called capsule. In OOP this translates to packing together our properties and methods in a class.

Encapsulation also means hiding the gears and the levers.

encapsulation = data hiding + abstraction

Example

We can use a phone without understanding electronics. We don’t need to know how the touchscreen, the camera or the logic board works. Even we don’t need to see them.

Similar for class as well. In Pokemon class we don’t want to expose the inner working of our class. Like intestine length, bone composition. The object should only reveal the essential features.

This concept is called data hiding. Avoid exposing the inner workings of our objects.

We restrict clients from modifying the object in ways we did not originally plan, whether it’s intentional or accidental.

When designing your classes, expose only as much detail as needed

Data hiding plays an essential role in keeping the dependencies between objects to a minimum.

Tightly coupled system, with most of the objects depending on each other is an obvious sign of a bad design. Any tiny modification will cascade down and require you to change other parts of the system, too.

Inheritance

Reusing an existing class implementation in new classes.

Take our Pokemon class it has attack, defend properties what if you want to add some more properties to it

Our new classes can be ElectricPokemon, WaterPokemon, FlyingPokemon and each has it’s own set of properties also they have common Properties from Pokemon

Electric -> wildCharge

Water -> aquaTail

Flying -> dragonAscent

If we add behaviours to Pokemon class then it take too many responsibilities.

Object orientation is about granularity and separation of concerns. Each class should focus on a set of specific functionalities and do that well.

Creating one-size-fits-all monolithic classes is a major mistake and object-oriented software development.

Keeping the classes separately might be a better idea but we keep repeating the same code. This is where inheritance coming. Inheritance helps us to inherit behaviour of existing classes.

Polymorphism

The condition of occurring in several different forms

Method overriding

Subclasses can provide a specialised implementation of a method defined in the superclass.

We reimplemented the method with the same name and parameters as the one defined in the parent class and provide our own behaviour by doing the the current class will have a different attack behaviour than their Pokemon superclass.

And this change won’t affect the other sub classes or super class

Polymorphism is about working freely with instances of many different classes that share a common super class

OOAD

1. Collect requirements
    1. Identify the problems we want to solve
    2. Clarify functionality required to solve the problems
    3. Document important decisions
2. Description of the software system
    1. Describe the system from the user’s point of view
        1. Depending on project we should choose b/w waterfall modal and agile
    2. Create wireframes and prototypes if needed.
        1. Wireframes are very useful if the client had no specific expectations.
3. Identify the classes
    1. Aim to identify the things that form our system.
    2. Picking the essential entities won’t be challenging if we did a good job during the previous two steps.
    3. Ex Item Class, SecureCommunicator class, LocalPersistence class
4. Create diagrams

UML Diagrams (Unified Modeing Language)

Graphical notation used to describe object-oriented systems

Collecting Requirements

We must clarify what’s needed or wanted in our application.

Functional requirements

Represent the features

Define how to react to an input

Determine the expected behaviour.

Example: develop an app for runners.

Questions should be

Should the actual speed always be visible on the main screen?

Do we allow imperial or metric units?

Should we make this configurable by the user or automatically adjust the units based on the phone’s settings instead

Non functional requirements

Not directly related to the feature of the system

Example

Performance requirements (performance of the app)

Legal requirements

Does the app collects sensitive data?

Does it allow users to browse the internet?

Documentation and Support

Ignoring non functional requirements may cause serious legal issues and all sorts of other problems.

Functional Requirements Example

- The app must store travel expenses organised by trips.
- Each trip must have a home currency.
- The default currency is fetched from the phones settings
- User setting need to override the default home currency.
- Expenses can be entered in any of the supported currencies.
- The app must automatically convert the amounts to the home currency.

Non functional requirements

- The app must run on iOS 9 and newer versions
- The app must avoid unnecessary network roundtrips to reduce data roaming fees and preserve battery.
- The app must include the support email and the link to the app’s website.

Format
The app/system> must do something

Mapping requirements to Technical descriptions

We provide short, accurate descriptions of our systems functionality from the user’s perspective

Use case

Title - short, description, use case title

Each use case should represent a distinct functionality.

Actor - User

Actor can be a human or another system

Scenario - Explain how the software works in this scenario

Example

Create new trip

Actor: Mobile User

- The user can initiate the creation of a new trip from the main screen.
- The title is mandatory. All the other settings are optional.
- Optionally, the user can write a short description and set a start and end date for the trip.
- The app assigns a default home currency based on the phone’s settings. Users can override the default home currency with any of the supported currencies.
- The app allows setting a budget for the trip. This setting is optional.
- Also, the user can assign a custom thumbnail to a trip.
- The user can save the trip or cancel the trip creation process.

This description should be understood by all stakeholders, including the end users.

The use case document aims to provide a clear and human friendly description, what a specific part of a software does and how the actors interact with it.

User story format

As a type of user, I want some goal so that some reason.

Example:

As a user, I want to add notes to my expenses, so that I can identify them later on.

As a power user, I want to retrieve the app’s database file, so that I can inspect it on any computer.

Epic

Describe a bigger chunk of functionality. Should be split into smaller user stories.

Example :

Epic - As a traveler, I want to track my expense while abroad, so that I don’t exceed my budget.

User Story #1 - As a user, I want to create new trips, so that I can track each of my travels separately.

User Story #2 - As a business traveler, I want to tag my business trips, so that I can separate them from my private travels.

User stories are often written on sticky notes or index cards.

Use use stories to ignite discussions instead of  describing details.

UML Diagrams (Unified Modeling Language)

Standard graphical notation used to describe object oriented systems.

UML Provides a set of standard diagram types that can be used to describe both the structure and the behaviour of software systems. We’ll dig deeper into UML in  the upcoming sections.

Helps visualise how the objects interacts with each other.

Software design or business process is even more challenging if there is no commonly accepted way(like UML) to do it

Types:
Use case Diagrams

Use case diagram describes the functional model of a system that is the functionality of the user’s point of view. To describe the structure of a system, UML provides structural diagrams.

Class Diagrams

To describe the structure of a system in terms of objects, attributes, operations and relations.

Behavioural Diagrams

To describe the system’s functionality focusing on what happens and the interactions b/w objects.

- Independent of any particular programming language.
- We can start coding object-oriented software based on UML diagrams. If the diagrams are detailed enough, they can be converted to source code.
- We need to figure out what to implement before writing a single line of code. That’s when UML comes in handy.
- Thinking about classes, objects and interactions, we gain the deeper understanding of what should be implemented
- A good design helps us communicate our ideas with other developers effectively

Use UML diagrams as a starting point for discussions and improvements without having to delve into source code.

Use case diagram

Visualise the functional requirements of the system. Use case diagrams show groups of related use cases

Representing Use case

1. Draw an oval in the middle and put the title of the use case in it.
2. Use stick figures to represent the actors
3. The actors name goes below the stick figure.
4. Draw the primary actors on the left side and the secondary ones on the right side
5. Draw lines to represent the interaction b/w an actor and a use case.
6. Visualise our system’s boundaries if it interacts with other systems. For that, we draw a frame around all use cases and actors that belong to a given system
7. Change the visual representation for actor if it’s not a human actor.

Class Diagram

A class is represented on the class diagram as a rectangle with three compartments.

1. List the class’s name
    1. Class name should be a noun in the singular and it needs to be upper camel case.
2. Attributes
    1. Should be concise and they should follow the lower camel case format
3. Operations
    1. Should be lower camel case
    2. Can have arguments and a return type

Example:

Visibility

UML allows us to control who can access the attributes and the methods of our classes.

Levels:

+ public - can be also used by code outside of the object

- private - can only be accessed within the defining class

# protected - accessible from defining and child classes only

~ package - available within its enclosing package.

Rule: Expose only as much as needed and hide everything else.

Use public getters and setters to each of the private attributes. Setters let us check the input argument and getters allow us to modify the value before returning it.

Associations

Example: Trip and Expense classes

To express relationship, we draw a solid line b/w these classes. This line represents an association.

Association tells us that the classes refer to each other.

The one class can be refer to other. But both the classes shouldn’t refer to each other. This makes the system tightly coupled means using one class requires to use other class as well.

Directed associations: by drawing a solid line that ends with an open arrowhead, we show that only one of the classes refers to the other one.

Multiple Associations:

* - A trip can have zero or more expenses.

1 - A trip must have exactly one home currency.

0..1 - A trip may or may not have a single note.

The default multiplicity is one.

We can also display the name of the class property of the given association.

Generalization:

It is to express that one model element is based on another model element.

Example

Single inheritance reduces the complexity and avoids the ambiguity that comes with multiple inheritance.

Dependency

If changes in one of the classes may cause changes to the other.

In UML dependency is represented as a dashed line that ends with an open arrowhead. The arrow points to the dependency. A dependency is a directed relationship.

Association indicated that a class has attributes of the other class’s type, whereas dependency is usually created when the class receives a reference to the other class, for instance, through a member function parameter.

Aggregation

Aggregation represents a part-whole relationship and it’s drawn as a solid line with a hollow diamond. This relationship is considered redundant because it express the same thing as the association.

Composition

Composition is a stronger form of association. It shows that the parts live and die with the whole. Also, composition implies ownership.

When the owning object is destroyed, the contained objects will be destroyed too.

Composition is represented as a filled diamond on the owner’s end connected with a solid line

Realization

Realization indicates that a class implements the behaviour specified by another model element. It is represented as a hollow triangle on the interface and connected with dashed lines to the implementer classes.