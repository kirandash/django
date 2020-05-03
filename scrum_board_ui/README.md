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

### 7.6 useState hook to Store card title
1. Add useState hook to ScrumList.js ui component

### 7.7 Connecting ScrumList Container Component to the Store with connect from react-redux
1. Add connect to ScrumList container.
2. map lists form state to componenet prop.
3. map create card action to component prop.

### 7.8 Create AddListForm Component to add new lists to the app
1. Create components/ui/AddListForm ui component
2. Create components/container/AddListForm container component
3. Add AddListForm container to App.js

### 7.9 Implementing Redux for AddListForm Component
1. Create actions/list.js file to handle all actions related to lists. Ex: CREATE_LIST, REMOVE_LIST
2. Add code for CREATE_LIST and REMOVE_LIST actions in lists reducer: reducers/lists.js file.
3. Add useState hook to AddListForm.js ui component
4. Connect AddListForm container component to createList and removeList action creators.
5. Send data from AddListForm ui component to parent container component.

### 7.10 Implementing RemoveList using id
1. Send onclick event from ScrumList.js ui component
2. Dispatch removeList action from ScrumList.js container component
3. modify list.js acitons file to remove list using id instead of name
4. modify lists reducer to remove list using id instead of name. Also returning state without mutation.
5. Note: we are currently using loop index as listing id. Later we can use listing id property from database.

### 7.11 Implementing RemoveCard using id
1. Send onclick event from ScrumCard.js ui component
2. Dispatch removeCard action from ScrumCard.js container component
3. Modify card.js action file to remove card using id instead of title
4. modify lists reducer to remove card using id instead of title. Also returning state without mutation.

### 7.12 Validation to Avoid Duplicate List and Card
1. While creating list and card, do the following checks:
    - Null check
    - is duplicate check
2. Also clear out the input fields after adding new item. So user can enter new data.

### 7.13 Create AddCardForm component
1. Add Card input inside lists.map was having a bug i.e. setState was getting common for all the inputs, since they all had a common scope. We must separate the scope for input fields by creating a new component.
2. Create AddCardForm.js ui component
3. Create AddCardForm.js container component

## 7.14 Redux DevTools
1. To monitor states from chrome dev tools.
2. Add Redux DevTools extension to chrome : https://chrome.google.com/webstore/detail/redux-devtools
3. Add __REDUX_DEVTOOLS_EXTENSION__ to store.js createStore fn. It should highlight the redux devtools extension once our app is loaded.
4. Run app with `npm run start`
5. Go to http://localhost:3000/ and on performing some action: it will show the list of actions. The difference it makes to state and new state after the action, all in the Redux devtools extension.

## 8 Handling API/Asynchronous Calls with Thunks or Redux Thunks
### 8.1 Why Do We need Redux-Thunk?
1. With Redux now our components size are really small as most of the state management code is moved out of component to store.js, actions.js and reducers.js file.
2. Still in our current code: component has to contain code for asnyc/API calls.
3. We can handle API calls in React component. But since our goal is to create a scalable application, we will handover the responsibility of making API calls to Thunks which has better sets of standards for managing API calls.
4. Thus we have used Redux for State Management, Components for creating Views and now we will use Redux Thunks for handling API calls.
5. Alternate Libraries to Redux Thunk for managing API calls: Redux Saga, Redux Logic etc.
6. Redux saga is more popular.
7. But Redux Thunk is simpler and easy to learn. And It does a pretty good job. I use it in most of my projects.

### 8.2 Understanding Redux Thunk Flow
1. UI Triggers Action ---> Redux Thunk is executed to make Async/API calls ---> State is Updated ---> Component See updated State.

### 8.3 Adding Redux Thunk to React
1. Run `cd scrum_board_ui` & `npm install redux-thunk redux-devtools-extension @babel/runtime`
    - **redux-thunk** is the main thunk library to be used in our app
    - **redux-devtools-extension** is used for adding redux-thunk to our devtools middleware.
    - **@babel/runtime**: is used so that async thunks can work in our app
2. `npm install --save-dev @babel/plugin-transform-runtime`
    - Dev version of @babel/runtime: used for async thunks to work in our app
3. Add thunk to store.js file
4. thunk is used with applyMiddleware from redux.
5. The result is passed through composeWithDevTools for dev tools support
6. After adding Thunks throw applyMiddleware, test on chrome if every thing working as before - action dispatch in dev tool.

### 8.4 Async thunks - for loadLists API from Django Server
1. Create actions for in progress, success and failure state in actions.js file.
2. Create thunk `loadLists` in thunks/list.js file.
3. API URL to be called in loadLists thunk: `http://127.0.0.1:8000/mainboard/lists`.

### 8.5 Calling loadLists thunk in ScrumListContainer.js with The Effect hook
1. Call loadLists thunk in ScrumListContainer.js file when component is loaded using effect hook.
2. The Effect Hook lets you perform side effects in function components.
3. useEffect in functional component is Similar to componentDidMount and componentDidUpdate in class component.
4. Note: Now the API call will be unsuccessful because we are not authenticated to call the Django APIs from external React server. Solution: 
    - 1. React in its own "frontend" Django app: load a single HTML template and let React manage the frontend (difficulty: medium). We will go for this.
    - 2. Django REST as a standalone API + React as a standalone SPA (difficulty: hard, it involves JWT for authentication)
    - 3. Mix and match: mini React apps inside Django templates (difficulty: simple, but not so maintainable in the long run)
5. Check loadLists again after integrating React into Django.

