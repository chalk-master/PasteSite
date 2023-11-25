var hasSubmitted = false;

function submit() {
    // Get the text from the text box. If it's empty, don't create it
    var pasteData = document.getElementById("pasteBox").value;
    document.getElementById("pasteBox").value = ""; // Empty the text box after submitting
    if (pasteData == "") {
        alert("U troll. U cant haves empty loll")
        return;
    }

    // Remove the placeholder text if it exists
    if (hasSubmitted === false) {
        document.getElementById("noPastes").innerHTML = "";
    }

    // Create new paste text
    var newPaste = document.createElement("p");
    var newPasteText = document.createTextNode(pasteData);
    newPaste.appendChild(newPasteText);

    // Create delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px"; // REPLACE WITH EXTERNAL CSS FILE LATER
    deleteBtn.onclick = function() {
		if (confirm("Are you sure you want to delete this?") === true) {
			newPaste.remove();
            if (!document.getElementById("pastes").hasChildNodes()) {
                document.getElementById("noPastes").innerHTML = "<em>No pastes here...</em>";
                hasSubmitted = false;
            }
		}
    };
    newPaste.appendChild(deleteBtn);

    // Insert before the first (newest) entry. If there are no entries, append
    var firstChild = document.getElementById("pastes").firstChild;
    document.getElementById("pastes").insertBefore(newPaste, firstChild);

    hasSubmitted = true;
}
