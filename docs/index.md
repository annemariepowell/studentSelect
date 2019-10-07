# Student Selector 
## by Milan Donhowe, Jack Nelson and Anne Marie.

# [Dev Notes](dev.md)
# [IA Documentation](ia.md)
[Get it for free on the chrome web store!](https://chrome.google.com/webstore/detail/student-randomizer/lcipncfbfemopganndembnmjjnhbaomk)

![](https://raw.githubusercontent.com/MilanDonhowe/studentSelect/master/images/logo96.png)


A Computer Science Project/Chrome Extension to better randomly select students in class.


## Why?

We the development, being made up of high school students, know firsthand how hard it can be to get students to participate during class.  As such it is useful to be able to randomly select students to participate.  However conventional methods of randomly selecting students (popsicle sticks in can) can be tiresome and labor intensive to change for each period.  Student Selector fixes all of those problems by stream lining randomized student selection into a chrome extension for your easy consumption!

## How?

By using revolution technology such as the chrome.storage API we have a intuitive system of setting up your classes for randomization.

## Where are student names stored?
Student names are stored locally, not synchronously across browsers.

The names can be found under the file path: 

```%LocalAppData%\Google\Chrome\User Data\Default\Local Extension Settings```

## Acknowledgements

We are not gurus (omniscient programming gods) and as such we didn't know every detail of how to make this extension and had to look beyond ourselves to find the information we were lacking.  Here are the sources to the great sources of information that was used in the creation of this extension.

https://stackoverflow.com/questions/13546778/how-to-communicate-between-popup-js-and-background-js-in-chrome-extension
https://stackoverflow.com/questions/1033398/how-to-execute-a-function-when-page-has-fully-loaded
https://www.w3schools.com/colors/colors_picker.asp
https://fdossena.com/?p=html5cool/buttons/i.frag
https://developer.chrome.com/extensions/devguide
https://www.w3schools.com/js/default.asp

