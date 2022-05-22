import React from "react";
import sp1img1 from '../assets/images/amenities/amenities_4.jpg';
import sp1img2 from '../assets/images/amenities/amenities_5.jpg';
import sp1img3 from '../assets/images/amenities/amenities_6.jpg';
import sp1img4 from '../assets/images/amenities/amenities_7.jpg';
import sp1img5 from '../assets/images/amenities/amenities_8.jpg';
import sp1img6 from '../assets/images/amenities/amenities_9.jpg';
import nbImg1 from '../assets/images/neighborhood/neighborhood_3.jpg';
import nbImg2 from '../assets/images/neighborhood/neighborhood_4.jpg';
import nbIcon1 from '../assets/images/neighborhood/neighborhood_icon_1.svg';

export const spacesData = {
  spaces1: {
    img1Src: sp1img1,
    img1Top: '15%',
    img1Width: '77%',
    img2Src: sp1img2,
    img2Top: '58%',
    img2Width: '84%',
    imgsWidth: '50%',
    copiesWidth: '45%',
    subHeading: '',
    heading1: (<>Stunning spaces open <br/> onto lush courtyards for <br/> events or socializing,</>),
    heading2: (<>the new go-to spot for indoor <br/> or outdoor.</>),
    copy: (<>Maple Terrace perfects the transition <br/> between cool interiors and open air <br/> with a cocktail lounge patio off the <br/> spacious enclosed bar, a glass living <br/> room covered in greenery, and an <br/> outdoor lounge under a canopy of trees <br/> and lanterns.</>),
    reversed: false,
  },
  spaces2: {
    img1Src: sp1img3,
    img1Top: '15%',
    img1Width: '61.5%',
    img2Src: sp1img4,
    img2Top: '60%',
    img2Width: '53.5%',
    imgsWidth: '45.7%',
    copiesWidth: '51%',
    subHeading: 'MAPLE & ASH: RESTAURANT CONCEPTS',
    heading1: (<>The Maple & Ash experience <br/> can serve many moods when</>),
    heading2: 'you want to go somewhere special.',
    copy: (<>Whether celebrating your most momentous <br/> achievements or just catching up with friends, dining <br/> at The Maple & Ash can accommodate all tastes in a <br/> variety of settings.</>),
    reversed: true,
  },
  spaces3: {
    img1Src: sp1img5,
    img1Top: '10%',
    img1Width: '67%',
    img2Src: sp1img6,
    img2Top: '60%',
    img2Width: '50%',
    imgsWidth: '55%',
    copiesWidth: '45%',
    subHeading: 'MAPLE & ASH: BAR CONCEPTS',
    heading1: (<>A private cocktail lounge <br/> for your clients,</>),
    heading2: 'a Special Retreat.',
    copy: (<>Your business can have its own private club in this <br/> penthouse bar with both indoor and outdoor seating. <br/> Perfect for events and meetings with a dash of privacy.</>),
    reversed: false
  },
  neighborhood1: {
    nbIcon: nbIcon1,
    img1Src: nbImg1,
    img1Top: '55%',
    img1Width: '39.8%',
    img2Src: nbImg2,
    img2Top: '30%',
    img2Width: '68.5%',
    imgsWidth: '65%',
    copiesWidth: '45%',
    subHeading: '',
    heading1: (<>MAPLE TERRACE WALK SCORE</>),
    heading2: (<>Maple & Wolf Intersection</>),
    copy: (<></>),
    reversed: true,
    smallHeadings: true,
  },
};
