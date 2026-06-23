import html2pdf from "html2pdf.js";

function DownloadButton() {
  const downloadPDF = () => {
    const element =
      document.getElementById(
        "resume-preview"
      );

    const options = {
      margin: 10,

      filename: "Resume.pdf",

      image: {
        type: "jpeg",
        quality: 1,
      },

      html2canvas: {
        scale: 2,
        useCORS: true,
      },

      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },

      pagebreak: {
        mode: [
          "avoid-all",
          "css",
          "legacy",
        ],
      },

      enableLinks: true,
    };

    html2pdf()
      .set(options)
      .from(element)
      .save();
  };

  return (
    <button
      className="download-btn"
      onClick={downloadPDF}
    >
      Download PDF
    </button>
  );
}

export default DownloadButton;