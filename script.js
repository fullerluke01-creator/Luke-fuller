function generateInvoice() {
  const name = document.getElementById('customerName').value;
  const item = document.getElementById('itemDesc').value;
  const amount = document.getElementById('amount').value;

  if (!name || !item || !amount) {
    alert('Please fill in all fields');
    return;
  }

  const invoiceDiv = document.getElementById('invoice');
  invoiceDiv.innerHTML = `
    <h2>Invoice</h2>
    <p><strong>Customer:</strong> ${name}</p>
    <p><strong>Item:</strong> ${item}</p>
    <p><strong>Amount:</strong> $${amount}</p>
    <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
  `;

  document.getElementById('downloadBtn').style.display = 'inline-block';
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const invoiceContent = document.getElementById('invoice').innerText;
  doc.text(invoiceContent, 10, 10);
  doc.save('invoice.pdf');
}
