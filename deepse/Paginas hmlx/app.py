from flask import Flask, render_template_string

app = Flask(__name__)

@app.route('/')
def index():
    return render_template_string('''
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ejemplo HTMX</title>
            <script src="https://unpkg.com/htmx.org"></script>
        </head>
        <body>
            <h1>Ejemplo de HTMX</h1>
            <button hx-get="/mensaje" hx-target="#resultado">
                Obtener mensaje
            </button>
            <div id="resultado">
                Haz clic en el botón para ver el mensaje.
            </div>
        </body>
        </html>
    ''')

@app.route('/mensaje')
def mensaje():
    return "¡Hola desde el servidor!"

if __name__ == '__main__':
    app.run(debug=True)