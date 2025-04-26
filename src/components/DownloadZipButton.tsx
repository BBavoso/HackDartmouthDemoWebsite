export default function DownloadZipButton() {
  return (
    <a
      href="/public/WhatsTheCode-0.0.1.zip"
      download
      className="flex items-center px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors shadow-md text-sm"
    >
      <span className="font-medium">Download ZIP</span>
    </a>
  );
}
