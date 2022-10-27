---
title: Solid Principles with React
tags: [solid, react, javascript, best-practices]
---

# SOLID principles in React

*SOLID* is an acronym for the first five object-oriented design (OOD) principles by Robert C. Martin (also known as [Uncle Bob](http://en.wikipedia.org/wiki/Robert_Cecil_Martin)).

**The SOLID principles are a set of software design principles that teach us how we can structure our functions and classes to be as robust, maintainable and flexible as possible.**

### The problem:

Early days of my career I used to write code that solves the problem fast and never cared about code extensibility and reusability or any design problems.

I felt like winning at the start but when the codebase grew it becomes a mess. Whenever the user wants a new change to the existing features. It was a nightmare to implement it and push it to production. 

The problem never ends there and I was introducing new bugs by making new changes. The struggle was real. 

I was doing alterations instead of solving the problem for real.

And then I realised there is a problem which needs to be fixed. Then I did lots of research about how to write clean code. 

If you ever face the above problems you're not alone. But we're going to sort this out. 

### Solution:

The fundamentals of writing good code are following how other people write code without making the codebase a mess. 

Uncle Bob is an experienced person and faced all the problems we faced in his days. And he defined principles to write good code. The SOLID principles are one of them. 

### SOLID stands for:

- **[S** - Single-responsibility Principle]
- **[O** - Open-closed Principle]
- **[L** - Liskov Substitution Principle]
- **[I** - Interface Segregation Principle]
- **[D** - Dependency Inversion Principle]

### If you follow SOLID principles, you can:

1. Write testable code
2. Easily extend the old code and implement new features. 
3. Make fewer bugs
4. Understand the code you wrote a few years ago. 

## **Single-Responsibility Principle**

<aside>
💡 A class should have one and only one reason to change, meaning that a class should have only one task to do.
</aside>

![Untitled](/images/good-design-bad-design-srp.png)

Let's try to understand this with the Twitter feed. 

```jsx
const Home = () => {
	const [posts, setPosts] = useState([]);
	
	useEffect(() => {
		fetch('/api/posts').then(data => setPosts(data))
	}, []);

	return (
		<div className="home">
			<div className="top-bar">
				Header....
			</div>
			<div className="feed">
				{posts.map(post => (
					<div>
						{post.title}
					</div>
				))}
			</div>
			<div className="footer">
				Footer
			</div>
		</div>
	)
}
```

Here is the Twitter home page and we added header, posts and the footer.  

And we violated the first principle of SOLID.

### What?

As per the single responsibility principle, the class/module should do only one task. But in our case, it's doing multiple tasks. 

Fetching the posts, header, footer data. Rendering the header, post, footer. 

### Let's refactor

The solution

```jsx
// Extracted the Header component from Home
const Header = ({title, description}) => {
	return (
		<div>
			{title}
			{description}
		</div>
	)
}

// Extracted the Post component from Home
const Post = ({title, profile}) => {
	return (
		
	)
}

// Made custom hook to fetch the posts
const usePosts = () => {
	const [posts, setPosts] = useState([]);
	
	useEffect(() => {
		fetch('/api/posts').then(data => setPosts(data))
	}, []);
	return posts;
}

// To render the post lists
const PostsList = () => {
		const posts = usePosts();
}

const Feed = () => {
	return (
		<>
			<Header />
			<PostList />
		</>
	)

}
```

I reduced LOC for the sake of simplicity. 

As you see the code is already improved a lot and is well readable and extensible. 

## **Open-Closed Principle**

<aside>
💡 Objects or entities should be open for extension but closed for modification.

</aside>

![Untitled](/images/good-design-bad-design-ocp.png)

This means that a class/module should be extendable without modifying the class itself.

Software systems are designed to allow the behaviour of those systems to be changed by adding new code, rather than changing existing code.

Let's take a look at the [react-popper](https://popper.js.org/react-popper/) library.  React Popper is a react wrapper over popperjs library. And it is extensively used for positioning the elements. 

usePopper helps to position the element based on the virtual reference/bounding position

```jsx
const [popperElement, setPopperElement] = React.useState(null);
const { styles, attributes } = usePopper(virtualReference, popperElement);
return (
    <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
      Tooltip
    </div>
);
```

The above code will position the tooltip something like below. 

![Untitled](/images/tooltip-example-solid.png)

Now the problem is the element will stick just like this. Even if you scroll the element will not move above or below since it's a virtual reference we have to take care of the scrolling events. And we need to let the element move with the document while scrolling.  

### Let's do it

```jsx
const usePopperPosition = ({popperElement, popperContainer}) => {
	const { styles, attributes } = usePopper(virtualReference, popperElement);
	
	const updatePosition = useCallback((): any => {
    if (isHidden) return;
    if (!popperElement) return;

    virtualReference.getBoundingClientRect = getBoundingClientRect;
    update?.();
  }, [getBoundingClientRect, popperElement, update]);

  useEffect(() => {
    updatePosition();
  }, [updatePosition]);

  useEffect(() => {
    popperContainer?.addEventListener('scroll', updatePosition);
    return () => popperContainer?.removeEventListener('scroll', updatePosition);
  }, [updatePosition, popperContainer]);

  return { ...popperResult, update: updatePosition, styles };
}
```

I know the code is very confusing. Let's not dig deeper inside the code for now. 

But we extended the usePopper method and created a new hook to add new functionality. 

Yaayy we implemented a new feature without violating the Open-closed principle. 

## **Liskov Substitution Principle**

<aside>
💡 Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.
</aside>

![Untitled](/images/solid-liskov-example.png)

The above image is just for understanding the Liskov principle LOL. 

This means that every subclass or derived class should be substitutable for their base or parent class.

Liskov is probably the most difficult principle to understand. But not anymore.

Let's start by implementing Liskov with the classes.

```jsx
class Bird {
	fly() {
		console.log('I can fly');
	}
}

class Duck extends Bird {
	quack() {
		console.log('I can quack');
	}
}

class Penguin extends Bird {
	// Here we violating the Liskow principle by affecting the parent class method.
	fly() {
		throw new Error('I can\'t fly');
	}

	swim() {
		console.log('I can swim');
	}
}

function makeBirdFly(bird) {
	bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();

makeBirdFly(duck);
makeBirdFly(penguin);
```

In the Penguin class, we extended the Bird class and modified the fly behaviour and added swim behaviour since the Penguin cannot fly only can swim.

### Fixing the problem

```jsx
class FlyingBird {
	fly() {
		console.log('I can fly');
	}
}

class SwimmingBird {
	swim() {
		console.log('I can swim');
	}
}

class Duck extends FlyingBird {
	quack() {
		console.log('I can quack');
	}
}

class Penguin extends SwimmingBird {

}

function makeBirdFly(bird) {
	bird.fly();
}

function makeBirdSwim(bird) {
	bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeBirdFly(duck);
makeBirdSwim(penguin);
```

We're now fixed the problem by separating the classes. And now we can use Penguin class for the replacement of SwimmingBird class as per the Liskov principle. 

### React Example

We can follow Liskow while using interfaces in React

```jsx
interface SubmitButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color: string;
}

const SubmitButton = ({ color, ...buttonProps }: SubmitButtonProps) => {
  return <button style={{backgroundColor: color}} {...buttonProps} />
}
```

We implemented SubmitButton by inheriting the button element without violating the Liskov.

## **Interface Segregation Principle**

A client should never be forced to implement an interface that it doesn’t use. So that the **larger interfaces should be split into smaller ones. By doing so, we can ensure that implementing classes only need to be concerned about the methods that are of interest to them.**

We can follow the interface Segregation while typing the component props. 

Example:

We're going to design the table selection behaviour from notion.

![Untitled](/images/solid-interface-segreg-example.png)

Bad design

```jsx
// Table selection range from topLeft to bottomRight
// with the current selected cell and the cursorCell(if you navigate through the keyboard)
export interface Range {
  topLeft: Position;
  bottomRight: Position;
	startCell: Position | null;
  cursorCell: Position | null;
}

// We coupled everything into single interface
// In case you only want the range(topLeft, bottomRight) you have to extend
// startCell and cursorCell
```

Good design

```jsx
export interface Range {
  topLeft: Position;
  bottomRight: Position;
}

export interface SelectedPosition {
  startCell: Position | null;
  cursorCell: Position | null;
}

export interface SelectedRange extends Range, SelectedPosition {}

// We segregated everything now it's easy to use the interfaces as per we need
// without any overhead.
```

**Dependency Inversion Principle**

<aside>
💡 Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but should depend on abstractions.

</aside>

*This principle states that we should depend upon abstractions, not concretions.*

Example

```jsx

// Posts component is tightly coupled
const Posts = () => {
	...
	async fetchPosts() {
    const posts = await fetch('http://api.innofied.com/posts');
    this.setState({posts});
  }
	...
	return (
		<div>
			{posts.map()}
		</div>
	)
}
```

```jsx
// The posts component is now closely coupled and depend on absraction
const Posts = ({fetchPosts}) => {
	...
	return (
		<div>
			{posts.map()}
		</div>
	)
}
```

Conclusion:

That's it for this article. It's not necessary to follow the SOLID strictly while developing React applications. But you can consider it as one of the principles/best practices to make the code cleaner.