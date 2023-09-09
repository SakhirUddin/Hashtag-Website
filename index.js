function convertToCSV() {
    const excelData = document.getElementById('excelData').value;
    
    // Split the Excel data by newline to separate rows
    const rows = excelData.split('\n');

    // Filter out any empty rows
    const nonEmptyRows = rows.filter(row => row.trim() !== '');

    // Join the non-empty rows with commas to create a CSV-like list
    const csvList = nonEmptyRows.join(', ');

    // Update the 'commaSeparated' textarea with the result
    document.getElementById('commaSeparated').value = csvList;
}

function copyToClipboard() {
    const commaSeparated = document.getElementById('commaSeparated').value;
    
    // Create a temporary textarea to hold the text to be copied
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = commaSeparated;
    document.body.appendChild(tempTextarea);

    // Select the text in the temporary textarea and copy it to the clipboard
    tempTextarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);

    // Provide user feedback (optional)
    alert('Copied to clipboard: ' + commaSeparated);
}