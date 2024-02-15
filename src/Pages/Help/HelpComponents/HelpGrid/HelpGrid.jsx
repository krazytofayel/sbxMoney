import React from 'react'
import HelpGridCard from './HelpGridCrad/HelpGridCard'

const HelpGrid = () => {
  return (
    <>
      <div className='mt-20'>
        <h2 class=" container mx-auto uppercase mt-2  text-2xl font-medium font-medium mb-3">
          Helpful Articles
        </h2>
      </div>
      <div class="container mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center mt-10">

        {/* <div class="p-5 max-w-[300px] border rounded">

          <h2 class="uppercase mt-2 text-indigo-500 font-medium mb-3">
            Social conversations
          </h2>
          <p class="font-light text-sm text-gray-500 mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </p>
          <a class="text-indigo-500 flex items-center hover:text-indigo-600" href="/">
            More about us icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div> */}

        <HelpGridCard title="How can I contact with customer support ?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          buttonText="Show More"
          buttonHref="#" />
        <HelpGridCard title="I forgot the password of my account."
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          buttonText="Show More"
          buttonHref="#" />
        <HelpGridCard title="How do I link my bank account?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          buttonText="Show More"
          buttonHref="#" />
        <a href="/helpdetails">      <HelpGridCard title="How do I recive payment?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          buttonText="Show More"
          buttonHref="#" /></a>
        <HelpGridCard title="How do I confirm my email address?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          buttonText="Show More"
          buttonHref="#" />
        <HelpGridCard title="Where is my refund?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          buttonText="Show More"
          buttonHref="#" />
        <HelpGridCard title="How can I contact with customer support ?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          buttonText="Show More"
          buttonHref="#" />
        <HelpGridCard title="How can I contact with customer support ?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          buttonText="Show More"
          buttonHref="#" />
      </div>
    </>
  )
}

export default HelpGrid
