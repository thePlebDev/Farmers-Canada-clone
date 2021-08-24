# Webscraping with Java in Jsoup

![sigmund-yXiLaaYwg_E-unsplash](https://user-images.githubusercontent.com/47083513/130665579-e33f257a-c314-4c24-85e0-3de78ebcf597.jpg)


## Table of Contents
 
<!-- TOC -->


- **[Breif Historty of the Internet](#history-of-internet)**<br>
    - [What is HTTP?](#http)
    - [Getting started with Maven](#getting-started)
    - [Jsoup](#j-soup)
    - [Installation](#installation)
    - [Setup](#links)
    - [Scaping a table](#whats-new)
    - [Dealing with pagination](#question)
    - [Conclusion](#license)
    
    

<!-- /TOC -->


## <a name="history-of-internet">Breif Historty of the Internet</a>
- To be able to fully appreciate the sheer magnatude of what Jsoup is allowing us to do, we need to take a brief tour through the history of the internet. Not including birds and horses, the first real means of communication was the Telegraph.

 ### Telegraph
 - Created in 1844, it is hard to put into words how revolutionary the Telegraph was. Prior to the Telegraph, The United states of America had the famed [Pony Express](https://en.wikipedia.org/wiki/Pony_Express) to deliver information. At it's peak, the Pony Express could devilver information from one side of the United States to the other in 10 days. If you follow the data conversions provided [HERE](https://eager.io/blog/communication-pre-internet/) under the Pony Express section, we get a data transmission rate of about 6 bits per second. Of course this does not include the latency issues that riding horses coast to coast would invoke, so in reality it would be much slower.
  - When the Telegraph was put into use, data transmistion became almost instant and the death of the Pony Express became definite. The Telegraph  used dots and dashes(simular to binary) to communicate information from one station to another. The first message sent was the incredibly melencoly quote of, `WHAT HATH GOD WROUGHT`, from the supreme court chamber in Washington, D.C, USA to a train station in Baltimore, Maryland, USA.


 ### ALOHAnet
 - Fast forward to 1971 and at the University of Hawaii ALOHAnet was created, which is argubaly the true grandfather of the internet. Born out of the need for the university to connect all of its campuses and influenced by the geographical hinderance of the campuses all being on different islands. These unique restrictions would ultimately lead to the worlds first wirelessly connected network. The technology an protocols developed for ALOHAnet are still used and influence most of what our modern virtual world runs on. Fun fact, ALOHAnet celebrated its 50th anniversary this year. So make sure to say happy birthday next times you use the internet :) .


### The internet
- In 1983, fuled by the [Cold War](https://en.wikipedia.org/wiki/Cold_War) we get the invention of the internet. Which at its most simplistic description is just a network of computers that have all agreed to communicate information in the same way. However, the internet was mostly used by researchers, academics and university students to share research material. The internet was essentialy unknown outside of the academic and research communities. The World Wide Web(What you and I think of as the internet) was invented by British scientist Tim Berners-Lee in 1989 while working at CERN. When we type in `WWW` into our browser, we are using the World Wide Web. Now, it is important to point out that the internet and the World Wide Web are two completly different things. The internet is the underlying technological infastructure that we use to send information from one computer to another. The World Wide Web is a collection of connected web servers that have specified locations that we can access to get stored information. A common anology is that roads are the internet, while cars and shops are the World Wide Web.


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


## <a name="getting-started">Getting Started</a>
- To give this project some structure  we are going to use Maven. If you are unfamiliar with Maven, it is an advanced built tool that along with a lot of other bells and whistles will give the project some much needed structure. To create this project, use the Maven quickstart archetype. Copy and past the code below into your terminal.
```
mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false
```

- This assumes that you already have Maven installed on you machine. If you do not have Maven installed then please visit this this link [HERE](https://books.sonatype.com/mvnref-book/reference/installation.html) and follow the instructions to download maven. 


## <a name="j-soup">Jsoup</a>
-  If you are unfamiliar with Jsoup, it is a Java library for working with real-world HTML. It provides a very convient API for fetching ULRs and extracting and manipulating data. To add Jsoup to our project we need to add the Maven dependency for it, which can be found below:
```
<dependency>
    <groupId>org.jsoup</groupId>
    <artifactId>jsoup</artifactId>
    <version>1.14.2</version>
</dependency>
```
- Before 
