"use client";

import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import * as XLSX from 'xlsx';
export default function HonorsExperience() {
  const [isSwiftCollapsed, setIsSwiftCollapsed] = useState(false);
  const [isMusicCollapsed, setIsMusicCollapsed] = useState(false);
  const [isWebsiteCollapsed, setIsWebsiteCollapsed] = useState(false);
  const [isMLCollapsed, setIsMLCollapsed] = useState(false);
  const [isGymCollapsed, setIsGymCollapsed] = useState(false);
  const [excelSheets, setExcelSheets] = useState<{ [key: string]: any[] }>({});

  useEffect(() => {
    const loadExcelFile = async () => {
      try {
        console.log('Attempting to fetch Excel file...');
        const response = await fetch('/gym/spring_2026_gym_tracking.xlsx');
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        console.log('File loaded, buffer size:', arrayBuffer.byteLength);
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        console.log('Sheet names:', workbook.SheetNames);
        
        const sheets: { [key: string]: any[] } = {};
        
        // Load all sheets
        for (const sheetName of workbook.SheetNames) {
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          sheets[sheetName] = jsonData;
          console.log(`Sheet "${sheetName}": ${jsonData.length} rows`);
        }
        
        console.log('All sheets loaded:', Object.keys(sheets));
        setExcelSheets(sheets);
      } catch (error) {
        console.error('Error loading Excel file:', error);
        console.error('Stack:', error instanceof Error ? error.stack : 'N/A');
      }
    };
    loadExcelFile();
  }, []);

  return (
    <div className="m-auto w-full flow-root bg-opacity-70 bg-gray-700 p-4 text-white">
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
              <h1 className='w-full flex items-center bg-white bg-opacity-10'> Honors Website Experience <span className='ml-2'>{isWebsiteCollapsed ? <FaChevronUp /> : <FaChevronDown />}</span></h1>
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
      {/* Divider */}
      <br />
      {/* Fourth Section */}
      <div>
        <button
            onClick={() => setIsMLCollapsed(!isMLCollapsed)}
            className="font-extrabold text-xl"
          >
              <h1 className='w-full flex items-center bg-white bg-opacity-10'> Machine Learning Experience <span className='ml-2'>{isMLCollapsed ? <FaChevronUp /> : <FaChevronDown />}</span></h1>
          </button>
          {!isMLCollapsed && (
          <div>
            <p className="font-normal">
              This experience involved me learning about machine learning and creating a project to showcase my knowledge. I started by researching different machine learning algorithms and techniques,
              focusing on binary classification. I then decided to create a fire detection binary classifier using Python and popular libraries such as TensorFlow and Keras.
              I collected a dataset of images containing fire and non-fire scenarios, preprocessed the data, and built a convolutional neural network (CNN) to classify the images.
              Throughout this experience, I learned about data preprocessing, model architecture design, training and evaluation of machine learning models, and hyperparameter tuning.
              This experience was incredibly valuable as it allowed me to apply theoretical knowledge in a practical setting, enhancing my understanding of machine learning concepts.
              Additionally, it has sparked my interest in pursuing further studies and projects in the field of artificial intelligence and machine learning.
            </p>
            <br />
            <p className="text-white text-opacity-30">below is a link to where I keep my code for this project</p>
            <p>github for project - <span><a href="https://github.com/elipappas/Fire-Detection-Binary-Classifier" className="text-blue-500">https://github.com/elipappas/Fire-Detection-Binary-Classifier</a></span></p>
          </div>
        )}
      </div>
      {/* Divider */}
      <br />
      {/* Fifth Section */}
      <div>
        <button
            onClick={() => setIsGymCollapsed(!isGymCollapsed)}
            className="font-extrabold text-xl"
          >
              <h1 className='w-full flex items-center bg-white bg-opacity-10'> Gym Tracking Experience <span className='ml-2'>{isGymCollapsed ? <FaChevronUp /> : <FaChevronDown />}</span></h1>
          </button>
          {!isGymCollapsed && (
          <div>
            <p className="font-normal">
              This experience involved me tracking my workouts at the gym and using that information to improve my weights
              and overall fitness. I started by creating a spreadsheet to log my workouts, including the exercises I performed, 
              the weights I used, and the number of sets and reps.I then analyzed this data to identify trends and areas for 
              improvement. For example, I noticed that I wasn't able to hit a certain rep count for a specific exercise, which 
              prompted me to lower weights to get a better lift. Additionally, I used this data to set goals for myself and 
              track my progress over time. This experience was valuable as it allowed me to take a more systematic approach 
              to my fitness journey and provided me with insights that helped me improve my workouts and overall health.
            </p>
            <br />
            {Object.keys(excelSheets).length > 0 && (
              <div>
                {Object.entries(excelSheets).map(([sheetName, data]) => (
                  <div key={sheetName} className="mb-6">
                    <h3 className="text-lg font-bold mb-2">{sheetName}</h3>
                    {data.length > 0 && (
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-white">
                          <thead>
                            <tr className="bg-white bg-opacity-10">
                              {Object.keys(data[0]).map((key) => (
                                <th key={key} className="border border-white p-2 text-left text-sm">{key}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((row, idx) => (
                              <tr key={idx}>
                                {Object.values(row).map((val, i) => (
                                  <td key={i} className="border border-white p-2 text-sm">{String(val)}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
