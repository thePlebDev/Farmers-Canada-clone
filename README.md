# Webscraping with Java in Jsoup

![sigmund-yXiLaaYwg_E-unsplash](https://user-images.githubusercontent.com/47083513/130665579-e33f257a-c314-4c24-85e0-3de78ebcf597.jpg)

## Introduction
- At the best of times, the internet can be a very confusing place. This post will act as a guide to give a better understanding of where the internet came from and how to utilize Jsoup to harness its awesome power.


## Table of Contents
 
<!-- TOC -->


 - [Breif Historty of the Internet](#history-of-internet)
 - [What is HTTP?](#http)
 - [Getting started with Maven](#getting)
 - [Jsoup](#j-soup)
 - [Scaping data from a table](#scaping)
 - [Dealing with pagination](#pagination)
 - [Disguising the requests](#hidden)
 - [Conclusion](#final)
    
    

<!-- /TOC -->


## <a name="history-of-internet">Breif Historty of the Internet</a>
- To be able to fully appreciate the sheer magnatude of what Jsoup is allowing us to do, we need to take a brief tour through the history of the internet. Starting at the Telegraph.

 
### Telegraph
 - Created in 1844, it is hard to put into words how revolutionary the Telegraph was. Prior to the Telegraph, The United states of America had the famed [Pony Express](https://en.wikipedia.org/wiki/Pony_Express) to deliver information. At it's peak, the Pony Express could deliver  information from one side of the United States to the other in 10 days. If you follow the data conversions provided [HERE](https://eager.io/blog/communication-pre-internet/) under the Pony Express section, we get a data transmission rate of about 6 bits per second. Of course this does not include the latency issues that riding horses coast to coast would invoke, so in reality it would be much slower.
  - When the Telegraph was put into use, data transmission became almost instant and the death of the Pony Express became definite. The Telegraph  used dots and dashes(similar to binary) to communicate information from one station to another. The first message sent was the incredibly melancholy quote of, `WHAT HATH GOD WROUGHT`, from the supreme court chamber in Washington, D.C, USA to a train station in Baltimore, Maryland, USA.



### ALOHAnet 
 - Fast forward to 1971 and at the University of Hawaii ALOHAnet was created, arguably the true grandfather of the internet. Born out of the need for the university to connect all of its campuses and influenced by the geographical hinderance of the campuses all being on different islands. These unique restrictions would ultimately lead to the world's first wirelessly connected network. The technology and protocols developed for ALOHAnet are still used and influence most of what our modern virtual world runs on. Fun fact, ALOHAnet celebrated its 50th anniversary this year. So make sure to say happy birthday next times you use the internet :) .


### The Internet
- In 1983, fueled by the [Cold War](https://en.wikipedia.org/wiki/Cold_War) was the invention of the internet. Which at its most simplistic description is just a network of computers that have all agreed to communicate information in the same way. However, the internet was mostly used by researchers, academics and university students to share research material. The internet was essentially unknown outside of the academic and research communities. The World Wide Web(What you and I think of as the internet) was invented by British scientist Tim Berners-Lee in 1989 while working at CERN. When we type in `WWW` into our browser, we are using the World Wide Web. Now, it is important to point out that the internet and the World Wide Web are two completely different things. The internet is the underlying technological infrastructure that we use to send information from one computer to another. The World Wide Web is a collection of connected web servers that have specified locations that we can access to get stored information. A common analogy is that roads are the internet, while cars and shops are the World Wide Web.


## <a name="http">What is HTTP</a>
  - The Hyper Transfer Protocol (HTTP) is a standard that defines how a web client talks to a server and how data is transferred from the server back to the client. For each request from the client to the server, there are a series of 4 steps:
  
      1) The client opens a TCP connection(ensures proper data transmission) to the server on port 80,by default; other ports may be specified in the URL.
      
      2) The client sends a message to the server requestiong the resource at a specified path. The request includes a header, and depending on the request, data for the request.
      
      3) The server send a response to the client. The response contains the appropriate data for the request.
      
      4) The server closes the connection. 

### Structure of a HTTP Request.
- Full information on HTTP can be found [HERE](https://www.scrapingbee.com/java-webscraping-book/#1-web-fundamentals)
```
GET /how-to-log-in-to-almost-any-websites/ HTTP/1.1
Host: ksah.in
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Encoding: gzip, deflate, sdch, br
Connection: keep-alive
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36

```
- Host : The domain name of the server, if no port number is given, is assumed to be 80.
 
- User-Agent : Contains information about the client originating the request, including the OS information. In this case, it is my web-browser (Chrome), on OSX. This header is important because it is either used for statistics (How many users visit my website on Mobile vs Desktop) or to prevent any violations by bots. Because these headers are sent by the clients, it can be modified (it is called “Header Spoofing"), and that is exactly what we will do with our scrapers, to make our scrapers look like a normal web browser.

- Accept : The content types that are acceptable as a response. There are lots of different content types and sub-types: text/plain, text/html, image/jpeg, application/json …
 
- Cookie : name1=value1;name2=value2… This header field contains a list of name-value pairs. It is called session cookies, these are used to store data. Cookies are what websites use to authenticate users, and/or store data in your browser. For example, when you fill a login form, the server will check if the credentials you entered are correct, if so, it will redirect you and inject a session cookie in your browser. Your browser will then send this cookie with every subsequent request to that server.

- Referer : The Referer header contains the URL from which the actual URL has been requested. This header is important because websites use this header to change their behavior based on where the user came from. For example, lots of news websites have a paying subscription and let you view only 10% of a post, but if the user came from a news aggregator like Reddit, they let you view the full content. They use the referer to check this. Sometimes we will have to spoof this header to get to the content we want to extract.


## <a name="getting">Getting Started</a>
- To give this project some structure use Maven. If you are unfamiliar with Maven, it is an advanced built tool that along with a lot of other bells and whistles will give the project some much needed structure. To create this project, use the Maven quickstart archetype. Copy and past the code below into your console.
```
mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false
```

- This assumes that you already have Maven installed on your local machine. If you do not have Maven installed then please visit this the link [HERE](https://books.sonatype.com/mvnref-book/reference/installation.html) and follow the instructions to download maven.


## <a name="j-soup">Jsoup</a>
-  If you are unfamiliar with Jsoup, it is a Java library for working with real-world HTML. It provides a very convenient API for fetching ULRs, extracting and manipulating data. To add Jsoup to the project  add the Maven dependency for it, which can be found below:
```
<dependency>
    <groupId>org.jsoup</groupId>
    <artifactId>jsoup</artifactId>
    <version>1.14.2</version>
</dependency>
```
- Make sure to add the code listed above into the dependency list which can be found inside the POM.xml file.
- Now that  everything set up we can begin scraping our data.


## <a name="scaping">Scaping data from a table</a>
- When scrapping data from a website, it is always best to be kind an courteous with your scrapping practices. If you make too many requests, you could get your IP banned or even crash the site. You should use web scraping techniques as a last resort, always check if the website you are trying to scrape has an API before you start scaping.
- The site that we are going to be scrapping today is a website made specifically for practicing web scrapping, it can be found [HERE](https://www.javawebscrapingsandbox.com/product). Shout out to [Kevin Sahin](https://twitter.com/SahinKevin) for making a sandbox website to practice web scraping.

### The table that we will be scraping from:

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

-  As you can tell from the code above, we are using a foreach loop to loop over the HTML document(doc) and for each item inside of table we want to grab the name, url, price and then print them out together.

`doc.select( "table.ui.celled.table tr" )` : is what gives the code a list of items to loop over, `table.` is used because we are scaping a table, if we were scaping a div then it would be `div.`. `ui.celled.table` is actually the class name of the table. That is not entirely true, the actual name of the class is `ui celled table`, the browser adds the dots automatically. Lastly the `tr` is telling the select() method to get each table row

`final String name = row.select("td:nth-of-type(1)").text();` : this is a demonstration of how to harness the power of CSS selectors. `td` is used to define a standard data cell in an HTML table. `nth-of-type(1)` is the CSS selector that allows the capture of the first column in the table's row. `text()` is used to get the string value from the element that is returned. This process is then repeated with url and price, allowing us to format everything nicely with ` System.out.println(name +" "+ url +" "+ price);`.

## <a name="pagination">Dealing with pagination</a>
- In web scraping a common task you will come up against is dealing with pagination(extra pages).This section will show you one way of how to deal with pagination. Now, of course you can deal with pagination any way you seem fit and what works for one site may not work for another. However, the code in this section offers an easy and intuitive solution for dealing with the pagination presented to us today.

<img width="1145" alt="PaginationFirstpng" src="https://user-images.githubusercontent.com/47083513/131031468-78c74217-ab41-4ac9-98bb-3c856ecae4fd.png">

<img width="1151" alt="PaginationLast" src="https://user-images.githubusercontent.com/47083513/131031749-cb84fcea-b767-40c9-bd32-5e6e82b34d5f.png">


- As you can see from the pictures above the main focus for the code will be the arrows highlighted in red. Essentially all it comes down to checking if there is a right arrow. If the arrow does not exist then the code knows to stop scraping.
- To eliminate code resuse, create a new class in the maven project and call it `Scraper`, paste the code below:
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

- The code above is exactly the same as the previous code, except for the private member variable `private Document doc;`. It will be used to hold the document that will be scraped.

- The next step is to create a new class and paste the code below into the main method.

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
- The code above is fairly straight forward. Notice the while loop, this allows our bot to continously make requests with `String urlString = String.format("https://www.javawebscrapingsandbox.com/product/%s", urlNum);` and then scrape that the data that is returned with `Scraper scraping = new Scraper(doc);`(the previous class created). `Elements data = doc.select("i.right.chevron.icon");` is used to get the right arrow. `if(data.hasClass("right chevron icon")){}` is used to check if if data has a Element with the class of `right chevron icon` , if there isn't then that means the bot has entered the last page and to enter the else block. `scraping.scrape();` is used to scrape the last page, lastly printing out `End of pages` and breaking out of the while loop.


## <a name="hidden">Disguising the requests</a>
- For various reasons it is best to make web scraping bots seem as close to natural interactions as possible. The most obvious reason is to avoid anti-bot mechanisms that some websites implement. The two methods that this bot is going to employ are adding a `User-agent` and space the time between our requests.
```
Thread.sleep(2000);
connection.userAgent("Mozilla")
```
- Just make sure that these two pieces of code are inside of the while loop and before the call to `Elements data = doc.select("i.right.chevron.icon");`.  The sleep() method causes the current thread to suspend execution for two senconds, which makes our bot look a little more human. This code works because the code we are writing is small, but if you are making something that is multithreaded, then the sleep() method should not be called on the main thread. `userAgent("Mozilla")` is used to set the request user-agent header and make the request seem more natural. If you want to learn more about how to hide your bots actions you can find more information [HERE](https://www.scrapingbee.com/java-webscraping-book/#6-stay-under-cover).


## <a name="final">Conclusion</a>
- The internet and web scraping are two increadly powerful things. However, you must always remember to be curtious of the pages you are scraping and mindful of how many requests you send to a server. 
- Thank you and may the internet be ever in your favour.


