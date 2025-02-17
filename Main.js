function printContainer() {
    var printContents = document.getElementById('printableContainer').innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}

function downloadContainerAsPDF() {
    const element = document.querySelector('.container');
    html2pdf().from(element).save();
}

