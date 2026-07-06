syllabus of your training :-

frontend part ->

1. HTML (Structuring the websites)
2. CSS (Styling the web page)
   .Boosststrap (Light weight framework)
   .Tailwind (Light weight framework)
3. Javascript (Building logic and function)
   .
   .
4. Node JS
   .Database part
5. MongoDB (framework)
   .API integration and security
6. Restful API integration
7. Authentication and authorization
   .Artificial Intelligence
8. Basic LLM's model (Large Language Model)
9. Prompt Engineering
10. Chat GPT/Open AI/Gemini etc...
11. AI chatbot
Devlopment and Devops Part ->
12. Hosting in vercel,render like cloude platform
13. Use Docker/AWS for Devlopment and pipeline
Capstone Project ->
14. Build end-to-end MERN stack project
15. AI integration with MERN

Date-19.06.2026
1. 
HTML :-
- Html stands for Hyper text markup laguage.
- it's used for structuring the website.
- HTML is a markup language because HTML contain the skeletal structure of a web page also it builts on tags so that why we tell them HTML is a markup language.
- All the HTML written through some tags lines.
- The main element/tag of HTML is <html>.

HEAD :-

- In head tag we have some tag like <title> & some meta elements.
- <title> tag contain our website title in the title bar.
- Meta elements help us to create responsive with screen size.
- we also attached some external style sheet link in that head tag.

Body :-

- Body contains all the page structure of a web page.
- We can design & devlop all the things in that body part.

Heading :-

- Heading is a major element in our web page.
- There are 6 types of header are there (h1 - h6)
<h1> is the biggest heading and <h6> is the smallest.

Paragraph:-

- Paragraph play a major role to describe our data or information briefly.
- It is denoted by an element <p>.

Break tag :-
- It is used to break the line & creating a new line.
- It is denoted by a <br>.
- It is single tag.

 Horizontal tag :-

 - It is used for creating a horizontal line.
 - It is denoted by <hr>.
 - It is also a single tag.

 Image tag :-

- when we put an image in our website we just need a<img> tag for put our image.
- <img> also is a single tag
- in that <img> tag we have some elements to configure our image in a right direction so we need some attributes.
- attributes means it's an behaviour of an HTML element.
- in <img> tag we have some attributes like :
   -> src(image source)
   -> alt(alternate of the image, we can put image name)
   -> height(image height)
   -> width(image width)

Anchor tag :-

- It is used to attached some outside links in our web pages.
- it is denoted by <a>
- Anchor tag contain 2 attributes ->href & targer
- HREF -> Hyper reference -> reference a point or page to another page .
- Target -> it means how we can open that link
  ->_self -> it open that link in our own website itself.
  ->_blank -> it will open that link by creating a new tab.

HTML formatting :-

- To format our text in a proprer way.
- There are 10 types of formatting are present:
 1. <b> -> Bold the text.
 2. <i> -> Italic the text.
 3. <em> -> Ephasized the text.
 4. <small> -> Smaller the text.
 5. <ins> -> Inserted the text.
 6. <del> -> deleted the text.
 7. <mark> -> Marked the text.
 8. <strong> -> Stronger the text.
 9. <sup> -> Superscript the text.
 10. <sub> -> Subscript the text.

 Date- 22.06.2026

 HTML Table :-
 
 - As we draw a normal table to maintain our data so html also provide a table like structure .
 - <table> is the main tag of the html.
 - Inside html table we have :-
    - <tr> -> table row
    - <td> -> table data
    - <th> -> table heading

    sl. no.      name       salary
    1            Malay       10000
    2            Satya       20000
    3            Rakesh      30000
    4            Chiku       40000

 HTML List :-
 - As our day to day life, when we store some data inside a proper format that we called our list of data.
 - HTML also provide a list to store some data inside it.
 - In HTML there are 2 types of list are there :-
      1. Unordered list:-

         - When we store that data in a un-organized form that called our unordered list.
         - It is denoted by <ul>.
         - Inside <ul> tag we have <li> tag.(<li> -> list item)

      2. Ordered list :-

         - When we store that data in a organized form that called oredered list.
         - It is denoted by <ol>.
         - Inside <ol> tag we have <li> tag.( <li> -> list item)

 Example-
  - My fav skills are ->(UL)
     - HTML
     - CSS
     - JS
  - My fav hobbies are ->(OL)
     - read newspaper
     - do coding
     - practicing
   
