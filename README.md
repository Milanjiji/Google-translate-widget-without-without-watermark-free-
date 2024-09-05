# Google-translate-widget-without-without-watermark-free-
A simple tool for translating entire webpages using Google Translate without watermarks and for free.

## setup 

1 . create a project in ```https://script.google.com/```

2 . Add the following code 

   ```
      function doPost(e) {
          var error = null;
      
          if (typeof e.parameter.source_lang == 'undefined') {
              error = 'source_lang is required';
          } else if (typeof e.parameter.target_lang == 'undefined') {
              error = 'target_lang is required';
          } else if (typeof e.parameter.text == 'undefined') {
              error = 'text is required';
          } else if (e.parameter.source_lang.trim() == '') {
              error = 'source_lang could not be empty';
          } else if (e.parameter.target_lang.trim() == '') {
              error = 'target_lang could not be empty';
          } else if (e.parameter.text.trim() == '') {
              error = 'text could not be empty';
          } else {
              var source_lang = e.parameter.source_lang.trim();
              var target_lang = e.parameter.target_lang.trim();
              var text = e.parameter.text.trim();
      
              if (source_lang == 'auto') {
                  source_lang = ''; // empty value is auto detect
              }
      
              try {
                  var translate = LanguageApp.translate(text, source_lang, target_lang);
              } catch (err) {
                  error = err.message;
              }
          }
      
          if (error == null) {
              var result = JSON.stringify({
                  "status": "success",
                  "translatedText": translate
              });
          } else {
              var result = JSON.stringify({
                  "status": "error",
                  "message": error
              });
          }
      
          return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
      }
```

3 . save project
4 . deploy project ( new deployment ) and copy the deployment url for eg . ```https://script.google.com/macros/s/AKfycbzxxIEj4HZ73gpILtA6BiSHoxlpHRxOrjxP2OI550-xxxxxxxxxxxxxx-xxxxxxx/exec```
5 . paste the url in code 

  ```
        
  fetch("https://script.google.com/macros/s/AKfycbzxxIEj4HZ73gpILtA6BiSHoxlpHRxOrjxP2OI550-xxxxxxxxxxxxxx-xxxxxxx/exec", {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if(data.status === "success") {...
```

6 . run the index.html for testing 



