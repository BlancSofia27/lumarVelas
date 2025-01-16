import emailjs from "emailjs-com"

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
// Función para enviar el email
export const sendEmail = async ({
  name,
  message,
  phone,
  email,
}) => {
  const templateParams = {
    name: name,
    message: message,
    phone: phone,
    email:email,
  }

  try {
    const response = await emailjs.send(
      serviceId, // Reemplaza con tu SERVICE ID
      templateId, // Reemplaza con tu TEMPLATE ID
      templateParams,
      publicKey// Reemplaza con tu USER ID
    )
    console.log("Email enviado correctamente:", response.status, response.text)
    return response
  } catch (error) {
    console.error("Error al enviar el email:", error)
    throw error
  }
}
