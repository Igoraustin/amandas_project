import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left';
  pulseAnimation?: boolean;
  showOnMobile?: boolean;
  showAfterScroll?: boolean;
  scrollThreshold?: number;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Olá Dra. Amanda, gostaria de agendar uma consulta.",
  position = "bottom-right",
  pulseAnimation = true,
  showOnMobile = true,
  showAfterScroll = true,
  scrollThreshold = 300
}) => {
  const [isVisible, setIsVisible] = useState(!showAfterScroll);
  
  // Handle scroll visibility
  useEffect(() => {
    if (!showAfterScroll) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > scrollThreshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll, scrollThreshold]);
  
  // Format phone number (remove any non-digit character)
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  
  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // WhatsApp deep link
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
  
  // Hide on mobile if specified
  if (!showOnMobile && window.innerWidth < 768) {
    return null;
  }
  
  // Don't render if not visible (based on scroll)
  if (!isVisible) {
    return null;
  }
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
      className={`
        fixed ${position === 'bottom-right' ? 'right-6' : 'left-6'} bottom-6
        z-50 bg-green-500 hover:bg-green-600
        text-white p-4 rounded-full shadow-lg
        transition-all duration-300 transform hover:scale-105
        flex items-center justify-center
        ${pulseAnimation ? 'animate-pulse hover:animate-none' : ''}
      `}
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;