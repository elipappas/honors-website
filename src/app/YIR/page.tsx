"use client";

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function YIR() {
    const [isFirstCollapsed, setIsFirstCollapsed] = useState(false);
    const [isSecondCollapsed, setIsSecondCollapsed] = useState(false);
    const [isThirdCollapsed, setIsThirdCollapsed] = useState(false);

    return (
        <div className="m-auto w-full flow-root  bg-opacity-50 bg-gray-700 p-4">
            <button onClick={() => setIsFirstCollapsed(!isFirstCollapsed)} className="font-extrabold">
            <h1 className="font-extrabold w-full flex items-center bg-white bg-opacity-10 text-xl"> 2021-2022 <span className='ml-2'>{isFirstCollapsed ? <FaChevronUp /> : <FaChevronDown />}</span></h1>
            </button>
            {!isFirstCollapsed && (
            <p className="font-normal">
                This year was a long and interesting one. Coming into college has been one of the most different and diffucult things I have done. 
                It required a lot of introspection and self thought, it forced me to look at who I am and who I want to be, whether it is professionally 
                or personally. Not everything went to plan, changing majors after one semester and trying to figure out new goals and expectations for myself 
                caused a lot of thought and change. But with this change some of my classes and service gave me the opportunity to set my sights on an important 
                social issue, animal rights. Animals have always been something extremely important to me. I have always grown up having dogs and in highschool, 
                I began volunteering at a non-profit animal shelter by helping to socialize cats. This was what started my passion for this topic. In my second semester 
                of this year, I began taking intermediate comp and in my class section we were required to work on a service project as well as write one of our essays on 
                a social issue important to us. I decided to up my passion for animals and did both of these on animal rights and continued to volunteer at the animal shelter 
                for my project. I began researching for the paper and expanded my knowledge on the topic which only made me want to volunteer even more to make sure that all 
                animals find a home that cares about them. This issue can&apos;t be solved easily or quickly by any one person, but I plan to continue this passion by continuing 
                my service and research and I plan to weigh my voting and political choiced around this topic too, because there needs to be legal change for anything to happen 
                around this topic. Animal abuse is way to prevalent in the US especially and there needs to be serious change. Even organizations like PETA have made headlines 
                for acts like euthanizing over 90% of the animals that they received in one year. Or the fact that most violent criminals also have a high rate of animal abuse. 
                Many people see animals as expendable and as objects that are there only for them, but when adopting animals, it is not just for yourself, but for the animal too. 
                This topic is something near and dear to me and I hopefully should be able to continue advocating for it until some serious change happens.
            </p>)}
            <br></br>
            <br></br>
            <button onClick={() => setIsSecondCollapsed(!isSecondCollapsed)} className="font-extrabold">
            <h1 className="font-extrabold w-full flex items-center bg-white bg-opacity-10 text-xl"> 2022-2023 <span className='ml-2'>{isSecondCollapsed ? <FaChevronUp /> : <FaChevronDown />}</span></h1>
            </button>
            {!isSecondCollapsed && (
            <p className="font-normal">
                These semesters have been a great introduction to what my major and my career are all about. Having my first real semester in computer science followed 
                by my first co-op have really set the tone for the years to come at UC. This year has forced me to grow in a way in which I haven&apos;t needed to before. 
                I have had to adapt to new situations and overcome new and different problems in my life. This year I began volunteering at the Boys and Girls Club of America 
                which has broadened my scope of service significantly. This experience has been a great one and was a weekly change of pace from being in classes or work. 
                Classes really picked up in the fall as I finally started to get into the computer science specific courses. I have had to study and do homework more than I&apos;ve 
                ever had to in the past which has been an adjustment, but a good one. Even though there is more work, my classes have been more interesting and enjoyable because I 
                am actaully able to see where they may be applied in the future and I have even been able to apply them already through my co-op position at Siemens. Work life has 
                by far been the biggest change for me this year, having never worked a 40 hour week before. For my first few weeks I hadn&apos;t managed to get down t he work-life 
                balance needed. I would wake up, go to work, come home, go to the gym, sleep and repeat, leaving no room for personal liife. After adjusting I have been able to fit 
                in more time for myself and get more out of my days even if I&apos;m working for 8 hours. I have grown fond of my schedule and Siemens has been a great place to work, 
                with flexible hours, the ability to work remote, and other co-ops who I have gotten to know. Another big change is right around the corner as I head into classes this 
                summer. Luckily my schedule is very open, so I will be able to have plenty of time to do what I enjoy like golf, work out, meet with friends, or whatever else I may 
                want to do. Finally, over the fall I completed my first honors experience, my self guided Swift Learning Experience which was a chance for me to learn how to teach 
                myself to code rather than need a class. This was very helpful and I hope to use other experiences to broaden my scope similarly.
            </p>)}
            <br></br>
            <br></br>
            <button onClick={() => setIsThirdCollapsed(!isThirdCollapsed)} className="font-extrabold">
            <h1 className="font-extrabold w-full flex items-center bg-white bg-opacity-10 text-xl"> 2023-2024 <span className='ml-2'>{isThirdCollapsed ? <FaChevronUp /> : <FaChevronDown />}</span></h1>
            </button>
            {!isThirdCollapsed && (
            <p className="font-normal">
                This year I have had the most personal growth of any throughout college so far. In past years I have been strung along, trying to hang on to some sense of 
                what my normal used to be, constantly trying to adapt to and struggle through new progressions in my life, whether it be Freshman years coming in fresh to college, 
                or last year where I had my first ever co-op rotation. I have never been someone who will go out of their way to change and these new experiences have spurred me to 
                do so. With that being said, the biggest growth for me has occurred this year when I have finally settled in to this new lifestyle and really found my own way through my 
                ever changing responsibilities and work. I think that being thrown into the fire the last two years really helped to gain some sort of adaptability and the ability to overcome 
                my anxiety which can come from changes. This obviously is really important as my life is hopefully never going to be a stagnant flow and I really am hoping to find even more new 
                experiences and I would hate to be held back by anxiety of change or the need to have a set routine day in day out. I&apos;ve been able to gain some structure with the gym, where I am 
                6 days a week, but outside of that I have been trying to get new experiences, whether it be concerts or switching roles at the company I work at. I have finally come to the realization 
                that this is what the college experience is for and I have been trying my best to go out and experience new things. I plan to continue this heading into my fourth year as my classes begin 
                to get more challenging especially with my MBA program on top of it. I also have been required to step up my game at work where I am trying to get more involved in what would be considered 
                “full timer” work and hopefully land a full time job at Siemens when I graduate. On top of all of that, I am trying my best to learn even more outside of work and the classroom and expand 
                my skill-set broad enough that I can have other job options which differ significantly in the experience category that my co-op rotations, which has been a tough juggling act. I luckily 
                have found some friends in my classes and work that I can use to hold me accountable and raise the bar for my goals as well as be a resource that I can use for what to learn and where to learn it from.
            </p>)}
        </div>
    )
}