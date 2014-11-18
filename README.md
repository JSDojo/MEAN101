# MEAN101
Domesticating this MEAN beast, step by step

### 1. The simple setup
The following config files were created 
	
- package.json (for backend dependencies management and project configuration) 
- bower.json(for front end dependencies management)
- .bowerrc(used to configure bower)

Also, these other files were created

- server.js Where we are gonna instantiate our node server
- README.md: this readme file

#### 1.1 Managing backend dependencies with NPM

The dependencies I declared in our package.json file are as follow: 

	{
        "name":"ContactsAPI",
        "description":"A nice backend API with a frontend to test some $http requests",
        "dependencies":{
            "express":"latest",        
            "mongoose":"latest",
            "body-parser":"latest",
            "morgan":"latest"
        }    
	}

**express**: our multi tiered swiss army knife of backend devcandy, we are gonna use it to set up our RESTful API

**mongoose**: an awesome ORM for mongo db, we are gonna use it for our CRUD operations on the data layer

**body-parser**: this express extension (previously found built int on earlier express versions) is gonna let us catch the request's body

**morgan**: our little express logger, to find out where we screwed up

#### 1.2 Managing frontend dependencies with bower

The dependencies declared for our frontend look as follows:

	{
        "name":"ContactsAPI",
        "description":"A nice backend API with a frontend to test some $http requests",
        "dependencies":{        
            "angular":"latest",
            "bootstrap":"latest",
            "font-awesome":"latest"
        }
    }

There is a catalog for the packages you can use on bower.io

**Also** before installing those dependencies, lets tell bower where do we want our dependencies delivered, that's where .bowerrc comes, and it looks like this:

	{
        "directory":"public/vendor"
    }
    
This overrides the default directory (./bower_components) and tells bower to install stuff on "./public/vendor"

### 1.3 Installing all that stuff

Now lets run some commandline... commands

	npm install -g bower
    
And then  

	npm install
    
and finally

    bower install
    
This should leave our directory tree looking somewhat like this: 

	ContactsApi(master)
    |--node_modules
    |  |--{backendDependencies}
    |--public
    |  |--vendor
    |     |--{fronendDependencies}
    |--.bowerrc
    |--bower.json
    |--package.json
    |--README.md
    |--server.js
    
Now we are ready to start...









   
