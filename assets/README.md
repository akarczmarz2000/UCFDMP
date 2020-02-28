#User Centric Frontend Development Milestone Project - Gamer Website v0.4 - Contact Page Started

This site is to help fans, potential fans and anyone else who may be interested in learning information and communicating with the site owner (a gamer who streams and does youtube).
The site owner whats a way to communicate with there fans, potential fans and anyone else interested in giving feedback, they'd also like to have some information on the page about themselves for the users.
The features I am looking to supply for the users is an area with information about the gamer as a person, where they are from what they like all the standard information from an about page.
The next feature I'd like to supply is a history of the games they have played and streamed or recorded for youtube. Also on this page, I'd like to supply who they have recorded with for those who may be interested and have a record of the achievements they have managed to obtain in different games. Also possibly a progress bar compared to each other to show efficiency and confidence in different types of games.
Another feature I'd like to supply is a forum for people to talk to each other and the site owner about the content already created and the content they'd like to see. Also in this area, I'd like to supply a place where criticism can be placed anonymously or with a name to the owner directly.
Finally I'd like to supply a home page that ties this all together and with small samples of information to encourage users to venture further to find out more.

##Version Overview

###v0.4 - Contact Page Started
A basic structure has been added
A form with a simple design has been added will be running by some testers to see there attude to the appearance

###v0.32 - Index Added
I have added an index to the left side of the page which shows links to headers and subsections 
Until it doesn't look natural and then only shows section links 
Then at tablet breakpoint it goes completely

###v0.31 - User Testing
Three scinarios wehre handed out to three users
The results concluded a need for an index/quick navigation
They also suggest a need for theme change for those who are used to darker page type
Finally information about how to navigate to the youtube links need to be more visible

###v0.3 - Gaming Complete
Added some comments to the page to help direct other developers.
Added the achievement section with an example of how I would like it set up with the achievement logo (if the game has one), with a description and name of the achievement and how it can be obtained.
In a usable version I'd like the image to go to the games page about the achievement for example steam page for a game achievements. This would be stated in the text above it like in the example, 
i.e "The photo above will take you to the Steam achievement description for Sword Skills in Warframe."

###v0.23 - UX Update
I have sorted some issues were occurring at different breakpoints.
I also made dome general UX changes to the layout of the gaming page, hopefully making it better to read and visually more appealing on different breakpoints

###v0.22 - Gaming Updated
In this version the level I which I view my skills has been represented in progress bars which are compared to each other.

###v0.21 - Gaming Updated
In this version, several game entries had been added, with images. 
Updates to the phone view of the website.

##UX
These are the users I am thinking off:-

* A fan, 
    * they would like to know more about the gamer as a person 
    * they are looking for an about page
* A potential fan,
    * they would like to know the type of content they usually do and how good they are at it
    * they are looking for a page with a list of played and recorded games
* Rival content maker,
    * looking for things they haven't done so they can do them first
    * looking for the achievement they've done and the games they have completed
* A unhappy fan,
    * they are looking to complain about the content
    * looking for a place to send a direct complaint so they know the owner has gotten it
* Someone advised to look them up,
    * they'd like to know more but don't have much time on their hands to read a lot
    * they are looking for lots of snippet information from across the page

##Features

1. A home page
    * Has different parts shortened down from other pages to give a small overview of the site
2. Header and Footer
    * Has navigation to all the pages
    * Has a login or signup modal
    * Has a logo that takes you back to the home page
    * Has a link to the gamers social pages
    * Has quick links to areas on the page, only visible on navigation when on that page
    * Has links to site owners terms of use and privacy policy
    * Has a link to the feedback form and the forum
3. About page
    * Has some family and personal history
    * Has a photo of the gamer
    * Has personal stories
4. Gaming page
    * Has a history of the games played and finished
    * Shows which games have recorded gameplay and what ones are intended for the future
    * Has some of the achievement that the gamer is proud off and some they are working threw, also if possible links to game pages for their achievements
    * Has a rating of there skills compared to each other
5. Contact page
    * Has a forum or a link to an external forum
    * Has a form that they can submit without a name but requires text

###Existing Features

1. Header and Footer
    * Has navigation to all the pages
    * Has a login or signup modal
    * Has a logo that takes you back to the home page
    * Has a link to the gamers social pages
    * Has links to site owners terms of use and privacy policy
    * Has a link to the feedback form and the forum
2. Gaming page
    * Shows which games have recorded gameplay and what ones are intended for the future
    * Has a history of the games played and finished
	* Has some of the achievement that the gamer is proud off and some they are working threw, also if possible links to game pages for their achievements
    * Has a rating of there skills compared to each other
3. Contact
	* Has a form that they can submit without a name but requires text

###Features Left to Implement

1. A home page
    * Has different parts shortened down from other pages to give a small overview of the site
2. Header and Footer
    * Has quick links to areas on the page, only visible on navigation when on that page
3. About page
    * Has some family and personal history
    * Has a photo of the gamer
    * Has personal stories
4. Gaming page
    * Complete
5. Contact page
    * Has a forum or a link to an external forum

##Technologies Used

* Font Awesome
    * Used to improve UX, gives context to titles and hyperlinks

* Hover.css
    * This is used to apply effects to the buttons for a better UX, shows a response to their input so they know there input has been processed

* Bootstrap
    * The website uses bootstrap for easy feature addition

##Testing

