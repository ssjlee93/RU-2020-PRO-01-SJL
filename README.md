# randomname-2020-05-pro-01-sjl# randomname-2020-05-pro-01

## Projet name : Health product scanner: Healthy Eats 

* Justin Munoz; (Nutritionix main);
* Dan DiPrenda; (HTML,CSS, Bootstrap main);
* Steve S. Lee; (Wal-mart main);

Goal: Show efficienty of calories consumed per dollar // 
    Show a list of calories efficiency 

1. Input a food product 
2. AJAX call Nutritionix
3. AJAX call wal-mart 
4. Price of an item and its nutrition 
    price efficiency of calories consumed? 
    price vs calories 
    $1 spent you consumed # of calories 
5. (localStorage and save calories count in list format 

Basic sketch 
![Screenshot of the project](/PaintSketch.png)

* Modal for initial input  (equiv to prompt);
* AJAX call once the modal submit button is pressed  
    * both AJAX calls made 
* left hand side: nutritional facts img and product img 
* main create a table of lists 

Modals: comes in when input value is not string. 
if an error occurs (for cases that wal mart has an item and nutritionix does not and vice versa )

## Upon finishing the pro
* I spent majority of his time looking for an API that works for this pro. 
* Some new technologies we've visited: 
1. Greensock.js: animating js library 
2. Materialize: CSS framework. Bootstrap alternative that overlaps with Bootstrap. 
3. Material Design for Bootstrap: CSS framework that works with Bootstrap
4. OAuth type APIs: OAuth requires the user to login to use the APIs 
5. Google shopping API and Amazon API
6. Angular.js: too hard for me yet 
7. Polymer: too hard for me yet 
8. Microsoft ASP.NET: too hard for me yet. 
9. Postman: an application that makes ajax calls easily. I can test an ajax call or create the ajax code block through the application
10. Wegmans API: the public api was supposed to give us prices of grocery items. Sometimes it works and sometimes it doesn't. So we abandoned it. 
11. Wal-mart API: the registration for a new account and subsequently a new api key was unavailable. 
12. Google shopping api from rapidapi: the api only returns prices, incorrect or undesired item name, some information in the responses were missing. 
13. Amazon prices api: no grocery item availabe, and all items were referenced with ASIN. 

* When using Github with other people, it is best that each person takes a shift and push to the github. Unless I learn how others use Github, I believe it's best to take turns and make edits, not simultaneously working. 
* Asynchronus problem: when ajax calls are made, sometimes functions must await for the ajax call to finish then 
* ASIN, UPC, EAN: different ways products are identified. ASIN is Amazon marketplace, UPC for US in general, EAN for Europe. 
* the final product uses Grocerybear and Nutritionix. 
* technologies others have found in class: 
1. CORS error (cross origin resource sharing): an error when Chrome browser's HTTP request does not match the response returned by an ajax call.
2. YouTube data api: supports both api key and OAuth 
3. Edamom api
4. Animate.css
5. Anime.js
6. face++ api
7. Hoever.css
* Instructor's note: no api is created equal. Some doccs suck. Keep these in mind when making an api. 














