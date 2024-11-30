/**
 * Format a number as a currency string for INR and USD.
 * @param amount - The numeric value to format.
 * @param currency - The currency code ('INR' or 'USD'). Defaults to 'INR'.
 * @param locale - The locale string (e.g., 'en-IN' for INR, 'en-US' for USD). Defaults based on the currency.
 * @returns A formatted price string.
 */
export const formatPrice = (amount: number, currency: 'INR' | 'USD' = 'INR', locale?: string): string => {
    const defaultLocale = currency === 'INR' ? 'en-IN' : 'en-US';

    try {
      return new Intl.NumberFormat(locale || defaultLocale, {
        style: 'currency',
        currency,
      }).format(amount);
    } catch (error) {
      console.error("Error formatting price:", error);
      return `${amount} ${currency}`;
    }
  };
