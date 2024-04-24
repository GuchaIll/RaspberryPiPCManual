// components/Book.tsx
"use client";

import Image from 'next/image';
// components/Book.tsx
import React, { useState, useEffect } from 'react';

interface PageProps {
  children: React.ReactNode; // Children can be any JSX elements
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="page">
      {children}
    </div>
  );
};

const Book: React.FC = () => {
  // Define state for client-side rendering
  const [currentPage, setCurrentPage] = useState(0);

  // Define the content for each page
  const pages = [
    <div key="page1">
      <h2 className="text-4xl font-bold text-center">Chapter 1</h2>
      <p className = "mt-5 mb-5 mx-auto text-wrap max-w-prose">
Before you start constructing your own raspberry pi computer, 
it&apos;s essential to first determine the parts you’ll need. The first part of the manual guides you 
through selecting the appropriate Raspberry Pi model, accessories, and necessary components.
</p>
<Image className="w-1/3 mx-auto" src="/img/circuit.jpg" alt="rasppiImage"   width={500} height={300} />

<h1 className = "mt-5 font-bold text-xl ml-4">Choosing the Right Raspberry Pi Model and Necessary Accessories
</h1>

<p className = " mb-5 mx-auto text-wrap max-w-prose">
The Raspberry Pi comes in a variety of models, each catering to different needs and price points. Consider the following factors when choosing the right Raspberry Pi model for your project:

</p>

<h1 className = "font-bold text-xl ml-4">Performance Requirements: </h1>

<p className = " mb-5 mx-auto text-wrap max-w-prose">
Assess the computing power and performance capabilities your PC would need. If you need higher processing power and memory, consider opting for a more recent model like the Raspberry Pi 4.

</p>

<h1 className = "font-bold text-xl ml-4">Connectivity Options: </h1>

<p className = " mb-5 mx-auto text-wrap max-w-prose">
Evaluate the connectivity options offered by different Raspberry Pi models, such as USB ports, Ethernet, Wi-Fi, and Bluetooth. Choose a model that provides the necessary connectivity features for your project.

</p>

<h1 className = "font-bold text-xl ml-4">Form Factor: </h1>

<p className = " mb-5 mx-auto text-wrap max-w-prose">
Consider the form factor and size of the Raspberry Pi model, especially if space is a constraint in your project. Models like the RCaspberry Pi Zero offer a compact and lightweight design ideal for space-constrained applications.

</p>
      {/* Add more elements as needed */}
    </div>,
    <div key="page2">
      <h2 className="text-4xl font-bold text-center">Chapter 1 - Cont</h2>
      <h1 className = "mt-5 font-bold text-xl ml-4">Below is a reference chart for the costs, performance, and connectivity options of various Raspberry Pi models
</h1>
      <Image className="w-1/2 mx-auto" src="/img/pispecs2.webp" alt="rasppiImage" width={500} height={300}/>
      {/* Add more elements as needed */}
    </div>,
    <div key="page3">
      <h2 className="text-4xl font-bold text-center">Chapter 2 - Peripherals</h2>
      <h1 className = "mt-5 font-bold text-xl ml-4">Beside choosing the right raspberry pi board. We also need to choose the peripherals to attach to the raspberry pi.
</h1>
      <p className = " mb-5 mx-auto text-wrap max-w-prose"> Here’s a list of affordable displays you may consider:
</p> 
      <ul className="ml-10 list-disc">
        <li>MicroSD Card: Used for storing the operating system and data.
</li>
        <li>Power Supply: Provides power to the Raspberry Pi board.
</li>
        <li>Display: A monitor or screen to display the Raspberry Pi output.
</li>
        <li>Keyboard and Mouse: Input devices for interacting with the Raspberry Pi.
</li>    
         <li>MicroSD Card: Used for storing the operating system and data.
</li>
        <li>Micro HDMI Cable: For connecting your Raspberry Pi to a display.
your Raspberry Pi. <b>Warning: Make sure to use a micro HDMI to HDMI cable 
</b>
</li>
        <li>USB Cable: For connecting your Raspberry Pi to a display
</li>
        <li>
        Ethernet cable or Wi-Fi dongle for internet connectivity. (optional)
        </li>
       
      </ul>
      <Image className="w-1/3 mx-auto" src="/img/connections.jpg" alt="rasppiImage" width={500} height={300} />
      {/* Add more elements as needed */}
    </div>,
    <div key="page4">
       <h2 className="text-4xl font-bold text-center">Chapter 3: Setting Up Raspberry Pi
</h2>
<p className = " mb-5 mx-auto text-wrap max-w-prose"> Setting up your Raspberry Pi is an exciting first step in bringing your project to life. This chapter will walk you through the process of installing the Raspberry Pi OS on a microSD card, performing the initial configuration of the Raspberry Pi, and exploring the Raspberry Pi desktop environment.
<h1 className = "mt-5 font-bold text-xl ml-4">Installing the Raspberry Pi OS on a microSD Card 
</h1>
<h1 className = "text-red-500 mt-5 font-bold text-xl ml-4">Warning: You&apos;ll need a to use a PC with microSD port or an USB  for the following steps.
If you do not have access to a PC, go to the next page!
</h1>
<ul className="ml-10 list-disc">
  <li>Step 1: <b>Download the Raspberry Pi OS: </b>Download the Raspberry Pi Imager from the official Raspberry Pi website (raspberrypi.org)
  and download the latest version of the Raspberry Pi OS (formerly known as Raspbian).
    </li>
  <li>Step 2: <b>Format the microSD Card: </b>Use a disk formatting tool such as SD Card Formatter to format your microSD card. Ensure that it&apos;s formatted as FAT32 for compatibility.
 </li>
 <li>Step 3: <b>Insert Your MicroSD card to your pc:</b></li>
 <li>Step 4: <b>Open Raspberry Pi Imager: </b>Open the Raspberry Pi Imager and select the Raspberry Pi OS image you downloaded earlier.
  <ul >
    <li>Choose the correct version of Raspberry PI board you have purchased </li>
    <li>Choose the newest version of Raspberry Pi OS you have downloade</li>
    <li>For Storage, choose the USB you have inserted
    </li>
    <li>Under Additional Settings
Edit the Username and Password
</li>
    <li>(Optional) If you want to connect your raspberry pi to wifi, enter the name of the network you want to connect under LAN and the appropriate password
</li>
  </ul>
  </li>
  <li>Step 5: <b>Write the Image: </b>Click on the Write button to write the Raspberry Pi OS image to your microSD card. This process may take a few minutes.
</li>
  <li>Step 6: <b>Eject the microSD Card: </b>Once the writing process is complete, safely eject the microSD card from your PC.
</li>
</ul>

</p> 
    </div>,
    <div key="page5">
       <h2 className="text-4xl font-bold text-center">Chapter 3: Setting Up Raspberry Pi - Cont
       </h2>
        <h1 className = "mt-5 font-bold text-xl ml-4">If you have completed all of the above steps in the previous page, youIt&apos;ve successfully written to you SD card. The following steps are for users who do not have access to a PC or had issues with flashing the OS into the microSD card. Skip the next section and go to the next page. 
</h1> 

<h1 className = "mt-5 font-bold text-xl ml-4"> 
If you do not have access to a PC to install the Rasbian OS, follow one of the following steps

</h1>     
<ol className="ml-10 list-disc">
  <li><b>Using a Mobile Device:</b></li>
  <li>
  <ul>
    <li><b>Android: </b>You can use apps like Termux to download and flash Raspberry Pi OS images onto a microSD card.</li>
    <li><b>iOS: </b>Although options are limited, some apps may allow you to download and flash Raspberry Pi OS images, but they may require jailbreaking.
</li>
  </ul>
  </li>
  <li>
  <b>Using Another Raspberry Pi:</b>
If you have access to another Raspberry Pi that&apos;s already set up, you can use it to flash the Raspberry Pi OS onto a microSD card. You&apos;ll need a microSD card reader to transfer the OS image.
  </li>
  <li><b>Purchase Pre-Flashed microSD Cards:</b>
Some retailers offer microSD cards pre-flashed with Raspberry Pi OS. You can purchase one of these cards and use it directly with your Raspberry Pi without needing to flash the image yourself.
</li>
</ol>
      </div>,
      <div>
        <h2 className="text-4xl font-bold text-center">Chapter 3: Initial Configuration of Raspberry Pi
        </h2>
        <h1 className = "mt-5 font-bold text-xl ml-4">After installing the Raspberry Pi OS on your microSD card, you&apos;ll need to perform the initial configuration of the Raspberry Pi. This involves setting up the Raspberry Pi for the first time, connecting it to the internet, and updating the software.
        </h1>
        <ul className="ml-10 list-disc">
          <li><b>Insert SD Card: </b>Insert the flashed microSD card into your Raspberry Pi&apos;s microSD card slot. </li>
          <li><b>Connect Peripherals :</b></li>
          <li>Start by connecting the display to the raspberry pi using the hdmi to micro hdmi cord. 
</li>
        
          <li>Connect the keyboard to the raspberry pi via the usb port
</li>
          <li>Connect the mouse to the raspberry pi via another usb port

</li>
          <li>Connect the power supply to the raspberry pi and power it on.
</li>
          <li>(Optional) Connect your raspberry pi to the internet using the ethernet cable(if not using Wi-Fi).
</li>
        </ul>
        <Image className="w-1/3 mx-auto" src="/img/connections.jpg" alt="rasppiImage" width={500} height={300}/>
</div>,
<div>  
      <h2 className="text-4xl font-bold text-center">Chapter 3: Initial Configuration of Raspberry Pi - Cont
        </h2>
      <ul className="ml-10 list-disc">

        <li>Power On the Raspberry Pi: Connect the power supply to your Raspberry Pi to power it on. The Raspberry Pi should boot up and display the initial setup screen.
Configure Language and Locale: Follow the on-screen prompts to select your preferred language, time zone, and keyboard layout.
</li>
<li>Change Default Password: For security purposes, if you did not set up new users and passwords when flashing the OS into the raspberry pi, change the default password for the pi user when prompted. </li>
      <li>Create New User and Login:</li>
      <li>Update Software: Open a terminal window and run the following commands to update the Raspberry Pi OS and installed packages:
       
<li>sudo apt update</li>

<li>sudo apt upgrade
</li>
</li>
      </ul>
      
<p className = " mb-5 mx-auto text-wrap max-w-prose">If you have completed all of the above steps, youIt&apos;ve successfully set up your raspberry pi computer.  </p>
      </div>,
    // Add more pages as needed
  ];

  // useEffect to ensure useState is only used on the client side
  useEffect(() => {
    setCurrentPage(0); // Set initial page on component mount
  }, []);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pages.length - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div className="book">
      <div className="page-container">
        <Page>{pages[currentPage]}</Page>
      </div>
      <div className="navigation">
        <button onClick={prevPage} disabled={currentPage === 0}>
          Previous Page
        </button>
        <button onClick={nextPage} disabled={currentPage === pages.length - 1}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Book;