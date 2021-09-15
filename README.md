# Web scraping with Java in Jsoup

<!---
titlePictureSoup
-->
![sigmund-yXiLaaYwg_E-unsplash](https://user-images.githubusercontent.com/47083513/130665579-e33f257a-c314-4c24-85e0-3de78ebcf597.jpg)

## Introduction
- As our society has entered and now currently resides in the era of big data, data collection has become a booming industry. For the Java programming language there is no better choice for data collection than the Jsoup library. This article will show you how to get started with Jsoup and even introduce some of the more complex parts of web scraping.

## Table of Contents
 
<!-- TOC -->


 - [What is Jsoup](#j-soup)
 - [Getting started](#getting)
 - [Jsoup methods](#beggining)
 - [CSS selectors](#css)
 - [Dealing with pagination](#pagination)
 - [Disguising the requests](#hidden)
 - [Rendering JavaScript](#javascript)
 - [Conclusion](#final)
    
    

<!-- /TOC -->




## <a name="j-soup">Jsoup</a>
- Jsoup is an open-source Java library designed to parse, extract, and manipulate data stored in HTML documents. it was created in 2009 by Jonathan Hedley to deal with all varieties of HTML found in the wild.

## Basics of Jsoup
- There are 3 main classes that you will most often deal with in Jsoup:

 	- `Element` : a class that represents an HTML element consisting of a tag name, attributes and Child nodes. From an Element, you can extract data, traverse, and manipulate the HTML.
 	
 	- `Elements` : a class that represents a List of type Element and consists of methods that act on every element in the list.

	- `Document` : a class that represents a HTML document.


## <a name="getting">Getting Started</a>
- To give this project some structure, use Maven. If you are unfamiliar with Maven, it is an advanced built tool that along with a lot of other bells and whistles will give the project some much needed structure. To create this project, use the Maven quickstart archetype. Copy and paste the code below into your console.
```
mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false
```

- This assumes that you already have Maven installed on your local machine. If you do not have Maven installed then please visit this the link [HERE](https://books.sonatype.com/mvnref-book/reference/installation.html) and follow the instructions to download maven.


## Adding Jsoup
-  To add Jsoup to the project, add the Maven dependency (shown below) for it to the dependency list which can be found inside the Maven POM.xml file.
```
<dependency>
    <groupId>org.jsoup</groupId>
    <artifactId>jsoup</artifactId>
    <version>1.14.2</version>
</dependency>
```

- Now with the basic file structure set up, lets learn about some of the most important methods in Jsoup

## <a name="beggining">Important methods for retrieving elements</a>
- At the core of any good web scapping algorithm is the ability to find the HTML element with the desired data. The methods provide this ability.

- `getElementById(String id)`: this method returns the first element with the matching id

- `getElementsByClass(String className)`: this method returns a Elements object of all the elements that have the specified class name. Also, notice the method is `getElementsByClass` not `getElementByClass`.

- `getElementsByAttribute(String key)`: this method returns a Elements object and each element will have the specified attribute.


## Important methods for retrieving element data
- Once an element is found data will need to be extracted from it. The methods below provide this ability.

- `attr(String key)`: returns a String which is the attribute value from the matched element that has the specified attribute. If no elements contain the attribute then an empty string is returned.

- `html()`: returns a String of all the element's inner HTML.

- `text()`: returns a String of all the matched elements. Very useful for quickly eliminating all unwanted HTML and only returning the desired text. It should be noted that if there is multiple text, text() will return a unescaped String of all the text combined. That result is usually unsatisfactory in data collection. To remedy this situation use `.eachText()` instead.

- `eachText()`: returns a String list, where each element in the list is a matched string returned by text().

- `first()`: returns the first matched element, or null if contents are empty. Very helpful when used on Elements to return the first element in the list.

## Simple Jsoup Example
- The code below is a basic example showing how to start using Jsoup. If you run the code and check the console it will show the results of each method. Also, If you are unfamiliar with Jsoup I recommend you use this code to better understand the methods Jsoup provides. Use the methods that are not shown in the example, `getElementById(String id)`, `html()` or `attr(String key)`. Experimenting with provided methods in this way will give you a solid understanding of the basics of Jsoup.

```
public static void main(String[] args) {
		
		Connection connection = Jsoup.connect("https://www.javawebscrapingsandbox.com");
		
		try {
			Document doc = connection.get();
			Elements example = doc.getElementsByClass("item");
			
			System.out.println(example);
			System.out.println();
			System.out.println(example.first());
			System.out.println();
			System.out.println(example.text());
			System.out.println();
			System.out.println(example.eachText());
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
	}
```

## <a name="css">CSS Selectors</a>
- Considered a more advanced topic of web scaping, css selectors make use of the structure of a webpage to navigate through the HTML and select the wanted data. To use css selectors in Jsoup, use the `select(Evaluator)` method which is avaliable in the Document, Element and Elements classes. The `select(Evaluator)` method takes an `Evaluator` which is used to find elements that match the supplied `Evaluator`. Below are examples of the `Evaluator`s that Jsoup provides.

- `tagname`: find elements by tag

- `[attribute]`: find elements with attribute

- `.class`: find elements by class name


## <a name="scaping">CSS selectors example. Scaping data from a table</a>
- When scrapping data from a website, it is always best to be kind an courteous with your scrapping practices. If you make too many requests, you could get your IP banned or even crash the site. You should use web scraping techniques as a last resort, always check if the website you are trying to scrape has an API before you start scaping.
- The site that we are going to be scrapping today is a website made specifically for practicing web scrapping, it can be found [HERE](https://www.javawebscrapingsandbox.com/product). Shout out to [Kevin Sahin](https://twitter.com/SahinKevin) for making a sandbox website to practice web scraping.

### The table that we will be scraping from:
<!---
 ScrapingDataFromTable
-->
<img width="1127" alt="ScrapingDataFromTable" src="https://user-images.githubusercontent.com/47083513/131031242-781738b3-0dc3-4bc1-ac24-dee11df973b0.png">


- First lets write a simple code that will return the whole HTML document for us:

```
Document doc = Jsoup.connect("https://www.javawebscrapingsandbox.com/product").get();
System.out.println(doc);
```
- Once you paste this code into the main function a red line indicating an error will appear, ignore it for the moment. Lets dive a little deeper into the code that was just written.

- `Document :` a class that is used to represent a HTML document.

- `Jsoup :` The public access point that allows access to the main Jsoup functionality.

- `.connect("") :` creates a new session with the given URL string

- `get() :` executes a get request and returns a HTML document




- Now in order to deal with the exception error  surround the code with a try/catch blocks

```
 try {
     Document doc = Jsoup.connect("https://www.javawebscrapingsandbox.com/product").get();

     System.out.println(doc);

    } catch (IOException e) {
     // TODO Auto-generated catch block
     e.printStackTrace();
    }

```
- Now when this code runs, it will print out the entire html document that is stored inside the variable of doc. With that done, move on to the more complex bit, which is scraping the data from the html document inside of doc.

- In The code example below, we are using a foreach loop to loop over the HTML document(doc) and for each item inside of table we want to grab the name, url, price and then print them out together.

- `.select( "table.ui.celled.table tr" )` : uses a css class selector `table.ui.celled.table` in combination with a css tagname selector `tr` to get access to the table rows. 

- `.select("td:nth-of-type(1)").text()`: uses a css tagname selector `td` in combination with the pseudo-class notation of `:nth-of-type(1)` to find the first td Element. `text()` returns a String of all the text in the `td` Element. 

- As you can see from the example below, CSS selectors really shine when they are combined together. If you wish to read more about css selectors and pseudo-class selectors  I recommend reading the documentation [HERE](https://jsoup.org/apidocs/org/jsoup/select/Selector.html)


```

 try {
     Document doc = Jsoup.connect("https://www.javawebscrapingsandbox.com/product").get();


     for(Element row: doc.select(
       "table.ui.celled.table tr"
       )) {

       final String name = row.select("td:nth-of-type(1)").text();
       final String url = row.select("td:nth-of-type(2)").text();
       final String price = row.select("td:nth-of-type(3)").text();

       System.out.println(name +" "+ url +" "+ price);
     }

    } catch (IOException e) {
     // TODO Auto-generated catch block
     e.printStackTrace();
    }

```



## <a name="pagination">Dealing with pagination</a>
- In web scraping a common task you will come up against is dealing with pagination(extra pages).This section will show you one way of how to deal with pagination. Now, of course you can deal with pagination any way you seem fit and what works for one site may not work for another. However, the code in this section offers an easy and intuitive solution for dealing with the pagination presented to us today.
<!---
 PaginationFirst
 PaginationLast
-->
- As you can see from the pictures below the main focus for the code will be the arrows highlighted in red. Essentially all it comes down to checking if there is a right arrow. If the arrow does not exist then the code knows to stop scraping.

<img width="1145" alt="PaginationFirstpng" src="https://user-images.githubusercontent.com/47083513/131031468-78c74217-ab41-4ac9-98bb-3c856ecae4fd.png">

<img width="1151" alt="PaginationLast" src="https://user-images.githubusercontent.com/47083513/131031749-cb84fcea-b767-40c9-bd32-5e6e82b34d5f.png">


- The code below is exactly the same as the previous code, except for the private member variable `private Document doc;`. It will be used to hold the document that will be scraped.
- To eliminate code reuse, create a new class in the maven project and call it `Scraper`, paste the code below:
```
public class Scraper {
private Document doc;
	
	public Scraper(Document doc) {
		this.doc = doc;
	}
	
    public void scrape() {
			
			for(Element row: doc.select(
					"table.ui.celled.table tr"
					)) {
				
					final String name = row.select("td:nth-of-type(1)").text();
				        final String url = row.select("td:nth-of-type(2)").text();
					final String price = row.select("td:nth-of-type(3)").text();
					
					System.out.println(name +" "+ url +" "+ price);
			}	
    }

}
```



- The next step is to create a new class and paste the code below into the main method.

- `.select("i.right.chevron.icon")`: another example of using the css class selector.

- `.hasClass("right chevron icon")`: returns a boolean to test if this element has the class `right chevron icon`

- The code below has a while loop, this allows our bot to continously make requests with `String urlString = String.format("https://www.javawebscrapingsandbox.com/product/%s", urlNum);` and then scrape that the data that is returned with `Scraper scraping = new Scraper(doc);`(the previous class created). `Elements data = doc.select("i.right.chevron.icon");` is used to get the right arrow. `if(data.hasClass("right chevron icon")){}` is used to check if if data has a Element with the class of `right chevron icon` , if there isn't then that means the bot has entered the last page and to enter the else block. `scraping.scrape();` is used to scrape the last page, lastly printing out `End of pages` and breaking out of the while loop.

```
public static void main(String[] args) {
		
		try {
			int urlNum = 1;
			
			
			while(true) {
				
				String urlString = String.format("https://www.javawebscrapingsandbox.com/product/%s", urlNum);
				Connection connection = Jsoup.connect(urlString);

				
			Document doc = connection.get();
			Scraper scraping = new Scraper(doc);

				
				Elements data = doc.select("i.right.chevron.icon");
				
				if(data.hasClass("right chevron icon")) {
					System.out.println(urlNum);
					
					//how we scrape
					scraping.scrape();
					
					urlNum ++;
					
				}else {
					scraping.scrape();
					System.out.println("End of pages");
					break;
				}
				
			}
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		
	}
```



## <a name="hidden">Disguising the requests</a>
- For various reasons it is best to make web scraping bots seem as close to natural interactions as possible. The most obvious reason is to avoid anti-bot mechanisms that some websites implement. The two methods that this bot is going to employ are adding a `User-agent` and space the time between our requests.
```
Thread.sleep(2000);
connection.userAgent("Mozilla")
```
- Just make sure that these two pieces of code are inside of the while loop and before the call to `Elements data = doc.select("i.right.chevron.icon");`.  The sleep() method causes the current thread to suspend execution for two senconds, which makes our bot look a little more human. This code works because the code we are writing is small, but if you are making something that is multithreaded, then the sleep() method should not be called on the main thread. `userAgent("Mozilla")` is used to set the request user-agent header and make the request seem more natural. If you want to learn more about how to hide your bots actions you can find more information [HERE](https://www.scrapingbee.com/java-webscraping-book/#6-stay-under-cover).


## <a name="javascript">Javascript Rendering</a>
- When a page is queried from a website, what gets sent back is HTML which Jsoup is able to parse, because it is an HTML parser. However, most websites include JavaScript in that HTML, or linked from that HTML, which will propigate the page with content. Browsers like chrome are able to populate the page, Jsoup is not. So long story short Jsoup will download the HTML and the JavaScript but will not be able to execute the JavaScript and if the website has JavaScript to run, which most do, the webpage will not be rendered properly. This will make scraping the webpage with Jsoup alone ineffective, what is needed is a headless browser. A common headless browser today is `headless chrome` use that in combination with `Selenium` and the website wil be able to be scraped as it appears on screen.


## <a name="final">Conclusion</a>
- Big data is here to stay, let try to enjoy the ride. 
- Jsoup is an incredible tool and if you wish to find out more check out the documentation, [HERE](https://jsoup.org/)


