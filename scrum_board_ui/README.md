# Scrum Board UI
This is the React codebase for the Scrum Board Project with Django backend.

## 5. Adding a React Frontend
### 5.1 React project setup
1. **create-react-app** Create react app is a tool that helps us create a react app quickly so that we don't have to setup the project from scratch. Run the command: `npx create-react-app scrum_board_ui`. Note: We don't need the venv that we were using during django. Because all the packages we install in react will be installed at project level only. venv can be deactivated by running: `deactivate`. (scrum_board_env) prompt will now disappear from terminal.

### 5.2 Understanding Project structure
1. The project created by create-react-app has 2 main folders
    - **public**: to hold publicly accessible resources of our app
    - **src**: will hold actual react code
2. **public folder - public/index.html**:
    - index html file is present inside public folder. This file is going to be sent to the client when react app loads.
    - **div with id root**: index.html file has a div with id `root` which is the target where our react app is going to load.
    - There is a **noscript** tag which will execute if JS is disabled for client browser. So if client's browser has JS disabled, client will get the message written in noscript tag.
3. **src folder**:
    - **index.js**: Code in this will help us insert our React App into index.html file with `ReactDOM.render()`. ReactDOM is an extension of React that helps us with rendering react components on to DOM.
    - **index.css**: Holds global css for our app. All styles written here will be applied to all the components in our App.
    - **App.js**: Holds JS code for our root React component
    - **App.css**: Holds CSS code for our root React component
4. **package.json**:
    - Holds details of all the packages that are used so far.
    - Also holds the scripts for starting dev server, creating a build and testing our app.
5. Run the command `cd scrum_board_ui` & `npm run start` to run the project on localhost:3000
6. Change app title to Scrum Board in index.html file.

## 6. Building the App View by Creating Components
### 6.1 Our Components Architecture:
1. A component contains the code to display view of our React application. We can put all the code in one file. But for better modularity and scalability: we will divide it into two files.
2. We will divide our component in 2 files: **UI and Containers**
3. **UI components** are pure react components. These components communicate solely through properties. Pass data to parent through 2 way binding and receive props as well.
4. **Container Components**: These components are wrappers. They wrap around the UI components and feed data to it.
5. We will feed our redux data at the container/wrapper level which can then be feeded to the UI level.
6. So all the files in our ui folder will be free of redux code and is reusable. Thus helps with scalability of the application.

### 6.2 Create ScrumList component - container and ui components
1. This component will hold all the lists in our application.
2. Create src/assets/data/sample_data.js to hold sample list and card data.
3. Create src/components/containers/ScrumList.js to hold the wrapper. Import the sample data in wrapper.
4. Create src/components/ui/ScrumList.js to hold the view. Pass the sample data to UI view through wrapper.
5. Add ScrumListContainer wrapper to App.js. Delete all CSS from App.css

### 6.3 Create ScrumCard Component - container and ui components
1. This component will hold all the cards in our application.
2. Create src/components/containers/ScrumCard.js to hold the wrapper.
3. Create src/components/ui/ScrumCard.js to hold the view.
4. Add ScrumCardContainer wrapper to ScrumList.js.

**Difference b/w import {something} and import something from something.js**: 
    - If the item is exported as default, we don't need to destructure during import. It can be directly imported. Ex: `import ScrumCard from '../ui/ScrumCard';`
    - If the item is exported as const from a file. We have to destructure during import. Ex: import { lists } from `'../../assets/data/sample_data';`

## 7. Managing State of our App with Redux
### 7.1 Why do we need Redux?
1. Let's have a look at ways to manage state:
    - **A single state**: Creating state for root component and using that for all child components following a prop chain. **Cons**: Not suitable for large applications. As lots of props get attached to root state. And we will have to deal with **props drilling**. For example: App ---> Page ---> Section ---> List ---> ListItem. Ugly and difficult to troubleshoot. Prone to errors if we break the prop chain by mistake.
    - **Components managing their own state**: Creating state for each component. Pros: No Props drilling. **Cons**: Difficult to share data between two components.
    - **Global State Management**: A single centralized state, With all child components having unlimited access to it. **Pros**: No Props drilling. Easy to share state data b/w components. **Cons**: No rules/organizations on how to create state and use it. Thus leads to inconsistency b/w developers. And hard to recreate bugs for troubleshooting. Thus, unrestricted global state is not an ideal choice.
    - **Redux** solves this problem by adding rules/orgnaizations to global state management.

### 7.2 Understanding Redux
1. Redux helps managing state or data in our application.
2. Redux consists of 3 things: A Redux Store, Redux Actions and Reducers.
    - **Redux Store**: JSON object that contains current state of our app. Redux Works on global state management concept. It has one centralized state where all our data is available and the centralized state is called **Store**. **The redux store** is basically a JSON object that can hold any type of data we want. Ex: In our application, the store will hold all the countries data.
    - **Redux actions**: It defines different actions that can occur in our app. Ex: `ADD_CARD_BUTTON_CLICKED`. A Redux action is a JSON object consisting of two things: type of the action and payload. 
    - **Reducers**: This defines what changes to do with Redux Store when a Redux action occurs. Ex: When `ADD_CARD_BUTTON_CLICKED` action occurs, we take all the data in payload and store it in countries property in our redux store.
3. How redux helps react with state/data management?
    - We can also manage state or data without React but the main problem is there are no standard sets of rules to follow. So, if you are building a large application with a team, not having a set of standards will create more bugs in your project. Redux solves this problem by adding some extra set of standards or rules that each developer can follow.

### 7.3 Adding redux and react-redux to our React App
1. We will need two packages for implementing Redux in our Application. 
    - redux to handle redux realated tasks and 
    - react-redux to integrate redux with react
    - Install using npm: `cd scrum_board_ui` & `npm install redux react-redux`
2. Create src/store/store.js: This file will hold logic for our redux store.
    - Create root store by combining all reducers
3. In index.js: wrap `App`with `Provider`. Provider provides our centralized Redux store to a react component. Ex: `<Provider store={configureStore()}><App/></Provider>`

### 7.4 Creating Redux Actions for Create Card and Remove Card
1. Add code for adding Card and removing card to ScrumList.js view, ScrumCard.js view.
2. Create src/actions/card.js file. This will hold all the actions related to cards in our app.
3. Create Action type constant and Action creator function for CREATE_CARD and REMOVE_CARD actions.

### 7.5 Creating Reducers and Connecting it to root store
1. A reducer is basically a fn to perform some tasks when an action is dispatched.
2. Create src/reducers/lists.js file.
3. Reducer takes 2 args: initial state, action triggered
4. After lists reducers is created in reducers.ts file. Import it and add it to the list of reducers in store.js file

### 3.6 useState hook to Store card title
1. Add useState hook to ScrumList.js ui component