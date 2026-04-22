# Configuración de EmailJS para el Formulario de Leads

Este proyecto usa **EmailJS** para enviar propuestas directamente desde el navegador, sin necesidad de backend.

## Paso 1: Crear cuenta en EmailJS

1. Ve a https://www.emailjs.com
2. Click en **Sign Up** (es gratuito)
3. Crea tu cuenta con tu email

## Paso 2: Conectar tu email (Gmail o Yahoo)

### Si usas Gmail:
1. En el dashboard de EmailJS, ve a **Email Services**
2. Click en **Add Service**
3. Selecciona **Gmail**
4. Haz click en **Connect with Gmail**
5. Autoriza el acceso

### Si usas Yahoo:
1. Ve a **Email Services** → **Add Service**
2. Selecciona **Other SMTP**
3. Configura:
   - **Host:** smtp.mail.yahoo.com
   - **Port:** 465 (SSL)
   - **Username:** tu@yahoo.com.ar
   - **Password:** Contraseña de aplicación de Yahoo
4. Click en **Test Connection** y luego **Save**

## Paso 3: Crear plantilla de email

1. Ve a **Email Templates** en el dashboard
2. Click en **Create New Template**
3. Nombre: `contact_form` (o lo que prefieras)
4. **To Email:** `{{to_email}}`
5. **Subject:** `Nueva Propuesta de {{from_name}}`

En el **Body**, copia esto:

```html
<h2>Nueva Propuesta Recibida</h2>

<p><strong>Nombre:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Teléfono:</strong> {{phone}}</p>

<h3>Mensaje:</h3>
<p>{{message}}</p>

---
<p><em>Responde a {{from_email}}</em></p>
```

6. Click en **Save**

## Paso 4: Obtener credenciales

1. Ve a **Account** → **API Keys**
2. Copia tu **Public Key**

3. Ve a **Email Services** y copia tu **Service ID**

4. Ve a **Email Templates** y copia tu **Template ID**

## Paso 5: Configurar el .env

Crea un archivo `.env` en la raíz del proyecto:

```
VITE_EMAILJS_SERVICE_ID=service_tu_id_aqui
VITE_EMAILJS_TEMPLATE_ID=template_tu_id_aqui
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

**Ejemplo:**
```
VITE_EMAILJS_SERVICE_ID=service_a1b2c3d4e5f6g7h8
VITE_EMAILJS_TEMPLATE_ID=template_x1y2z3a4b5c6d7e8
VITE_EMAILJS_PUBLIC_KEY=abc123def456ghi789jkl012mno345
```

## Paso 6: Probar

```bash
npm run dev
```

1. Abre el navegador
2. Scroll hasta "Contacto"
3. Click en "Solicitar propuesta"
4. Completa el formulario y envía

Deberías recibir el email en baltasarbruschetti@yahoo.com.ar

## Troubleshooting

**"Template not found"**
- Verifica que el Template ID sea correcto
- Verifica que el template esté publicado en EmailJS

**"Service not found"**
- Verifica que el Service ID sea correcto
- Verifica que el servicio esté conectado

**"Invalid public key"**
- Verifica que copiaste toda la public key correctamente
- En el .env, el nombre debe ser `VITE_EMAILJS_PUBLIC_KEY` (exacto)

**No recibo emails**
- Revisa carpeta SPAM
- Verifica que {{to_email}} esté en el template
- Verifica que `baltasarbruschetti@yahoo.com.ar` sea el email correcto

## Límites Gratuitos

EmailJS ofrece **200 emails/mes** de forma gratuita, suficiente para un sitio pequeño.

Si necesitas más, upgrade a plan de pago.

## Variables disponibles en el template

Desde el formulario se envían estas variables:
- `{{from_name}}` - Nombre del cliente
- `{{from_email}}` - Email del cliente
- `{{phone}}` - Teléfono del cliente
- `{{message}}` - Mensaje/propuesta
- `{{to_email}}` - Email destino (baltasarbruschetti@yahoo.com.ar)

Puedes usarlas en tu template HTML.
