var hasSubmitted = false;

function submit() {
    // Remove the placeholder text if it exists
    if (hasSubmitted === false) {
        document.getElementById("noPastes").remove();
    }

    // Create new paste
    var pasteData = document.getElementById("pasteBox").value;
    var newPaste = document.createElement("p");
    var newPasteText = document.createTextNode(pasteData);
    newPaste.appendChild(newPasteText);

    // Create delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px"; // REPLACE WITH EXTERNAL CSS FILE LATER
    deleteBtn.onclick = function() {
        newPaste.remove();
    };
    newPaste.appendChild(deleteBtn);

    // Insert before the first (newest) entry. If there are no entries, append
    var firstChild = document.getElementById("pastes").firstChild;
    document.getElementById("pastes").insertBefore(newPaste, firstChild);

    alert("Waow u have sumbiited tekst for java skript");
    hasSubmitted = true;
}