Block Level Element & Inline element in HTML :-

Block level Element :-

- A block level element alwaysnstarts on a new line, and the browser automatically add some space before & after the element.
- A block level element always takes  up the full width available.
- Ex- <div>,<p>,<main>,<form>, <section> etc...

Inline Element :-

- An inline element does not starts on a new line.
- An inline only takes up as much width as necessary
- Ex- <span>,<button>,<sup>,<sub>,<br> etc...

Form in HTML :-

- An HTML form is used to collect some user inputs for the data storage purpose.
- <form> tag is the main tag of HTML form.
- Inside <form> tag we have Lavel & input tag for take the user input.
- There are some input tags like :-
  1.  <input type="text">
  2.  <input type="button">
  3.  <input type="Checkbox">
  4.  <input type="color">
  5.  <input type="date">
  6.  <input type="email">
  7.  <input type="password">
  8.  <input type="file">
  9.  <input type="hidden">
  10. <input type="image">
  11. <input type="number">
  12. <input type="month">
  13. <input type="search">
  14. <input type="radio">
  15. <input type="submit">
  16. <input type="url">
  17. <input type="time">
  18. <input type="week">
  19. <input type="tel">
  20. <input type="range">


Semantic tag in HTML :-
 
  - Writing semantic markup means understanding the heirarchy of your content and how both are mechanism will work on web browser.
  - Most common semantic tags are :-


      - header
      - main
      - nav
      - section 
      - article
      - aside 
      - footer etc...


2. 
CSS :-

- CSS stands for Cascadding Style Sheet.
- Bascically CSS used for the designing and Styling our web pages.
- CSS is not a programming language , it's a styling language .
- Syntax :-
  
  Selector{
   properties : value;
  }

  Example :
   h1{
      color: red
   }

   - In the above example -
         . h1 is the selector
         . color is the properties
         . red is the value of that properties.

- There are three types of CSS are present they are :-
   
   1. Inline CSS :-

   - We used Inline CSS inside the tag name.
   - Inline CSS have highest priority by compare with other types of CSS.
   We can put our styling by creating a "style" attribute inside the tag.

   2. Internal CSS :-
   
    - We used internal CSS inside  <head> tag , by creating a <style> tag inside it.
    - Internal CSS used cases for small codebase.

   3. External CSS :-

    - We used external CSS by creating a separate CSS file and link that filr in our HTML page.
    - We can link the external CSS file by link tag.
    - it is most popularly used because everyone wants to see the clean code so all files have to be separated.

    Date - 23.06.2026

    SELECTORS in CSS :-

    - We used CSS selectors for selecting an HTML element for the shake of designing.
    - There are basically 5 types of selectors are there :-
       1. ID selectors :-

        - It is a type of selector that used for unique design.
        - It is denoted by "#".

       2. Class selectors:-

        - It is a type of selector that is used for similar drsign in multiple element.
        - It is denoted by "."  .

       3. Group selectors:-

        - It is a type of selector that is used for design more than one element by creating a group.

       4. Universal selectors :-

        - It is a type of selector that is used for drsign whole HTML element in a single design.
        - It is denoted by "*"(estric).

       5. Element selectors:-

        - It is a type of selector that is used for design single-single element separately.

      Practice Task :-

       1. create a simple div with an id" box" . add some text content inside the div. set it's background color to "blue".
       2. create 3 headings with h1,h2,h3. give them all a class" heading" & set the color of head to "red ".

   Properties in CSS:-
    
    1. color : red/blue/green/ etc..
    2. background-color :  red/blue/green/ etc..
    3. text-allign : left/right/center
    4. trxt-decoration : underline/overline/line-through
    5. font-weight : normal/bold/bolder/100/300/5000 etc..
    6. font-family : italic/can-sarif/roboto/cursive etc...
    7. line-height : 1/2/4/5 etc...
    8. text-transform : uppercase/lowercase/capitalize 

   Box Model in CSS:-

    - Box model is used for properly placed the element in the right direction.
    - It majors all the size of that particular element and place them.
    - There are 5 types of box models are there :-
        
        1. height
        2. width
        3. border(border-radius)
        4. margin(left,right,top,buttom)
        5. padding (left,right,top,buttom)

   Display properties in CSS :-

    - We used display property to ahowcase our element in a proper form to display.
    - There are 4 types od display property :-
      
      1. display-inline -> it takes only the space required by the element.
      2. display-block -> it takes full space avialable in width.
      3. display-inline-block ->it similar to display inline but difference is that when we apply padding over here.
      4. display-none -> to remove element from the document flow.(none-nothing)


