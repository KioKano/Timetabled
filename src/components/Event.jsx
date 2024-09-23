/*
  CodePath WEB102 | Intermediate Web Development
  Unit 1
  Project 1

  Name: Timetabled
  Author: Kionna Kanoyton
  Date: 22 Sept. 2024 - Sunday

  Filename: Event.jsx
*/

import React from "react";

const Event = (props) => {
    return (
        <td className={'Event ' + props.color}>
            <h5>{props.event}</h5>
            <h6>{props.location}</h6>
            <h6>{props.duration}</h6>
        </td>
    );
}

export default Event;