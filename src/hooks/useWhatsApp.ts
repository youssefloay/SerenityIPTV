export function useWhatsApp() {
  const handleWhatsApp = (duration: string) => {
    const message = encodeURIComponent(
      `Hello! I'm interested in the ${duration} IPTV package. Please provide more information about the service and payment methods.`
    );
    window.open(`https://wa.me/+201557946464?text=${message}`, '_blank');
  };

  return { handleWhatsApp };
}