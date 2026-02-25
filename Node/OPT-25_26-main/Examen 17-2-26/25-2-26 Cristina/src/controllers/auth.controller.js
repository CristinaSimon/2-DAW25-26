import { enviarEmailConfirmacion } from "../mailer.js";
import { Reservas } from "../models/reservas.model.js";

// REGISTRO de nuevo usuario
export const register = async (req, res) => {
  try {
    const {cliente,habitacion,email, tipo,precio,fechaEntrada,fechaSalida} =req.body;
    const nuevaReserva= await Reservas.create({
      cliente,
      email,
      habitacion,
      tipo,
      precio,
      fechaEntrada,
      fechaSalida
    })
    //enviar email de activación
    const html = contenidoHTML( cliente,habitacion,tipo,precio,fechaEntrada,fechaSalida, enviarEmailConfirmacion);
    await enviarEmailConfirmacion(email, "Confirmar Reserva", html);


    res.status(201).json({
      message:
        "Reserva registrada exitosamente. Por favor, revisa tu email",

      //   data: { id: nuevoUsuario._id, accessToken },
      data: { id: nuevaReserva._id },
    });
  } catch (error) {
    console.log(error);
    // Error de duplicado (email único)
    if (error.code === 11000) {
      return res.status(400).json({
        message: "El email ya está registrado",
      });
    }

    // Error de validación de Mongoose
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Error de validación",
      });
    }

    // Error general
    res.status(500).json({
      message: "Error al registrar reserva",
    });
  }
};


// construir el contenido HTML del email de activación
const contenidoHTML = (name) => {
  return `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; }
                    .content { padding: 20px; background-color: #f9f9f9; }
                    .button { 
                        display: inline-block; 
                        padding: 12px 30px; 
                        background-color: #4CAF50; 
                        color: white; 
                        text-decoration: none; 
                        border-radius: 5px; 
                        margin: 20px 0;
                    }
                    .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>¡Bienvenido/a ${cliente}!</h1>
                    </div>
                    <div class="content">
                        <p>Gracias por reservar en nuestra plataforma.</p>
                        <div style="text-align: center;">
                        <h2> Detalles de la reserva</h2>
                        <ul>
                        <li>Habitacion nº ${habitacion}</li>
                        <li>Tipo: ${tipo}</li>
                        <li>Precio por noche: ${precio}</li>
                        <li>fecha de entrada: ${fechaEntrada}</li>
                        <li>fecha de salida: ${fechaSalida}</li>
                        </ul>
                        </div>                       
                    </div>
                    <div class="footer">
                        <p>© ${new Date().getFullYear()} ${process.env.URL} || 'Tu App'}. Todos los derechos reservados.</p>
                    </div>
                </div>
            </body>
            </html>
        `;
};

