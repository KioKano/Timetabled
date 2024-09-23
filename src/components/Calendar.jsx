/*
  CodePath WEB102 | Intermediate Web Development
  Unit 1
  Project 1

  Name: Timetabled
  Author: Kionna Kanoyton
  Date: 22 Sept. 2024 - Sunday

  Filename: Calendar.jsx
*/

import React from "react";
import Event from './Event'

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='H.I.I.T. 🥊' location='Fitness Center' duration='50 minutes' color='pink' />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <Event event='Barre-ginner 🩰' location='Fitness Center' duration='50 minutes' color='pink' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Serenity Hike 🚶🏾‍♀️' location='Fitness Center' duration='50 minutes' color='pink' />
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <Event event='Stretch 🧘🏾‍♂️' location='Fitness Center' duration='50 minutes' color='pink' />
                        <Event event='Spa Day ♨' location='Fitness Center' duration='180 minutes' color='green' />
                        <Event event='Vinyasa Yoga 💮' location='Fitness Center' duration='50 minutes' color='pink' />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Hatha Yoga 💮' location='Fitness Center' duration='50 minutes' color='pink' />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <Event event='Al Fresco Soirée 🌹' location='Rose Vineyard' duration='180 minutes' color='blue' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Afternoon Tea ☕' location='Versailles Restaurant' duration='60 minutes' color='green' />
                        <Event event='Sweet Samples 🍫' location='Second Level Winery' duration='80 minutes' color='blue' />
                        <td></td>
                        <Event event='Charcuterie 🥓' location='Tasting Room' duration='90 minutes' color='green' />
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <Event event='Grandeur Tour 🍷' location='Winery' duration='90 minutes' color='blue' />
                        <td></td>
                        <Event event='Wine Bungalow 🏕' location='Vineyards' duration='180 minutes' color='blue' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <Event event='Mixology 🥃' location="House of Bourbon" duration='30 minutes' color='blue' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">6 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="S'mores 🔥" location='Poolside Deck' duration='30 minutes' color='green' />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">7 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Stargazing 🔭' location='Outside the winery' duration='60 minutes' color='green' />
                        <td></td>
                        <Event event='Culinary Studio 🍴' location='Culinary Studio' duration='180 minutes' color='green' />
                        <Event event='Cork & Canvas' location='Lobby' duration='120 minutes' color='green' />
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Calendar;