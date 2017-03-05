# TPipe Scale use case example: Express <-> AWS example

In this repo you can find why tpipe is great to avoid vendor locking.

Here, we execute the same function (a simple sum) in a tiny express webserver AND (with 0 modifications to it) we execute it also over a AWS Lambda function through AWS Api Gateway (thanks to the amazing conan npm package + plugins).

By following this pattern using the frameworks of your choice you can be sure your business is in one place.  

For example you can prepare to scale with AWS in the future. Or maybe the oppossite?  
Or just change to another framework/environment, why not?  
Avoid vendor lock now.

## Lift express
```bash
npm start
```

## Deploy lambda
```bash
# First, install the aws cli and execute 
aws configure
# Give it rights for lambda, api gateway and stuff like it says on the conan docs
npm run deploy
```

Based on the default express generator.

I will extend this tiny example soon.  
Any doubts, contact me at nicosommi@gmail.com

MIT  
nicosommi
