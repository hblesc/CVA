        function getUsername() {
             var username = localStorage.getItem('username');
             var avatarFile = localStorage.getItem('avatarFile');
            if (!username) {
             username = prompt("Please enter your username:");
            if (!username) {
            username = "Guest";
             }
            localStorage.setItem('username', username);
    }
        return { username: username, avatarFile: avatarFile }; 
}
        function changeUsername() {
                var newUsername = prompt("Please enter your new username:");
                if (newUsername) {
                 localStorage.setItem('username', newUsername);
                }
         }

        function displayText() {
         var newText = document.getElementById("textInput").value;

         if (newText.length < 1) {
                alert("Please type a message");
                document.getElementById("textInput").value = "";
                return;
            }

        if (newText.length > 150) {
        alert("Too many characters! Please limit your message to 150 characters.");
        document.getElementById("textInput").value = "";
        return;
    }


            var user = getUsername(); 
            var existingText = document.getElementById("displayArea").innerHTML;
            var avatarInput = document.getElementById('avatarInput');
            var avatarFile = avatarInput.files[0];
            var avatarSrc = user.avatarFile ? user.avatarFile : "images/favicon.ico";
            if (avatarFile) {
                var reader = new FileReader();
            reader.onload = function(event) {
                    avatarSrc = event.target.result;
                localStorage.setItem('avatarFile', avatarSrc);
        };
             reader.readAsDataURL(avatarFile);
    }
            var avatarElement = '<img src="' + avatarSrc + '" alt="Avatar" style="width:40px;height:40px;">';
            
            var combinedText = avatarElement + "[" + user.username + "]> " + newText;
        
            var displayElement = document.getElementById("displayArea");
            displayElement.innerHTML += "<br>" + combinedText;

            document.getElementById("textInput").value = "";
            avatarInput.value = '';


}   

            document.getElementById("textInput").addEventListener("keydown", function(event) {
            if (event.keyCode === 13) {
            displayText(); 
      }

    });
        getUsername();

        function toggleDiv() {
                var div = document.getElementById('myDiv');
                div.style.display = div.style.display === 'none' ? 'block' : 'none'
        }
        function toggleInfo(){
                var div2 = document.getElementById('info')
                div2.style.display = div2.style.display === 'none' ? 'block' : 'none'
        }
        function closeInfo(){
                var div2 = document.getElementById('info')
                div2.style.display = div2.style.display === 'none' ? 'block' : 'none'
        }