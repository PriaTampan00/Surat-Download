
function printToPDF() {
    window.print();
}

function saveAsPDF() {
    // Gunakan library jsPDF untuk menyimpan sebagai PDF
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.save("document.pdf");
}

function downloadContainerAsPDF() {
    const element = document.querySelector('.container');
    html2pdf().from(element).save();
}

