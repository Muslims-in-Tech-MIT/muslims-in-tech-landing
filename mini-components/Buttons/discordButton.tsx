"use client";
const DiscordButton = () => {
  const handleDiscordClick = () => {
    window.open("https://discord.gg/B99yGVK5K8", "_blank");
  };

  return (
    <button
      className="bg-transparent text-blue-600 font-semibold py-3 px-6 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
      onClick={handleDiscordClick}
    >
      Discord
    </button>
  );
};

export default DiscordButton;
