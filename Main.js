
function printToPDF() {
    window.print();
}

function saveAsPDF() {
    // Gunakan library jsPDF untuk menyimpan sebagai PDF
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.save("document.pdf");
}

function downloadAsPDF() {
    const element = document.body;
    html2pdf(element);
}