Date- 25.06.2026

Flex-Box in CSS :-

  - We can use CSS flex-box to create one dimentional design in a single page.
  - Flex-box have some properties like :-
      
       1. Display: flex;
       2. Flex-direction: row/row-reverse//column/column/column-reverse
       3. Justify-content: centre/space-between/space-evenly/space-around
       4. Align-item:centre/top/bottom
       5. Flex-wrap: wrap/no-wrap

 Grid-Layout in CSS :-
  
   - CSS grid-layout is atwo dimensional layout system for the web.
   - A grid is a coleection of horizontal and vertical lines  creating a pattern aganist which we can line up our design element.
   - Some important properties of grid-layout are:-
      
      1. dispaly: grid;
      2. grid-template-column: repeat(4,1fr)/100 200 300;
      3. grid-gap: 20px / 30px etc...
      4. grid-auto-rows: 100px / 200px etc...

   
   CSS Units :-

    - basically there are multiple units in CSS but we will discuss some important units:-
       
       1. px(pixel) - fixed
       2. %(percentage) - percentage fully depends upon their parent element .

         EX- 
          rakesh - 100 -> 20% -> 20
          bikash - 1000 -> 20% -> 200
       3. vh(viewport height) & vw(viewport width) -> It will increase or decrease their size as per as the screen size .
       4. vmax(viewport maximum) -> If the screen size can be squized to a phone screen so our content can be small so it break that and create a new line of content.
       5. em & rem (root units of CSS) -> we can handle all the tag by a root element/tag so that it would be feasible for our content. *[1 rem = 16px]

Date-26.6.2026
 
 Position properties in Css :-

   - The Position properties specify the type of positioning method used for an element.
   - There are 5 types of position properties are there :-
       
       1. Static -> Default value,it's not change  their position.
          
       2. Relative -> The element is positioned relative to it's normal position.

       3. Absolute -> The element is positioned relative to it's ancestors.

       4. Fixed -> The element is positioned relative to the browser window.
      
       5. sticky -> The element is positioned based on the user scroll position.
      

Animation in CSS :-

   Animation(transition) :- to change the state of an object.

   - Tranistion enables you to define the transition between two states of an element .
   - Some important transition properties are :-
      
      1. transition-property : property you want to transition(font-size,color,bg color)
      2. transition-duration : 2s/3s/4s/ etc...
      3. transition-timing-function : ease-in/ease-out/ease-in-out/linear/step(4) etc...
      4. transition-delay :2s/3s/4s/ etc....

   - Transition shorthand(property names/duration/timimg-function/delay)
      
      EX-
      transition : font-size 2s ease-in 5s;

   Animation (transform) :-
     
     - It is used to apply 2D & 3D transformation to an element.

       1. Transform (Rotate) ->
           - transform : rotate(45deg/90deg etc..)
           - rotate : 45 deg;
           - rotateX : 45 deg;
           - rotateY : 45 deg;
           - rotateZ : 45 deg;
       
       2. Transform (Scale) ->
            
            - transform : scale(2/3 etc..)
            - transform : scale(1,2)
            - transform : scaleX(0.5)
            - transform : scaleY(0.5)

       3. Transform (Skew) ->
             
             - transform : skew(45deg);
             - transform : skewX(45deg);
             - transform : skewY(45deg);
             - transform : skewZ(45deg);


 Animation (keyframe) :-
   
   - It is aspecial CSS rule that define the different stages an animation over the time.

   - Syntax ->
     
     @keyframe spinScale{
      0%{
          transform :rotate(0deg) scale(1)
      }
      50%{
          transform :rotate(180deg) scale(1.5)
      }
      100%{
         transform :rotate(360deg) scale(2)
      }
     }

