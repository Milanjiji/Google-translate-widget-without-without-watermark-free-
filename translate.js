var button = document.createElement("div");

// apply any style for form
const elementContent = `
    <form style="position:fixed;right:0px;bottom:0px;border:1px black solid;border-radius:3px;padding:10px" id="translationForm" method="post">
        <b>SOURCE LANGUAGE</b><br>
        <select name="source_lang" id="sourceLang">
            <option value="auto">Auto Detect</option>
            <option value="en">English</option>
        </select><br>
        <b>TARGET LANGUAGE</b><br>
        <select name="target_lang" id="targetLang">
            <option value="en">English</option>
            <option value="id">Indonesia</option>
            <option value="ar">Arabic</option>
            <option value="he">Hebrew</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh-CN">Chinese (Simplified)</option>
            <option value="zh-TW">Chinese (Traditional)</option>
            <option value="ja">Japanese</option>
            <option value="ru">Russian</option>
            <option value="pt">Portuguese</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
            <option value="it">Italian</option>
            <option value="ko">Korean</option>
            <option value="vi">Vietnamese</option>
            <option value="nl">Dutch</option>
            <option value="tr">Turkish</option>
        </select><br>
        <input type="submit" value="Translate Page" id="translateButton">
    </form>
`;

button.innerHTML = elementContent;
button.id = "myButton";
button.className = "btn btn-primary";

var container = document.body;
container.appendChild(button);

document.getElementById('translationForm').addEventListener('submit', function(e) {
    e.preventDefault();  

    console.log("start transilation");
    // apply any method for loading screen 
    // for eg document.getElementById('loadingscreen').style.display = 'block';
    
    var pageText = document.body.innerHTML;
    
    var formData = new FormData();
    formData.append('source_lang', document.getElementById('sourceLang').value);
    formData.append('target_lang', document.getElementById('targetLang').value);
    formData.append('text', pageText);

    // fetch("https://script.google.com/macros/s/AKfycbzxxIEj4HZ73gpILtA6BiSHoxlpHRxOrjxP2OI550-xxxxxxxxxxxxxx-xxxxxxx/exec", {
    // apply the url copied from apps.script

    fetch("https://script.google.com/macros/s/AKfycbzxxIEj4HZ73gpILtA6BiSHoxlpHRxOrjxP2OI550-xxxxxxxxxxxxxx-xxxxxxx/exec", {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if(data.status === "success") {
    
            document.body.innerHTML = data.translatedText;
            console.log("end transilation");
            // apply any method for loading screen 
            // for eg document.getElementById('loadingscreen').style.display = 'none';

        } else {
            alert('Error translating the page: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});