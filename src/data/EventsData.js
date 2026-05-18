import courseImg from "../assets/Events/Course.jpeg";
import betamamImg from "../assets/Events/betamam.jpeg";
import mwImg from "../assets/Events/mw.png";
import beinciImg from "../assets/Events/beinci.jpg";
import ebecImg from "../assets/Events/betamam.jpeg";

import courseLogo from "../assets/Events/Logos/BEST Courses Logo.png";
import ebecLogo from "../assets/Events/Logos/Ebec.svg";

export const eventsData = [
    {
        id: 1,
        titleKey: "events.title1",
        date: "Her Yıl",
        descKey: "events.desc1",
        image: betamamImg
    },
    {
        id: 2,
        titleKey: "events.title2",
        date: "Her Yıl",
        descKey: "events.desc2",
        image: mwImg
    },
    {
        id: 3,
        titleKey: "events.title3",
        date: "Her Yıl",
        descKey: "events.desc3",
        image: beinciImg
    },
    {
        id: 4,
        titleKey: "events.title4",
        date: "Yıl Boyu",
        descKey: "events.desc4",
        image: courseImg,
        logo: courseLogo
    },
    {
        id: 5,
        titleKey: "events.title5",
        date: "Her Yıl",
        descKey: "events.desc5",
        image: ebecImg,
        logo: ebecLogo
    }
];
