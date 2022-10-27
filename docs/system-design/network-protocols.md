---
id: system-design-network-protocols
title: Network Protocols
---

IP packets. TCP headers. HTTP requests. As daunting as they may seem, these low-level networking concepts are essential to understanding how machines in a system communicate with one another. And as we all know, proper communication is key for thriving relationships!

Network protocols referred by their acronyms IP, TCP, UDP, HTTP.

It's a communication protocol for when two human being interact with each other. 

Network protocol consists of messages that gonna be sent over network.

It consists of all type of information like the data type of the data, how the data should look like, who/when to send data to others etc

### IP
IP stands for Internet Protocol. IP is literally a internet protocol address. 
One machine interacts with another machine through data that data is called IP packets. 

IP packets have two sections. IP header and data. 

All the informations are stored in bites

Headers 
    - contains the source IP address and destination IP address. 
    - total size of the packet
    - versions of the IP address protocol ex: ipv4, ipv6
    - size of the header is very small 20 to 60 bites

Data
    - information goes from one computer to another computer
    - IP packets are limited in size

Total size of the IP packets are 2^16 bytes ~ 65,000 bytes

### TCP
Transmission Control Protocol

IP packets are limited in size. Because of that we can't send big chunk of data at a time. So, we might know all the packets are sent correctly or not. That's where TCP would help. 

TCP built on top of the Internet Protocol. 

Before sending any data, TCP will make a connection between two computers that is called handshake. 
