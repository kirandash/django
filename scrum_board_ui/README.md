# Scrum Board UI
This is the React codebase for the Scrum Board Project with Django backend.

## 5. Adding a React Frontend
### 5.1 React project setup
1. **create-react-app** Create react app is a tool that helps us create a react app quickly so that we don't have to setup the project from scratch. Run the command: `npx create-react-app scrum_board_ui`

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

