/*
  CodePath WEB102 | Intermediate Web Development
  Unit 1
  Project 1

	Name: Timetabled
	Author: Kionna Kanoyton
  Date: 22 Sept. 2024 - Sunday

	Filename: App.jsx
*/

import './App.css'; // imports a CSS file to apply styles to the component
import './components/Calendar'
import Calendar from './components/Calendar';

const App = () => { // arrow function definition for a component named App
  // this function returns a JSX element to create a class name of App
  // the div content is where more logic and elements will be placed
  return (
    <div className="App"> 
      <h1>Itinerary for 7 Days at Chateau Elan</h1>
      <h2>Welcome to Chateau Elan! Let's toast while perusing this event calendar to get to know the vineyard.</h2>
      <Calendar />
    </div>
  )
}

export default App // exports the App component to use in other files