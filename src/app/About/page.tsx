export default function About() {
    return (
        // Start of About Me page
        <div className="m-auto w-full max-w-3xl bg-opacity-50 bg-gray-700 p-6 shadow-lg">
            
            {/* Flex Container for Image and Text */}
            <div className="flex justify-between items-center mb-6">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                    <img className="w-48 rounded-full" src="/FullSizeRender.jpeg" alt="Eli Pappas" />
                </div>

                {/* Text Section */}
                <div className="text-white text-lg leading-relaxed ml-6">
                    <h3 className="bg-white bg-opacity-10 w-fit">About Me</h3>
                    <p className="text-base font-normal">
                        Hi, I&apos;m Eli Pappas! I am a fourth-year Computer Science major at the University of Cincinnati. I am also pursuing a minor in mathematics and a Masters of Business Administration. 
                        I am originally from Cincinnati and my interests include working with computers, reading, basketball, golf, lifting, and watching sports.
                    </p>
                    <br />
                    <h3 className="bg-white bg-opacity-10 w-fit">Personal Goals</h3>
                    <p className="text-base font-normal">
                        I am hope to work for a tech company where I can develop new technologies and potentially participate in research and development or data analytics. My strengths include leadership, adaptability, and a constant drive for self-improvement, 
                        which I aim to use to innovate and contribute to the advancement of new technologies.
                        
                    </p>
                    <br />
                    <h3 className="bg-white bg-opacity-10 w-fit">Honors Goals</h3>
                    <p className="text-base font-normal">
                        Through the honors program, I look forward to broadening my perspective and gaining unique experiences beyond what I have encountered before joining the UC Honors Program.
                    </p>
                </div>
            </div>
        </div>
    );
}
