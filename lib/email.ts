// Email service utilities (EmailJS integration)
import emailjs from 'emailjs-com'


export async function sendOrderEmail({
    customer_name,
    customer_email,
    order_id,
    order_date,
    order_items,
    subtotal_formatted,
    shipping_formatted,
    total_formatted,
    shipping_address_line_1,
    shipping_address_line_2,
    shipping_city,
    shipping_prefecture,
    shipping_postal,
    orderType,
    email
}: {
    customer_name: string
    customer_email: string
    order_id: string
    order_date: string
    order_items: Array<{ name: string; quantity: number; price: number }>
    subtotal_formatted: string
    shipping_formatted: string
    total_formatted: string
    shipping_address_line_1: string
    shipping_address_line_2: string
    shipping_city: string
    shipping_prefecture: string
    shipping_postal: string
    orderType: 'pickup' | 'delivery',
    email: string
}) {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_ORDER || ''
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ORDER || ''
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

    console.log('EmailJS User ID:', userID)
    console.log('EmailJS Service ID:', serviceID)
    console.log('EmailJS Template ID:', templateID)
    // Generate HTML for order items
    let orderItemsHtml = ''
    order_items.forEach(item => {
        orderItemsHtml += `
        <tr>
            <td style="padding: 12px; border-bottom: 1px solid #dcd8c4;">
                ${item.name} (x${item.quantity})
            </td>
            <td style="text-align: right; padding: 12px; border-bottom: 1px solid #dcd8c4;">
                ${item.price}
            </td>
        </tr>
        `
    })

    // Compose city/postal string
    const cityPostal = [shipping_city, shipping_prefecture, shipping_postal].filter(Boolean).join(', ')

    // Set default values for pickup
    const addressLine1 = shipping_address_line_1 || "Pick in store"
    const addressLine2 = shipping_address_line_2 || "Pick in store"
    const cityPostalFinal = orderType === 'pickup' ? '' : cityPostal

    const templateParams = {
        customer_name,
        customer_email,
        order_id,
        order_date,
        order_items_html: orderItemsHtml,
        subtotal_formatted,
        shipping_formatted,
        total_formatted,
        shipping_address_line_1: addressLine1,
        shipping_address_line_2: addressLine2,
        shipping_city_postal: cityPostalFinal,
        email: customer_email
    }

    try {

        const result = await emailjs.send(serviceID, templateID, templateParams, userID)
        return result
    } catch (err) {
        throw err
    }
}


export async function sendContactEmail({
    firstName,
    lastName,
    email,
    subject,
    message
}: {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}) {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_CONTACT || '';
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT || '';
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';


    const templateParams = {
        name: `${firstName} ${lastName}`,
        email,
        subject,
        message
    };

    try {
        const result = await emailjs.send(serviceID, templateID, templateParams, userID);
        return result;
    } catch (err) {
        throw err;
    }
}




