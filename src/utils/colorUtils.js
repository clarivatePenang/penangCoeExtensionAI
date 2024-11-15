export function getStatusColor(status) {
    const colorMap = {
      new: "rgb(191, 39, 75)",
      waiting: "rgb(247, 114, 56)",
      escalated: "rgb(140, 77, 253)",
      released: "rgb(45, 200, 64)",
      ready: "rgb(251, 178, 22)"
    };
    return colorMap[status.toLowerCase()] || "";
  }
  
  export function generateStyle(color) {
    return `background-color: ${color}; border-radius: 6px; padding: 3px 6px; color: white; font-weight: 500;`;
  }