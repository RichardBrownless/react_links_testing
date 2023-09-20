import * as React from 'react';
import { Link } from "react-router-dom";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const addItem = function(link, index, array) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        {index+1 !== array.length && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Link to={`${link.path}`} state={link.state} >{link.label}</Link>
      </TimelineContent>
    </TimelineItem>
  )
} 

export default function BasicTimeline(props) {
  return (
    <Timeline>
      {props.links.map(addItem)}
    </Timeline>
  );
}