- In keyframes the properties are :-
   
   1. animation-duration
   2. animation-duration-function
   3. animation-delay
   4. animation-iteration count
   5. animation-direction

NOTE --> @keyframe is the heart of CSS animation.

Date - 29.6.2026

 
 Rest topics -->
 HTML - Semantic tags
 CSS - Key-frames animation


 JAVASCRIPT :- 

   - Javascript is used for building logics of a webpage.
   - Javascript is a high level programming language, used in both client side(frontend) as well as server side (backend).
   - Javascript comes from echma script so we see the latest version of Javascript in terms of echma script .
   - The latest version of Javascript is ES16.
   - Node js is the runtime environment of javascript.


   Variable in Javacsript :-

     - Variable is a container to store some digital data inside it.
     - In javascript there are 3 types of variable are there :-
          
          1. var :-

             - var is a type of variable which is used for changing the variable value in later stage.
             - It is used in older browser so now in these days we will don't use the most of the cases.

          2. let :-

             - Let is a type of variable which is also used for changing the variable value in later stage.
             - Let is a block scope/function scope so we have been used let most of the cases.

          3. const -(constant) 
             
             
  Rules for creating the variable name :-

   - variable names are case sensitive "a" & "A" is different.
   - Only letter , digits , underscore & special characters is allowed.(Do not keep white space over here)
   - Only letter , digits , underscore & special character ($ , _)should be the 1st character key.
   - Reserved words cannot be a variable name.

    EX- for , while , var , let , console 

 Datatypes in javascript :-
  

  - Datatype is an attribute associated with a piece of data that tells a computer system how to inerface it's value.
  - In datatype we used "typeof" operation to know , what type of data it is.
  - Mainly in javascript there are two types of datatypes are there :-
      
      1. Primitive Datatype :-

          - In javascript there are 7 types of primitive datatypes are there -->
              
              1. Number --> Number are the type of datatype those it contains some numerical values.
              2. Boolean --> In boolean datatype we got boolean value like true/false.
              3. Undefined --> The data is not define
              4. NULL --> Nothing
              5. bigInt --> Big integer value
              6. String --> Sequence of characters
              7. Symbol --> 

      2. Reference/Non-Primitive Datatype :-

          - Reference datatype are the type of datatype which can hold multiple element in a single frame.
          - There are 3 types of reference datatypes are there :-
            
               1. Array :-
                
                 - Array is a collection of similar type of data stored in contigious memory location.
                 - array index starts from "0"

                 Ex- let arr = [10,30,40,50,60,70]

               2. Object :-

                 - Object is a reference datatype where we can store more than one element in a single frame.
                 - Mainly objects are working on (key:value) pair.
                  
                   Ex- 
                   let hari = {
                      "name":"hari babu",
                      "phone-no":7077831829,
                      "address": "bhubneswar"
                      "carrier": "good"
                   }

             - in the above example ; left hand side are the "keys" , right hand side  are the "values" of that keys & hari is our object name.

               3. Function :-

                - Funstion is a block code that performs specific task.
                - Function reduce our code complexity, time & space complexity.
                - Syntax-->
                  
                  Function creation ->
                   

                   function my_school(){
                     console.log(" my school name is OXFORD PUBLIC SCHOOL")
                     console.log("my school has far from my home")
                     console.log("my school is at Remuna ")

                   }
                    function calling ->
                     
                     my_school()
                     my_school()


 



    


  

   

  

  

       
  
