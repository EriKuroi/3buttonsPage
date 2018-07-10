window.onload = function () {


    var googleButton = document.getElementById('google');
    var imageButton = document.getElementById('image');
    var humanButton = document.getElementById('human');


    function goToGoogle() {
        window.location.href = 'http://www.google.com';
    }

    function showImage() {
        document.write('<img src = "img/42.jpg">')
    }

    function showHuman() {
        var human = {
            firstName: 'Nambindic',
            lastName: 'Cumberbatch',
            age: 145,
            race: 'elf',
            hairColor: 'platinum'
        };
        console.log({human: human});
        var propNames = Object.getOwnPropertyNames(human);
        var allHuman = document.createElement('ul');
        var objectName = document.createTextNode('Human');
        allHuman.appendChild(objectName);

        for (var i = 0; i < propNames.length; i++) {
            var humanEntry = document.createElement('li');
            var humanEntryText = document.createTextNode(propNames[i] + ': ' + human[propNames[i]]);
            humanEntry.appendChild(humanEntryText);
            allHuman.appendChild(humanEntry);

        }
        document.getElementById('afterbutton').appendChild(allHuman);
    }

    googleButton.addEventListener('click', goToGoogle);
    imageButton.addEventListener('click', showImage);
    humanButton.addEventListener('click', showHuman);

};