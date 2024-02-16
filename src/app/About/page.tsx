export default function About() {
    return (
        // start of about me page
        <div className="m-auto w-1/2 flow-root dark:bg-gray-700 p-4 rounded-xl">
            <h1 className="text-center text-lg font-bold"> About Me </h1>
            <br></br>
            <div className="m-auto w-full">
                <div className="flex justify-center pr-8">
                    <img className="w-96 rounded-3xl"src="/IMG_0118.JPG" width="100%"/>
                </div>
            </div>
            <br></br>
            <div className="m-auto w-full">
                <p className="text-center">
                    Hi, I&apos;m Eli Pappas! 
                    I am a third year Computer Science major at the University of Cincinnati. I am originally from Cincinnati, Ohio, and my interest include
                    working with computers, reading, basketball, golf, lifting, and watching sports. In highschool, I played on the golf team as well as threw shotput 
                    and discus. On top of my computer science major, I also am pursuing my minor in mathematics and my Master in Business Administration. 
                    As for my professional goal, I hope to end up working for a tech company where I can develop new technologies. My strengths include leadership, 
                    adaptability, and I am always looking to improve myself, and I hope to use these strengths in order to innovate and contribute to new technologies. 
                    Through the honors program I am looking to broaden my scope of the world and get more unique experiences than what I have gotten so far from before 
                    coming to the UC honors program.
                </p>
            </div>
        </div>
    )
}