"use client";
const DiscordButton = () => {
  const handleDiscordClick = () => {
    window.open("https://discord.gg/B99yGVK5K8", "_blank");
  };

  return (
    <button
      className="bg-transparent text-secondary font-semibold py-3 px-6 rounded-lg border border-secondary hover:bg-tertiary hover:text-white transition-colors"
      onClick={handleDiscordClick}
    >
      Discord
    </button>
  );
};

export default DiscordButton;
