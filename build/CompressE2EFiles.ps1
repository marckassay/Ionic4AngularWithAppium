# script to create 'E2ECode.zip' file
Remove-Item -Path $env:TEMP/myApp -Force -Recurse -ErrorAction SilentlyContinue
New-Item -Path $env:TEMP/myApp -ItemType Directory -Force
Copy-Item -Path 'typings' $env:TEMP/myApp/typings -Recurse -Container -Force
Copy-Item -Path 'e2e/appium' $env:TEMP/myApp/e2e/appium -Recurse -Container -Force
Compress-Archive -Path $env:TEMP/myApp/* -DestinationPath E2ECode -Force
