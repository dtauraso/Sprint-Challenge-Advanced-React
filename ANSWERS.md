- [ ] Why would you use class component over function components (removing hooks from the question)?

	•Many tutorials and existing company code still use the class components.  How things were done before makes us well rounded developers.
    function hooks don't have their own state

- [ ] Name three lifecycle methods and their purposes.

	• constructor
		○ initialize the local state, and bind event handlers to an instance
	• componend did mount
		○ called right after component is mounted
		○ good place to setup side effects
		○ initializer for external things, like network requests
	• component did update
		○ called right after updating
    good time to operate on the dom and also to do network requsts as long as the current props are compared to the previous props
    
- [ ] What is the purpose of a custom hook?

	• you want to share code across components doing the same thing, like saving to local storage, toggling dark mode, or filling out a form

- [ ] Why is it important to test our apps?

	• we want to test use cases to make sure our app works for the client
    bugs are easier to catch the sooner we test