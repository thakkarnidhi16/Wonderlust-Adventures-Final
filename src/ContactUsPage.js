import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment, Accordion, Icon } from 'semantic-ui-react';

const ContactUsPage = () => {
  const steps = [
  
      {
        id: "Greet",        
        message: "Hello, Welcome to Wonderlust Adventures",        
        trigger: "Done",        
      },        
      {       
        id: "Done",        
        message: "Please enter your name!",        
        trigger: "waiting1",        
      },      
      {      
        id: "waiting1",      
        user: true,      
        trigger: "Name",      
      },      
      {       
        id: "Name",     
        message: "Hi {previousValue}, How can I help you today ",     
        trigger: "issues",     
      },      
      {
        id: "issues",
        message: "What kind of issues or inquiries do you have? You can choose from the following options:",
        trigger: "options",
      },
      {
        id: "options",
        options: [
          { value: "booking", label: "Booking a trip", trigger: "booking" },
          { value: "destinations", label: "Information about destinations", trigger: "destinations" },
          { value: "activities", label: "Activities and attractions", trigger: "activities" },
          { value: "payment", label: "Payment and billing", trigger: "payment" },
          { value: "other", label: "Other inquiries", trigger: "other" },
        ],
      },
      {
        id: "booking",
        message: "Sure! Our team can assist you with booking a trip. Please provide us with some details like your preferred destination, travel dates, and any specific requirements.",
        trigger: "contact",
      },
      {
        id: "destinations",
        message: "We have a wide range of exciting destinations available. Could you let us know which destination you're interested in? We can provide you with more information and recommendations.",
        trigger: "contact",
      },
      {
        id: "activities",
        message: "Wonderful! We offer a variety of activities and attractions at different destinations. Let us know which activities you're interested in, and we'll provide you with more details.",
        trigger: "contact",
      },
      {
        id: "payment",
        message: "For payment and billing inquiries, please provide us with your specific question or concern, and we'll assist you accordingly.",
        trigger: "contact",
      },
      {
        id: "other",
        message: "If you have any other inquiries or need assistance with a different topic, please let us know how we can help.",
        trigger: "contact",
      },
      {
        id: "contact",
        message: "Please provide us with your contact information (name, email, and phone number) so that we can reach out to you with the necessary assistance.",
        trigger: "waiting2",
      },
      {
        id: "waiting2",
        user: true,
        trigger: "Thank you",
      },
      {
        id: "Thank you",
        message: "Thank you for providing your information. Our team will get back to you as soon as possible.",
        end: true,
      },
       
    ]; 
  
  

  const faqPanels = [
    {
      key: 'panel-1',
      title: 'How do I plan my trip?',
      content: 'Planning a trip is easy! Simply visit our website and browse through plan/organize. Select the city you want to visit , choose number of days , and then select your favourite acitivies or places you want to visit. If you need any assistance, feel free to reach out to our customer support team.',
    },
    {
      key: 'panel-2',
      title: 'Are there any travel restrictions or requirements?',
      content: 'Travel restrictions and requirements may vary depending on the destination and current circumstances. It\'s important to stay informed about any travel advisories, entry requirements, and health guidelines set by the local authorities and international organizations. We recommend checking the official websites or contacting our customer support team for the most up-to-date information.',
    },
    {
      key: 'panel-3',
      title: 'What are the top places ?',
      content: 'In the destinations page, after the search bar there are pictures of top places which links to their respective page. ',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '70%', paddingRight: '20px', color: 'darkred' }}>
        <h2>Contact Us</h2>
        <h3>Frequently Asked Questions</h3>
        <Accordion fluid styled>
          {faqPanels.map((panel, index) => (
            <React.Fragment key={panel.key}>
              <Accordion.Title
                active={activeIndex === index}
                index={index}
                onClick={() => handleClick(index)}
              >
                <Icon name="dropdown" />
                {panel.title}
              </Accordion.Title>
              <Accordion.Content active={activeIndex === index}>
                <p>{panel.content}</p>
              </Accordion.Content>
            </React.Fragment>
          ))}
        </Accordion>

        <h3>Contact Options</h3>
        <p>Email: contact@wonderlustadventures.com</p>
        <p>Phone: +1 123-456-7890</p>
      </div>
      <div style={{ width: '30%', position: 'relative' }}>
        <Segment style={{ position: 'sticky', top: '20px', color: 'darkred' }}>
          <h3>Chat with us</h3>
          <ChatBot steps={steps} />
        </Segment>
      </div>
    </div>
  );
};

export default ContactUsPage;