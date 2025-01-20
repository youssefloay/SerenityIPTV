export function useWhatsApp() {
  const handleWhatsApp = (type: string) => {
    let message = '';
    
    switch (type) {
      case 'inquiry':
        message = encodeURIComponent(
          "Hello! I'm interested in your IPTV service. Can you please provide more information?"
        );
        break;
      default:
        message = encodeURIComponent(
          `Hello! I'm interested in the ${type} IPTV package. Please provide more information about the service and payment methods.`
        );
    }
    
    window.open(`https://wa.me/+201557946464?text=${message}`, '_blank');
  };

  return { handleWhatsApp };
}