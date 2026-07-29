import { WhatsAppOrderFormData } from '../types';

export const WHATSAPP_NUMBER = '919386944232'; // 09386944232 formatted with country code 91
export const DISPLAY_PHONE = '09386944232';
export const DISPLAY_PHONE_FORMATTED = '+91 93869 44232';
export const BUSINESS_NAME = 'Kailash Medical Hall';
export const BUSINESS_ADDRESS = 'Kailash Medical Hall, Chand Chaura, Gaya, Bihar 823001';

export function createWhatsAppOrderLink(data: WhatsAppOrderFormData): string {
  const text = `Hello *${BUSINESS_NAME}*,
I would like to place a *Medicine Order* via your website:

*Customer Name:* ${data.customerName || 'N/A'}
*Phone Number:* ${data.phone || 'N/A'}
*Email:* ${data.email || 'N/A'}
*Medicine Required:* ${data.medicineName || 'N/A'}
*Delivery Address:* ${data.address || 'N/A'}
*Prescription Attached:* ${data.hasPrescription ? 'Yes (Will attach image in WhatsApp)' : 'No / OTC Item'}
*Preferred Delivery Time:* ${data.preferredDeliveryTime || 'As soon as possible'}
*Additional Notes / Message:* ${data.message || 'None'}

Please confirm stock availability and total price. Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function createDirectWhatsAppChatLink(customPrompt?: string): string {
  const defaultText = customPrompt || `Hello *${BUSINESS_NAME}*, I have an inquiry regarding medicine availability and pricing at your Chand Chaura, Gaya store.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultText)}`;
}

export function createCallLink(): string {
  return `tel:${DISPLAY_PHONE}`;
}

export function createGoogleMapsDirectionsLink(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_ADDRESS)}`;
}