1. Navigation Animation
    * Checking on tablet
        * The bar slides down over it and stays till the page changes or you click on another part of the page
            * This was the expected result and I am happy with this
    * Checking on computer
        * The bar slides down over it and stays till you change mouse location
            * This response as expected but has a slight delay in closing itself up
    * Checking on Phone
        * The bar slides down over it and stays till the page changes or you click on another part of the page
            * It does this but this doesn't look good on the phone as it covers the other navigation icons
            * Media query added so that at the phone breakpoint the hover effect only comes down over the navigation boxes and no overlap occurs
                * Tested and this now response as expected
2. Signup/Login Modal
    * The button for signup opens correct Modal
        * This responds as expected
    * The button for login opens correct Modal
        * This responds as expected
    * Checking on the tablet for sizing
        * Has been checked on the tablet and looks okay
		*I have considered increasing its size on here
    * Checking on the computer for sizing
        * Opened each modal on the computer
            * Display size is okay and looks good
            * Each one loaded the correct modal
        * Closing the modal on the phone
            * The close button was easy to click
            * The website ran as expected after closing the modal no issues encountered
    * Checking on the phone for sizing
        * Opened each modal on the phone
            * Display size is okay and looks good
            * Possibly needs positioning better as it sits to one side of the screen
            * Each one loaded the correct modal
        * Closing the modal on the phone
            * The close button was easy to click
            * The website ran as expected after closing the modal no issues encountered
            
3. Social Links
    * Goes to the correct address
        * The hyperlinks go to the correct pages
    * Images and Account names look good on Phone
        * They don't quite look right on all of them, Icon for Facebook and Twitch slips under the others
            * To fix this I have changed the size of the Icons and the words at screen breakpoint for the phone
    * Images and Account names look good on Tablet
        *They look all okay
    * Images and Account names look good on Computer
        *They look all okay

4. Navigation Look on Phone
    * Does the Login and Sign Up look okay on the phone 
        * It sits to the left and looks odd
            * I hid the normal one on the screen breakpoint phone and added one at the top of the page that becomes visible at screen breakpoint
            * This one is designed to site outside of the navigation grid so sites evenly over the top of the page which works well on the phone
    * Navigation tabs look okay on the phone
        * It's designed to split into 4 blocks which sit next to each other with the title above that
    * Does the logo look okay
        * It sits to one side of the title in an odd proportion
            * Fixed this by changing its position beyond breakpoint to be relative to the centre of the screen and to be a fixed size
            * The image doesn't fit properly where it is
                * Change the sizing attribute to contain so that it fits right beyond the breakpoint
                
5. Testing End Look of Gaming Page
    * Looks good on the computer no visual issues
        * Did change the spacing of the paragraphs so that it's a smaller and more readable structure
    * Hidden logo on 1024px because of visual placement issues
        * It was distorting the size of the signup/login buttons
    * Change the bars from margin to padding so that it looks better on small device screen size
        * The margin they had meant that they slightly hung over the edge of the page
		
6. User Testing
	*First scinario
		* They were a player of simular calibure looking for my achievement so they could compared
			* From the home page they went to the gaming page assuming it was there
			* They scrolled aimlessly till they came across the achievements at the bottom
				* Possibly has an index on the side so they can quick navigate or know where the information should be and could scroll
			* They said the information is displayed well for most users but they are used to reading of off darker displays and the white background made it hard for them to read
				* I could apply a light and dark theme to help reader use to darker themes or increase text size for better readability
	* Second scinario
		* They were a new to my content and was curious about my skills and weather my content would be worth them watching to help them through puzzle games
			* They origanally navigated to the about page for this information then when it wasnt't there went to the gaming page
				* Use the Home page to suggest/direct where information about certain things are will be applied
			* They found the progress bars appealing but slightly hard to understand the top one till looking at the individual breakdowns
				* Possibly make text explaining the top progress bar larger
			* Found what they were looking for and decided the player believes that they are better at other content
	* Third scinario
		* Fan looking for the borderlands playlist and information about the game
			* From the home page they navigated to the gaming page
			* They scrolled down aimlessly till coming apon the section titled borderlands
				* As stated this issue needs addressing
			* They enjoyed the information but found it hard to work out how to get to the youtube video, eventually noticed the text that stated how to get there
				* Seperating the text and making larger will help with direction, possibly placce under the image
    
7. Index Testing
	* Test that the links go to the right point on the page
		* They went to the correct section but cut out the headers when jumping
			* Placed anchors above headers so that the header is also shown when jumping to a new area
	* Testing appearance at different points
		* The sub section links overlap box at about 1340px
			*They will disappear there
		* The section links overlap box
			* Change text sizing of title and items to view point after 1500px
			* The index is removed at 1024px
	* Testing response and look
		* Set underline to show when hovering over sub section links
			* Works well and communicates responds effectively
		* Set highlight for section links
			* Looked mostly alright, but reduce the padding size
			* Also changed highlight color was too dark for my opinion


##Reference
1. Wikipedia
	* https://en.wikipedia.org/wiki/Warframe
	* https://en.wikipedia.org/wiki/The_Elder_Scrolls_Online
    * Used for content on the game page
2. Fandom
	* https://swtor.fandom.com/wiki/Star_Wars:_The_Old_Republic
	* https://borderlands.fandom.com/wiki/Borderlands
	* https://borderlands.fandom.com/wiki/Borderlands_2
	* https://borderlands.fandom.com/wiki/Borderlands_3
    * Used for content on the game page
3. CSS Tricks
    * https://css-tricks.com/snippets/css/media-queries-for-standard-devices/
    *Used for media query breakpoints