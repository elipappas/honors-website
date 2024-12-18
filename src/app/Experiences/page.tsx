"use client";

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
export default function HonorsExperience() {
  const [isSwiftCollapsed, setIsSwiftCollapsed] = useState(false);
  const [isMusicCollapsed, setIsMusicCollapsed] = useState(false);
  const [isWebsiteCollapsed, setIsWebsiteCollapsed] = useState(false);

  return (
    <div className="m-auto w-full flow-root bg-opacity-50 bg-gray-700 p-4">
      {/* First Section */}
      <div>
        <button
          onClick={() => setIsSwiftCollapsed(!isSwiftCollapsed)}
          className="font-extrabold text-xl"
        >
          <h1 className='w-full flex items-center bg-white bg-opacity-10'> Swift Learning Experience <span className='ml-2'>{isSwiftCollapsed ? <FaChevronUp /> : <FaChevronDown />}</span></h1>
        </button>
        {!isSwiftCollapsed && (
          <div>
            <p className="font-normal">
              For this experience I spent time learning how to program in the language Swift. Swift is a programming language which was created by Apple and is used
              for programming all of their devices. My experience consisted of me reading through tutorials and watching videos which I collected and compiled into
              a swift file which has common applications of different ideas to help me if I ever forget the syntax of code or need to see how I would go about
              creating a new function in my code. This experience has been very impactful on me, I have applied this idea that I have done here and used it for multiple
              other programming languages such as C++ which I already have experience in, but the cheat sheet like file has been extremely helpful, and more recently I
              have also learned Java for my upcoming co-op where that will be my primary language I am using. This experience has also allowed me to test the waters of
              self-learning, especially in computer science. Up until now, most of my programming experience had come from the classroom, but by participating in this
              self-designed honors experience I have gotten to go out of my comfort zone and learn in a new way which I will need to continue to use even once I graduate.
            </p>
            <br />
            <div className="text-center">
              <img src="/Picture1.webp" className="h-96 inline w-1/3" />
              <img src="/Picture2.webp" className="h-96 inline w-1/3" />
              <img src="/Picture3.webp" className="h-96 inline w-1/3" />
            </div>
          </div>
        )}
      </div>

      {/* Divider */}
      <br />

      {/* Second Section */}
      <div>
        <button
          onClick={() => setIsMusicCollapsed(!isMusicCollapsed)}
          className="font-extrabold text-xl"
        >
            <h1 className='w-full flex items-center bg-white bg-opacity-10'> Musical Instrument Experience <span className='ml-2'>{isMusicCollapsed ? <FaChevronUp /> : <FaChevronDown />}</span></h1>
        </button>
        {!isMusicCollapsed && (
          <div>
            <p className="font-normal">
              For this experience I started to learn how to play the guitar and I also worked on the piano which I already knew how to play. Most of the time for my
              experience was spent on learning the basics of how to play the guitar, starting with simply hitting different notes and then moving onto chords and chord
              progressions. After getting the basics, I began learning short snippets of songs, like the intro to Hotel California in the video below. For the piano, I
              started to learn a new song and tried to get as far in as I could in the little time in which I had access to a piano. I started by brushing up on some songs
              I already knew, but I then moved on to learning Moonlight Sonata&apos;s first movement which I also have a video of below. This experience was very beneficial to me,
              allowing me to find a good activity for my free time outside of computers and technology. It has also helped me to work on some of my bad tendencies and soft
              skills by getting more experience learning new skills and getting a deeper level understanding of a topic.
            </p>
            <br />
            <div className="text-left">
              <video controls className="h-96 inline pr-2 w-1/2">
                <source src="/IMG_0072.mp4" type="video/mp4" />
              </video>
              <video controls className="h-96 inline pl-2 w-1/2">
                <source src="/IMG_0147.mov" type="video/mp4" />
              </video>
            </div>
          </div>
        )}
      </div>

      {/* Divider */}
      <br />

      {/* Third Section */}
      <div>
        <button
            onClick={() => setIsWebsiteCollapsed(!isWebsiteCollapsed)}
            className="font-extrabold text-xl"
          >
              <h1 className='w-full flex items-center bg-white bg-opacity-10'> Honors Website Experience <span className='ml-2'>{isMusicCollapsed ? <FaChevronUp /> : <FaChevronDown />}</span></h1>
          </button>
          {!isWebsiteCollapsed && (
          <div>
            <p className="font-normal">
              This experience was an extension of a requirement to have and maintain an honors website, however I decided to put my own twist on it.
              Being a computer science student I decided to create my own website from scratch using HTML, CSS, and JavaScript. I started out by creating
              a simple website that didn&apos;t have much to it, but I iteratively added more and more styling and features such as drop downs, links, advancement
              various other small improvements. I really enjoyed this experience as through classes I haven&apos;t gotten many chances to work on front end development
              and I was able to get really creative with how I wanted to design this. I also was able to find some good resources to learn and add some new programming languages
              to my resume. I also think that this was a great way to dip into web design and I plan to continue working on this website as well as a resume website which I will 
              use to keep my resume up to date and to show off my skills to potential employers. This has allowed me to get a good change to learn some new languages as well as 
              to work on my design skills which I think will be very beneficial to me in the future. I really enjoyed this opportunity and I am glad that I was able to work on something
              creative as opposed to what I usually work on and I overall enjoyed this experience.
            </p>
            <br />
            <p className="text-white text-opacity-30">below is a link to where I keep my code for this project</p>
            <p>github - <span><a href="https://github.com/elipappas/honors-website" className="text-blue-500">https://github.com/elipappas/honors-website</a></span></p>
          </div>
        )}
      </div>
    </div>
  );
}
