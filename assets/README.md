#User Centric Frontend Development Milestone Project - Gamer Website v0.2 - Footer Completed

This site is to help fans, potential fans and anyone else who maybe interested in learning information and communicating with the site owner (a gamer who streams and does youtube).
The site owner whats a way to communicate with there fans, potential fans and anyone else interested in giving feedback, they'd also like to have some information on the page about themselves for the users.
The features I am looking to supply for the users is an area with information about the gamer as a person, where they are from what they like all the standard infromation from an about page.
The next feature I'd like to supply is a history of the games they have player and streamed or recorded for youtube. Also on this page I'd like to supply who they have recorded with for those who maybe interested and have a record of the achievements they have managed to obtain in different games. Also possibly a progress bar compared to each other to show effeiceny and confidance in different types of games.
Another feature I'd like to supply is a forum for people to talk to each other and the site owner about the content already created and the content theyd like to see. Also in this area I'd like to supply a place where critism can be place annomasly or with name to the onwer directly.
Finally I'd like to supply a home page that ties this all together and with small samples of information to enchourage users to venture further to find out more.

##UX
These are the users I am thinking off:-

* A fan, 
    * they would like to know more about the gamer as a person 
    * they are looking for an about page
* A potential fan,
    * they would like to know the type of content they usually do and how good they are at it
    * they are looking for a page with a list of played and record games
* Rival cotent maker,
    * looking for things they haven't done so they can do them first
    * looking for the achievement they've done and the games they have completed
* A unhappy fan,
    * they are looking to complain about content
    * looking for a place to send a direct complaint so they know the owner has gotten it
* Someone advised to look them up,
    * they'd like to know more but don't have much time on their hands to read a lot
    * they are looking for lots of snipit information from across the page

##Features

1. A home page
    * Has diffent parts shortened down from other pages to give a small overview of the site
2. Header and Footer
    * Has a navigation to all the pages
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
    * Has a history of the gmaes played and finished
    * Shows which games have recorded gameplay and what ones are intended for the future
    * Has some of the achievement that the gamer is proud off and some they are working threw, also if possible links to game pages for their achievements
    * Has a rating of there skills compaired to each other
5. Contact page
    * Has a froum or a link to an external forum
    * Has a form that they can submit without a name but requires text

###Existing Features

1. Header and Footer
    * Has a navigation to all the pages
    * Has a login or signup modal
    * Has a logo that takes you back to the home page
    * Has a link to the gamers social pages
	* Has links to site owners terms of use and privacy policy
	* Has a link to the feedback form and the forum

###Features Left to Implement

1. A home page
    * Has diffent parts shortened down from other pages to give a small overview of the site
2. Header and Footer
    * Has quick links to areas on the page, only visible on navigation when on that page
3. About page
    * Has some family and personal history
    * Has a photo of the gamer
    * Has personal stories
4. Gaming page
    * Has a history of the gmaes played and finished
    * Shows which games have recorded gameplay and what ones are intended for the future
    * Has some of the achievement that the gamer is proud off and some they are working threw, also if possible links to game pages for their achievements
    * Has a rating of there skills compaired to each other
5. Contact page
    * Has a froum or a link to an external forum
    * Has a form that they can submit without a name but requires text

##Technologies Used

* Font Awesome
    * Used to improve UX, gives context to titles and hyperlinks

* Hover.css
    * This is used to apply effects to the buttons for a better use UX, shows response to their imput so they know there input has been processed

* Bootstrap
    * The webste uses bootstap for easy feature addition

##Testing

1. Navigation Animation
    * Checking on tablet
        * The bar slides down over it and stays till the page changes or you click on another part of the page
            * This was the expected result and I am happy with this
    * Checking on computer
        * The bar slides down over it and stays till you change mouse location
            * This response as expected but has a slight delay in closing it self up
    * Checking on Phone
        * The bar slides down over it and stays till the page changes or you click on another part of the page
            * It does this but this doesn't look good on the phone as it covers the other navigation icons
            * Media query added so that at the phone breakpoint the hover effect only comes down over the navigation boxes and no overlap occures
                * Tested and this now response as expected
2. Signup/Login Modal
    * The button for signup opens correct Modal
        * This respondes as expected
    * The button for login opens correct Modal
        * This respondes as expected
    * Checking on tablet for sizing
        * Yet to test on tablet
    * Checking on computer for sizing
        * Opened each modal on the computer
            * Display size is okay and looks good
            * Each one loaded the correct modal
        * Closing the modal on the phone
            * The close button was easy to click
            * The website ran as expected after closing the modal no issues enchountered
    * Checking on phone for sizing
        * Opened each modal on the phone
            * Display size is okay and looks good
            * Possibly needs poisitioning better as it sits to one side of the screen
            * Each one loaded the correct modal
        * Closing the modal on the phone
            * The close button was easy to click
            * The website ran as expected after closing the modal no issues enchountered
			
3. Social Links
	* Goes to the correct address
		* The hyperlinks goes to the correct pages
	* Images and Account names look good on Phone
	* Images and Account names look good on Tablet
	* Images and Account names look good on Computer