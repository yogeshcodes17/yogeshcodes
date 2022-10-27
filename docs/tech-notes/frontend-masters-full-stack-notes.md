---
id: frontend-masters-full-stack-notes
title: Full Stack Notes (Frontend Masters)
---

- Someone who can build an application from start to finish called as a Full Stack Engineer.
- Frontend & Backend there is a lot. Frontend has lot of variations web, mobile, televisions, desktops, etc. The same for backend APIs, data analytics, security, reliability, databases, platform etc.
- Recruiters don't know what they need and they started to refer Full Stack so that anyone can work on anything. UI engineers is the very easy field to get into. Knowing Full Stack will help standout from the crowd.

### Command Line

- GUIs are opinionated. CMD is flexible and open many doors for customise the work.
- Consistent.
- Easier to automate/script.
- Commands:
    - cd - change directory
    - ls - list directory contents
    - pwd - print working directory
    - mkdir - make directory
    - rmdir - remove directory
    - cat - show file contents
    - man - command manual
    - less - show file contents by page
    - rm - remove file
    - echo - repeat input

### Shells

- A shell script is a computer program designed to be run by the Unix shell, a command-line interpreter. The various dialects of shell scripts are considered to be scripting languages.
- Shell - Command interpreter to interface with system. It'll help to talking to the OS.
- Terminal - Runs shell applications.
- Terminal is a wrapper on Shell. Bash/zsh are the shell applications.

Shell ⇒ application ⇒ Kernel

### Understanding the internet

- Many computers talking to each other by sending the requests and responses.
- A system of globally interconnected devices.
- Intranet - private internet, VPN. WAN, LAN server only accessible inside any organization
- IP - Internet Protocol - rules for PC to talk each other
- IP Address - label assigned to an internet connected device much like a postal address
- IPv4
- IPv6
- TCP - Transmission Control Protocol - lossless - widely used - error correcting
- UDP - User Datagram Protocol - only send don't acknowledge

ex: `ping [google.com](http://google.com)` useful for debugging the site to check is the site is alive or not. 

- DNS - Domain Name System - internet phone book - maps domain names to ip address
- domain - .com, .in - top level domain owned by countries.
- subdomain - blog, dev, etc. It's behaves like a separate site.
- ex: traceroute - `traceroute [google.com](http://google.com)`
    - It'll trace where all the route going.
    - How many hubs it's taking to reach the server
- ICMP - Internet Control Message Protocol - ping and traceroute will use the ICMP
- Packet - small chunk of information
- Net Neutrality - trust system to send the packages

### Servers

- **VIM:**
    - VIM - Vi Improved - runs in every server
    - Text editing - insert mode - i
    - Primary mode - command mode - ESC
    - Searching, saving, exiting - last line mode - :
    - Esc - quit - :q!
- Data Centres & the Cloud
    - Servers are custom built machine that serves the files
    - When you run application on server it'll handle everything for you to serve the client.
    - Very clean and secured.
    - Whole internet relay on data centres.
    - They consume massive power.
    - Same application running different parts of the world.
    - Elastic cloud - scaling and flexible cloud
    - Instead of buying servers and servers when we require we can let the work to do by the data centres.
- VPS
    
    
- Operating Systems
    - 
    
    ![Full%20Stack%20Notes%20961052c640ce44ba83e43c77e9afb945/Untitled.png](/images/full-stack-notes-operating-systems.png)
    

- SSH
    - fsfe → private key
    - [fsfe.pub](http://fsfe.pub) → public key
    - Secure Socket Shell
    - private key stored in the computer. public key will be used by server.
    - Messages can be only decrypted by private key.
    - Creating SSH keys
        - cd ~/.ssh
        - ssh-keygen
        - the public and private key will be created.
        - `ssh root@YOUR_IP` to connect remote server
- Domins
    - A record → maps name to IP address
        - www[.karthik.com](http://blog.karthik.com) → 23.45.676
    - CNAME → maps name to name
        - [blog.karthik.com](http://blog.karthik.com) → 23.45.676
        - the sub domain first resolves to the domain name and the to the ip address
    
    `dig karthikumapathi` dnd lookup utility 
    
- Server Setup
    - Update software
    - Create a new user
    - Make that user a super user
    - Enable login for new user
    - Disable root login

`apt update` Update software

`apt upgrade` Upgrade software

`adduser $USERNAME` Add new user

`usermod -aG sudo $USERNAME` - Add user to "sudo" group

`su $USERNAME` - Switch user

`sudo cat /var/log/auth.log` - Check sudo access

`cd ~` - Change to home directory

`mkdir -p ~/.ssh` - Create a new directory if it doesn't exist

`vi ~/.ssh/authorized_keys` - Create authorized_keys file and paste PUBLIC key

`chmod 644 ~/.ssh/authorized_keys` - Change file permissions

`sudo vi /etc/ssh/sshd_config` - Disable root login

`sudo service sshd restart` - Restart ssh daemon

- Nginx
    - Reverse proxy
    - Web server
    - Proxy server
    
    ![Full%20Stack%20Notes%20961052c640ce44ba83e43c77e9afb945/Untitled%201.png](/images/frontend-masters-full-stack-notes-nginx.png)
    
    - `sudo apt install nginx` - Install nginx
    - `sudo service nginx start` - Start nginx
    - domina → IP → Nginx → output/site
- Nginx configuration
    - `sudo less /etc/nginx/sites-available/default` - Show nginx configuration
    
    ![Full%20Stack%20Notes%20961052c640ce44ba83e43c77e9afb945/Untitled%202.png](/images/frontend-masters-full-stack-notes-nginx-configs.png)
    
    - `sudo vi /var/www/html/index.html` - Create and edit index.html
- Nodejs configuration
    - `sudo apt install nodejs npm` - Install NodeJs and npm
    - `sudo apt install git`  - Install git
- Application Architecture
    - UI
        - CSS
        - JS
        - HTML
    
    Application architecture is very important and it's going to stay for years. The code and bug fixes are okay but the architecture is very important. 
    
- Application Setup
    - `sudo chown -R $USER:$USER /var/www` - Change ownership of the www directory to the current user
    - `mkdir /var/www/app` - Create application directory
    - `cd /var/www/app && git init` Move into app directory and intialize empty git repo.
    - `mkdir -p ui/js ui/html ui/html ui/css` - Create directories
    - `touch app.js` Create empty app file
    - `npm init` Initialize project
    - `npm i express --save`
    - vi app.js
    - The app is running in site:300 url
- Proxy Passing Traffic

![Full%20Stack%20Notes%20961052c640ce44ba83e43c77e9afb945/Untitled%203.png](/images/frontend-masters-full-stack-notes-proxy.png)

- location / {
   proxy_pass: URL_TO_PROXY_TO;
}
- `sudo vi /etc/nginx/sites-available/default` Edit nginx config
    
    ```jsx
    location / {
    	proxy_pass http://127.0.0.1:3000/;
    }
    ```
    
- Restart the nginx server
- Process Manager
    - Keeps your application running
    - Handles errors and restarts
    - Can handle logging and clustering
    - `sudo npm i -g pm2` - install pm2
    - `pm2 start app.js` - start PM2
    - `pm2 startup` - setup auto restart
    
    Further explorations:
    
    - Install Fail2ban
    - ExpressJS performance tips

## Bash basics

Standard Streams

- standard output
    - stdout
- standard input
    - stdin
- standard error
    - stderr