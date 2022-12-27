# MELON Ads
Used to create randon ads on the virtual machine

Version 1 (current) - the names of the ads are hardcoded in melonads.js.  The must EXACTLY match the file names of the .png files on the server.

Version 2 (future) - give user the ability to upload files to common folder. The issue is reading the directory on the client (may not be allowed)

## Getting Started

This is a CHROME extention.

Because of web security, the files will not be able to reside on a client machine (VM). Rather, it will temporarily be house on a server.

### Adding files to the application

  <<<< ON THE SERVER >>>>
The .png files must follow the specific specifications in order to work properly:

   - TOP CENTER  --- an ad to appear on the top (center) it must be 600px x 100px
      the filename MUST start with "top-" (example: "top-headsets.png") NO SPACES!!!!!

   - RIGHT CORNER --- an ad to appear on the top (center) it must be 400px x 250px
      the filename MUST start with "corner-" (example: "corner-headsets.png") NO SPACES!!!!!

   - RIGHT SIDE --- an ad to appear on the top (center) it must be 106px x 399px
      the filename MUST start with "side-" (example: "side-headsets.png") NO SPACES!!!!!


 <<<< WITHIN THE CHROME APPLICATION >>>>

   - the filenames are hardcoded in MANIFEST.JS and they must EXACTLY match the names on the server in order to be recognized (see above).
   - if a new filename is added to the manifest.js file, make sure to reload the CHROME extention on the local machine.


### Installing on the VM

1) Install the two files MANIFEST.JS and MELONAD.JS in the folder that will be used to unpack the CHROME extension.

2) As is, the extension is set to work on ALL websites. If there are specific websites to monitor, enter the website URL's in the appropriate lines in the manifest file.  i.e replace the <all_urls> in the content_scripts element with the desired website.


## Built With

manifest.json
melonads.js