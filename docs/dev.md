
# Development Notes/Explanations      9.17.18

**Ok... so how does this program even work?**

Student selector is a chrome extension and therefore behaves like one.  If you are unfamiliar with the anatomy of chrome extensions here are the specifics of how this program in particular functions.  Each script has its own job.
## Manifest exists.
* **manifest.json** is where I declared the permissions and images used in the extension.  It is the one required file of any chrome extension.

## The javascript files deal with the programming logic

* **background.js** is responsible for storing and retrieving the lists of students for each period.
* **detect.js** is responsible for randomizing the students from given period as well as setting up event listeners for the popup.html
* **edit.js** is responsible for allowing the editing of a list of students and tells the background.js script to save the new student list.

## The html files are for User Interface

* **popup.html** initial file which the user interacts with.
* **edit.html** file in which user inputs new student names
* **acknowledgements.html** cites the sources used in the creation of the project.

## The one stylesheet to rule them all

* **style.css** makes the html files not look terrible.


# More specific details

## Why use ```chrome.storage``` to store student names instead of having a local text file?

I choose to use chrome.storage for the sake of usability.  If I had local text files the extension would be able to read the contents using an XMLHttpRequest() but wouldn't be able to write any new data to the file which the user would have to do manually (which might not even by possible if the extension is packed).

In addition ```chrome.storage```isn't too hard to use.  The [google chrome page on chrome.storage](https://developer.chrome.com/extensions/storage) explains the basics of the functionality pretty well.  

Basically to store an array you would just write the following:
```javascript
// make array of names
let myArray = ["John", "Dave", "Anderson", "Rye", "Jane", "Elizabeth", "Mr. Darcy"];
// save names in local storage
chrome.storage.local.set({"anyKeyHere": myArray});
```
It is saved much like a dictionary value in python.  To retrieve my array all I would now need to do is call the key, which in my case is ``` anyKeyHere ```.

And it is also fairly simple to call for my array.
```javascript
chrome.storage.local.get({"anyKeyHere": []}, function(storedArray){
		console.log(storedArray.anyKeyHere); //prints the array into console
});

```
chrome.storage also has some more interesting features, such as synced storage instead of local as I opted to use.  However storing and retrieving arrays was all I decided to use for this project.

Also chrome.storage can only retrieve values it stores on the same script (to my knowledge) which is why I had to communicate between scripts.  How did I do that?  The explanation is below.

## Communication between scripts.

I was able to use Long Lived Connections which are a lot better explained by this [stackoverflow post](https://stackoverflow.com/questions/13546778/how-to-communicate-between-popup-js-and-background-js-in-chrome-extension) which helped me out.

I had a really sloppy way of integrating Long Lived Connections into the extension so you will probably be better off trying to make them yourself than using my shoddy attempts.