Operator in js :-
 
   - Operator are the key features to do some task or operate some task.
   - Ex- A+B
   - IN the above example A&B are operands and "+" sign is our operator.
   - In javascript , there are 5 types of operator are there :-
        
        1. Arithmatic operator  -> (+, -, * , /, % , **)
        2. assignment operator -> (=, +=, -=, *=, /=, **=)
        3. Comparison operator -> (==, !==, ===, <, >, <=, >=)
        3. logical operator -> ()
        5. unary operator -> ()

   Conditional statement :-
    
    - To impliment some condition in the code .
    - There are 3 types of conditional statement are there :-

        1. if-condition :-
          
          - if condition is true then statement is true.
          - Syntax ->
          if(condition){
            statement
          }

        2. if-else condition :-

           - if conditon is true then statement is true otherwise  false.
           - Syntax ->
            if(condition){
               
              statement
            }
            else{
               statement
            }
         3. if-elif conditon :-
           
            - it's cheeck the condition multiple times , where the condition is true it returns the statement.
            - Syntax ->








   Loops in Javascript :-
    
      - loops are used to execute a piece of code again and again.
      - there are 5 types of loops are there :-
       
        
          1. for loop :-
            
            - Syntax ->
              
              for(initialization; conditoion; updation)
                   {
                     statement:

                   }
                   Ex- we want to print "javascript" 5 times.

                   ans-

                   for( let i = 1; i <= 5; i++)
                   {

                   console.log("javascript)

                   }

                    working -->
                     
                     i = 1 -> javascript
                     i = 2 -> javbascript
                     i = 3 -> javascript
                     i = 4 -> javascript
                     i = 5 -> javascript


          2. while loop :-
              

              - Syntax -->
               
                initialization;
                while(condition)
                {
                  statement;
                  updation;
                }

          3. do-while loop :-
           
              - Syntax -->
               

                initialization;
                do{
                statement;

                } while(condition)

          4. for-in loop :- It iterates on string & array
          5. for-of loop:- it iterates on objects.

               
String in javascript :-
 
  - basically string is a sequence of character used to represent text.
  - create a string  -> let str = "web-boket".
  - we calculate the string length -> str.length property
  - we calculate the string index -> str[0], str[1], str[2], etc...


String literals & interpolation :-

   
   String literals :-
     
   - it's a way to have embedded expression in string.
   - it's denoted by symbol ''.
   
   String interpolation :-
   
   - To create string by doing substitution of placeholder.
   - EX- -> string text $(expresddion ) string text.

   Escape symbol in String :-
    
      1. \n -> new line
      2. \t -> new tab
 
   String methods :-

    1. str.toUpperCase()
    2. str.toLowerCase()
    3. str.trim()
    4. str.slice(start , (end-1))
    5. str1.concat(str2)
    6. str.replace(oldVal , newVal)
    7. str.replaceAll(oldVal , newVal)
    8. str.charAt(idx)




Array in Javascript :-

   - array is acollection of items.
   - Ex- let arr = ["iron man", "Hulk", "spider-man", ]
   - array index starts from "0".
   - indexing of array -> arr[0], arr[1], arr[2] etc...

   Looping over an array ->

    - loop -> iteration
    - syntax ->
       
      for( let i = 0; i < arr.length(); i++)




   Methods of array :-

      1. push() -> add an element to end of an array
      2. pop() -> remove from the end of an array
      3. toString() -> convert array to an string
      4. concate() -> add two or more array / join multiple array
      5. unshift() -> add an element to the start of an array
      6. shift() -> remove an element to the start of an array 
      7. slice() -> return a piece of an array
      8. splice() -> change original array(add , remove, replace)
      
      

     

      
 Function in Javascript :-

 - it is a block of code perform specific task, can be invoked or called whenever we need.
 - EX- (in-build function)
  

    1. console.log("hello)  --> in this code  .log() is a function.
    2. "abc" , toUpperCase() --> in this code toUpperCase() is a function
    3. [1,2,3].push(4) --> 


  There are 2 types of function
    1. normal funtion :-

        - Type A function -->

         // Function creation ->
          

              function function_name(){
               // do some task

              }

              // function calling ->

              function_name()

         - Type B function -->
             
             // Function creation ->
          

              function function_name(parameter_1, parameter_2){
               // do some task

              }

              // function calling ->

              function_name(arg_1, arg_2)

    2. Arrow function :-

      - it is Aa compact way of writing a function.
      - it uses a map() function to retrive  the backend data, filter()
          function for filterise our data etc..
       
       // Function creation ->
          

              const function_name = (parameter_1 , parameter_2) => {
               // do some task

              }

              // function calling ->

              function_name(arg_1,arg_2)


         Normal function ->
           
           function sum(a,b){
            return a + b;

           }
           sum(2,3)


         Array function ->

           const sum = (a , b) => {
            return a+b;

           }
           sum(2,3)


  Practice Question -->
    
       1. create a function using the "function" keyword that takes a string as an argument & return the number of vowels in that string.(TCS)
       2. 


       
  Map Method in Js :-

    - create a new array with  result of some operation , the value it's callback return are used to form a new array. Normally we create a new array by calling the function in every array element.
    - map does not change the original array.
    - it does not execute the function for empty array.
    - Syntax :-

       arr.map(callbackFunction(value, index, array))

       Filter Method/function in JS :-

       - create a new array of element that gives true for a condition/filterization.
       - ex- all even array in the given digits.

       let newArr = arr.filter(val)=> ({
         return val %2== 0;
         
       } )

      For each loop in array  :-
      -













Advance JS :-
   
   1. DOM
   2. Evet & Event handling 
   3. Sync & Async code (promise ,.then, .catch, async & await)
   4. API handling



   DOM in Javasript :-

    - DOM stands for document object model.
    - when a web page is loaded , the browser create a document object model of that page.
    - The HTML DOM model is constructed as a tree like structure.


      windows -> document -> HTML -> Head -> meta tags & title -> body -> h1 , h2 , img etc...


 Why we used DOM in Javascript :-
   
   - Javascript can change all the HTML element in the page.
   - Javascript can create , delete or edit any HTML page directly through DOM.
   - Javascript can also access CSS styling directly.


 Window object :-

   - The window object represents an open window in a browser .
   - It is a browser object & it is automatically created by browser.
   - It is also a global object with lots of properties & methods.
       
 DOM manipulation :-
  
   1. selecting with ID -> document.getElementsByID("myID")
   2. selecting the class -> document.getElementsByClassName("myClass")
   3. selecting with tag -> document.getElemetntsByTagName("p")
   4. Query selector ->
     
      - document.querySelector("id/class/tag")
      - document.querySelectorAll("id/class/tag")


   5. Attributes ->
     
      - getAttribute(attr) -> to get the attribute value
      - setAttribute(attr, value) -> to set the attribute value



   6. Insert elemnt ->
      
      - node.append -> adds at the end of node (inside)
      - node.preend -> add at the start of the node (inside)
      - node.after -> adds after the node (outside)
      - node.before -> adds before the node (outside)


   7. delete element ->
     
      - mode.remove(ele) -> remove the node


Event in Javascript :-
 
  - The change in the state of thr object is known as event.
  - Some famous events are ....
   
      1. Mouse events(Click, dblClick)
      2. Keyboard event (keypress, keyUp, keyDown)
      3. Form event
      4. Print event..

 Event Handling :-
  
   - Syntax ->
       
       node.event = => {
         //handle here
       }

 Event Object :-

   - It is a special object that has details about the event.
   - All event handler have access to the event objects properties & methods.
   - Syntax ->
       
       node.event = (e) => {
         //handle here
       }

   - In methods you can get -> e.target, e.type, etc...
      
Practice task :-
 Q. Create a toggle button that changes the screen to dark mode when clicked & light mode when clicked again.
 