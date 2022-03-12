# .NET 6 + Vue.js 3

This code is the repo for a post series on Peakd. 

# Posts
* https://peakd.com/hive-169321/@farpetrad/hosting-a-vue-3-application-in-net-6
* https://peakd.com/hive-169321/@farpetrad/hosting-a-vue-3-application-in-net-6-part-2-enabling-typescript-and-jest


## Features
 * Content compression using gzip or brotli 
 * Static content caching with custom scheme for assets while not caching html content for passing http://webpagetest.org/ 
 * Response caching
 * webpack5
 * babel7
 * bootstrap via cdn
 * typescript


## Building
To build the solution you must build the C# solution and the vue client.  
* C# can be built through visual studio or from the command line with dotnet build --configuration Release
* Vue client can be built with npm run dev/build from the command line

* C# Build tested in Visual Studio 2022
* Vue build tested with node.js 10.16.3 and 13.12.0
