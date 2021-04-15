There is my take on the Front for the CodeTest Web to Soamee.

Despite the fact we already are using this on our back (with the optimized Build), we still can use the development server from Create-React-App.
Because of CORS limitation, we had to add to our back the CORS middleware, but in fact, when we use the heroku version or the back npm start version,
it didnt use any Cross request. Its only to handle the Development server.

//Components

App:

    This component is the one that has all the static components, like header, nav, or the footer.
    
Head:

    This component displays the head img and the Head title. is just a dumb component.

Nav: 

    In this case, Nav is not a component. I use the React-Router-DOM to make this a Single Page App.
    
PhoneList:
    
    This component request the array of phones. Because we use lowDb there is near to zero waiting time at
    requesting Phones, so i add a SetTimeOut to let the loader been visible.
    
Phone:

    This component render a Phone card, with some info, like Name, Img and Price.
    
ModelPhone:

    This component is the pop up we will see every time we click on a Phone card. It will have all the information we 
    have of that phone.

About: 

    This component will be rendered in case we use the About link on the Nav. It provides some info about the webApp
    and also of me, Ruben Tigre. In case you're wondering... Yes, i love my Surname.
    
Footer: 

    Another dumb component. In this case it only displays my name (again) at the bottom left. In the bottom right
    are displayed links to my Github and my Linkedin.
